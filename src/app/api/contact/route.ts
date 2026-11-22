import { NextResponse } from 'next/server';

/*
 * Contact intake proxy. The browser posts here; this route validates the
 * message and forwards it to the self-hosted n8n webhook, so the n8n URL and
 * token never reach the client.
 *
 * Server-side env (Vercel, never NEXT_PUBLIC_*):
 *   N8N_CONTACT_URL    full URL of the n8n POST webhook
 *   N8N_CONTACT_TOKEN  sent as the `x-contact-token` header
 *
 * Any failure returns ok:false so the form can fall back to a mailto: link.
 */
export const runtime = 'nodejs';

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Best effort only: serverless instances do not share memory.
const hits = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_PER_WINDOW;
}

const line = (v: unknown, max: number) =>
  typeof v === 'string'
    ? v.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max)
    : '';

const text = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, '').trim().slice(0, max) : '';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success.
  if (typeof body.company_site === 'string' && body.company_site.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = line(body.name, 80);
  const email = line(body.email, 120);
  const subject = line(body.subject, 140);
  const message = text(body.message, 4000);

  if (!name || !EMAIL.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  const ip = (req.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim();
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  const url = process.env.N8N_CONTACT_URL;
  if (!url) return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });

  try {
    const token = process.env.N8N_CONTACT_TOKEN;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(token ? { 'x-contact-token': token } : {}),
      },
      body: JSON.stringify({ name, email, subject, message }),
      signal: AbortSignal.timeout(20000),
      cache: 'no-store',
    });
    // Require an explicit {"ok": true}: a bare 200 can come from a failed run.
    const result = await res.json().catch(() => null);
    if (!res.ok || !result || result.ok !== true) throw new Error('n8n did not confirm');
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'upstream' }, { status: 502 });
  }
}
