import fallback from '@/data/live-stats.json';

/*
 * Live stats, produced by the self-hosted n8n workflow in
 * `n8n/portfolio-live-stats.workflow.json`.
 *
 * Every number is nullable on purpose: a metric that could not be measured is
 * hidden, never guessed. If n8n is unreachable, or returns something that does
 * not match this shape, the site falls back to the bundled snapshot in
 * `src/data/live-stats.json`, so the page never breaks and never shows
 * made-up figures.
 *
 * Set on the server (Vercel project settings), never as NEXT_PUBLIC_*:
 *   N8N_STATS_URL    full URL of the n8n GET webhook
 *   N8N_STATS_TOKEN  optional, sent as the `x-stats-token` header
 */
export type LiveStats = {
  updatedAt: string | null;
  github: {
    commits30d: number | null;
    commitsTotal: number | null;
    publicRepos: number | null;
  };
  n8n: {
    runs30d: number | null;
    successRate: number | null; // 0–100
  };
  lighthouse: {
    url: string | null;
    performance: number | null; // 0–100
    accessibility: number | null;
    bestPractices: number | null;
    seo: number | null;
  };
};

export type LiveStatsResult = { stats: LiveStats; live: boolean };

const num = (v: unknown): number | null =>
  typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : null;

const pct = (v: unknown): number | null => {
  const n = num(v);
  return n !== null && n <= 100 ? Math.round(n) : null;
};

const obj = (v: unknown): Record<string, unknown> =>
  v && typeof v === 'object' ? (v as Record<string, unknown>) : {};

/** Coerces untrusted JSON into LiveStats, dropping anything malformed. */
export function parseStats(raw: unknown): LiveStats {
  const r = obj(raw);
  const g = obj(r.github);
  const n = obj(r.n8n);
  const l = obj(r.lighthouse);
  const date = typeof r.updatedAt === 'string' && !Number.isNaN(Date.parse(r.updatedAt));

  return {
    updatedAt: date ? (r.updatedAt as string) : null,
    github: {
      commits30d: num(g.commits30d),
      commitsTotal: num(g.commitsTotal),
      publicRepos: num(g.publicRepos),
    },
    n8n: { runs30d: num(n.runs30d), successRate: pct(n.successRate) },
    lighthouse: {
      url: typeof l.url === 'string' ? l.url : null,
      performance: pct(l.performance),
      accessibility: pct(l.accessibility),
      bestPractices: pct(l.bestPractices),
      seo: pct(l.seo),
    },
  };
}

export async function getLiveStats(): Promise<LiveStatsResult> {
  const snapshot = parseStats(fallback);
  const url = process.env.N8N_STATS_URL;
  if (!url) return { stats: snapshot, live: false };

  try {
    const token = process.env.N8N_STATS_TOKEN;
    const res = await fetch(url, {
      headers: token ? { 'x-stats-token': token } : undefined,
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`n8n responded ${res.status}`);
    const stats = parseStats(await res.json());
    return { stats, live: true };
  } catch {
    return { stats: snapshot, live: false };
  }
}
