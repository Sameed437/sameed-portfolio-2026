'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { ArrowUpRight, MapPin, Send, Copy, Check } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const CHANNELS = [
  {
    label: 'LinkedIn',
    value: 'sameed-chaudhary',
    href: PROFILE.socials.linkedin,
  },
  {
    label: 'GitHub',
    value: 'Sameed437',
    href: PROFILE.socials.github,
  },
];

const PREFILL_TOPICS = [
  'AI Automation & n8n Workflows',
  'Multi-Agent Systems & Claude API',
  'Headless WooCommerce / React Store',
  'AI Content Engine (BlogBolt style)',
];

const LABEL = 'block text-[11px] uppercase tracking-label text-fg-faint mb-1';

const FIELD =
  'w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-[15px] text-fg placeholder:text-fg-faint/50 transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-0';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company_site: '', // honeypot, hidden from people
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'fallback'>('idle');

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const subj = params.get('subject');
        const msg = params.get('message');
        if (subj || msg) {
          setForm((prev) => ({
            ...prev,
            subject: subj || prev.subject,
            message: msg || prev.message,
          }));
        }
      } catch {
        // ignore
      }
    }

    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<{ subject?: string; message?: string }>;
      if (customEvent.detail) {
        setForm((prev) => ({
          ...prev,
          subject: customEvent.detail.subject ?? prev.subject,
          message: customEvent.detail.message ?? prev.message,
        }));
      }
    };
    window.addEventListener('prefill-contact', handlePrefill);
    return () => window.removeEventListener('prefill-contact', handlePrefill);
  }, []);

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const setTopic = (topic: string) => {
    setForm((f) => ({ ...f, subject: topic }));
  };

  const openMailClient = () => {
    const subject = form.subject.trim() || 'Project enquiry from ' + form.name;
    const body = form.message + '\n\n—\n' + form.name + '\n' + form.email;
    window.location.href =
      'mailto:' +
      PROFILE.email +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
      // GA4 conversion: shows up as the `generate_lead` event once GA is configured.
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.('event', 'generate_lead', {
        method: 'contact_form',
      });
      setForm({ name: '', email: '', subject: '', message: '', company_site: '' });
    } catch {
      // The intake service is unavailable: fall back to the visitor's mail client.
      setStatus('fallback');
      openMailClient();
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-line">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="06"
          eyebrow="Start A Project"
          title="Let's build the system that scales your business."
          description="Open to high-impact client projects (AI automation workflows, autonomous agent systems, headless e-commerce builds) and collaborative opportunities. Tell me what you're building — I usually reply within 24 hours."
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Direct channels: typographic, no cards */}
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-label text-fg-faint">Write to me directly</p>

            <a
              href={'mailto:' + PROFILE.email}
              className="group mt-4 inline-block max-w-full break-all text-2xl sm:text-3xl font-medium leading-tight tracking-tight text-fg"
            >
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size,color] duration-500 group-hover:bg-[length:100%_1px] group-hover:text-accent">
                {PROFILE.email}
              </span>
            </a>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} strokeWidth={1.5} />
                    <span>Copy address</span>
                  </>
                )}
              </button>
              <span className="inline-flex items-center gap-2 text-fg-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Replies within 24 hours
              </span>
            </div>

            <ul className="mt-12 border-t border-white/10">
              {CHANNELS.map((c) => (
                <li key={c.label} className="border-b border-white/10">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="flex flex-col gap-1">
                      <span className="text-[11px] uppercase tracking-label text-fg-faint">{c.label}</span>
                      <span className="text-base font-medium text-fg transition-colors duration-300 group-hover:text-accent">
                        {c.value}
                      </span>
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-fg transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-base">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-500 group-hover:rotate-45"
                      />
                    </span>
                  </a>
                </li>
              ))}
              <li className="border-b border-white/10">
                <div className="flex items-center gap-3 py-5 text-sm text-fg-muted">
                  <MapPin size={15} strokeWidth={1.5} className="shrink-0 text-fg-faint" />
                  <span>{PROFILE.location} · Remote worldwide</span>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Enquiry form */}
          <Reveal className="lg:col-span-7" delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-10"
            >
              <h3 className="text-xl font-medium tracking-tight text-fg">Tell me about your project</h3>
              <p className="mt-1.5 text-sm text-fg-faint">A few lines is enough. I&apos;ll take it from there.</p>

              <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={LABEL}>
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Jane Doe"
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={LABEL}>
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="jane@company.com"
                    className={FIELD}
                  />
                </div>
              </div>

              <div className="mt-8">
                <span className={LABEL + ' mb-3'}>Project focus</span>
                <div className="flex flex-wrap gap-2">
                  {PREFILL_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setTopic(topic)}
                      aria-pressed={form.subject === topic}
                      className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-all duration-300 ${
                        form.subject === topic
                          ? 'border-accent bg-accent text-base font-medium'
                          : 'border-white/15 text-fg-muted hover:border-white/40 hover:text-fg'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="subject" className={LABEL}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={set('subject')}
                  placeholder="AI automation workflow, intelligent agents, or headless e-commerce"
                  className={FIELD}
                />
              </div>

              <div className="mt-8">
                <label htmlFor="message" className={LABEL}>
                  Project details &amp; goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="What you're building, the tools involved (n8n, CRM, APIs), and your timeline."
                  className={FIELD + ' resize-none'}
                />
              </div>

              {/* Honeypot: off-screen and skipped by keyboards and screen readers. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="company_site">Leave this field empty</label>
                <input
                  id="company_site"
                  name="company_site"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company_site}
                  onChange={set('company_site')}
                />
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-base transition-colors hover:bg-accent-dim disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                  <Send
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
                <p className="max-w-[16rem] text-xs leading-relaxed text-fg-faint" role="status" aria-live="polite">
                  {status === 'sent'
                    ? 'Message received. A confirmation is on its way to your inbox.'
                    : status === 'fallback'
                      ? `Opening your mail client addressed to ${PROFILE.email}.`
                      : 'Goes straight to my inbox. No newsletters, no spam.'}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
