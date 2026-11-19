'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { ArrowUpRight, Github, Mail, MapPin, Sparkles, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
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

const FIELD =
  'w-full rounded-xl border border-white/10 bg-base/80 px-4 py-3 text-sm text-fg placeholder:text-fg-faint/60 transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-line">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[30rem] w-[50rem] max-w-full rounded-full bg-accent/5 blur-[140px]"
      />

      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="06"
          eyebrow="Start A Project"
          title="Let's build the system that scales your business."
          description="Open to high-impact client projects (AI automation workflows, autonomous agent systems, headless e-commerce builds) and collaborative opportunities. Tell me what you're building — I usually reply within 24 hours."
        />

        <div className="grid gap-6 md:grid-cols-12 items-start">
          {/* Direct Channels Column */}
          <Reveal className="md:col-span-5">
            <div className="flex flex-col gap-4">
              <a
                href={'mailto:' + PROFILE.email}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-surface via-[#090D16] to-surface p-6 sm:p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent-wash text-accent shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-accent">
                    <Mail size={19} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-wash px-2.5 py-0.5 text-[10px] font-mono text-accent border border-accent/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    Direct Email
                  </span>
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-fg-faint mt-4">Fastest Response</p>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="break-all text-sm sm:text-base font-semibold text-fg transition-colors group-hover:text-accent">
                    {PROFILE.email}
                  </p>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-base/80 px-2.5 py-1 text-xs font-mono text-slate-300 transition-colors hover:border-accent hover:text-accent shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </a>

              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-br from-surface to-base px-6 py-4 transition-all duration-200 hover:border-accent/40"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-fg-faint">{c.label}</p>
                    <p className="mt-0.5 text-sm font-medium text-fg transition-colors group-hover:text-accent">
                      {c.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-fg-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </a>
              ))}

              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-base/60 px-6 py-4 text-xs font-mono text-fg-muted">
                <MapPin size={15} className="shrink-0 text-accent" />
                <span>{PROFILE.location} · Remote Worldwide</span>
              </div>
            </div>
          </Reveal>

          {/* Consultation Form Column */}
          <Reveal className="md:col-span-7" delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-surface via-[#090D16] to-surface p-6 sm:p-8 shadow-lift"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-fg-faint mb-2">
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
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-fg-faint mb-2">
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

              {/* One-Click Topic Selector Pills */}
              <div className="mt-5">
                <label className="block font-mono text-xs uppercase tracking-wider text-fg-faint mb-2">
                  Select Project Focus (or type below):
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {PREFILL_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setTopic(topic)}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-mono transition-all ${
                        form.subject === topic
                          ? 'border-accent bg-accent/15 text-accent font-medium shadow-sm'
                          : 'border-white/10 bg-base/60 text-fg-muted hover:border-accent/30 hover:text-fg'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-wider text-fg-faint mb-2">
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

              <div className="mt-5">
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-fg-faint mb-2">
                  Project Details &amp; Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell me about what you're building, existing tools (n8n, CRM, APIs), and your timeline…"
                  className={FIELD + ' resize-none'}
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-xs font-semibold text-base transition-all hover:bg-accent-dim shadow-glow"
                >
                  <Send size={14} />
                  Send Discovery Inquiry
                </button>
                <p className="text-xs text-fg-faint font-mono">
                  Opens directly in your mail client addressed to {PROFILE.email}.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
