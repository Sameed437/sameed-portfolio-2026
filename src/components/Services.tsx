import Link from 'next/link';
import {
  Bot,
  Sparkles,
  ShoppingCart,
  Code2,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { SERVICES } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const SERVICE_META = [
  {
    icon: Bot,
    badge: '01 // AUTONOMOUS AGENTS',
    accentColor: 'text-accent',
    bgGlow: 'from-accent/15 via-accent/5 to-transparent',
    highlight: 'Reclaims 20+ manual operational hours / week',
    telemetry: '99.9% Uptime · Automated Failover',
    topic: 'AI Automation & n8n Workflows',
  },
  {
    icon: Sparkles,
    badge: '02 // CONTENT PIPELINES',
    accentColor: 'text-cyan-400',
    bgGlow: 'from-cyan-500/15 via-cyan-500/5 to-transparent',
    highlight: 'Automated SERP research to WordPress drafts',
    telemetry: '100K+ Impressions · SERP Mapped',
    topic: 'AI Content Engine (BlogBolt style)',
  },
  {
    icon: ShoppingCart,
    badge: '03 // HEADLESS COMMERCE',
    accentColor: 'text-accent',
    bgGlow: 'from-accent/15 via-accent/5 to-transparent',
    highlight: 'Sub-second catalog search & instant checkout',
    telemetry: '< 1s Load Time · React Frontend',
    topic: 'Headless WooCommerce / React Store',
  },
  {
    icon: Code2,
    badge: '04 // FULL-STACK ARCHITECTURE',
    accentColor: 'text-cyan-400',
    bgGlow: 'from-cyan-500/15 via-cyan-500/5 to-transparent',
    highlight: 'Production APIs, webhooks & Core Web Vitals',
    telemetry: '100/100 Mobile Vitals · Next.js 14',
    topic: 'Multi-Agent Systems & Claude API',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-t border-line bg-surface/20">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-96 w-[45rem] max-w-full rounded-full bg-accent/5 blur-[120px]"
      />

      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="01"
          eyebrow="Core Disciplines"
          title="Automation outcomes, delivered as engineering."
          description="Four specialized disciplines engineered to compound: intelligent AI automations eliminate manual operational friction, autonomous pipelines scale content, technical SEO captures intent, and high-speed web platforms convert visitors into revenue."
        />

        {/* 4-Card Executive Engineering Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, idx) => {
            const meta = SERVICE_META[idx] ?? SERVICE_META[0];
            const Icon = meta.icon;

            return (
              <Reveal key={s.title} delay={idx * 80}>
                <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface via-[#090D16] to-surface p-7 sm:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-glow">
                  {/* Subtle top-right ambient glow on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-opacity duration-300 opacity-30 group-hover:opacity-100"
                  />

                  <div>
                    {/* Header Row: Icon + Index Badge */}
                    <div className="flex items-center justify-between border-b border-line/70 pb-5">
                      <div className="flex items-center gap-3.5">
                        <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent-wash text-accent shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-accent">
                          <Icon size={20} />
                        </span>
                        <div>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                            {meta.badge}
                          </span>
                          <p className="text-[11px] font-mono text-slate-400">Production Grade</p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-slate-300 border border-white/10">
                        <Zap size={11} className="text-accent" />
                        Automated
                      </span>
                    </div>

                    {/* Title & Blurb */}
                    <h3 className="mt-6 text-xl sm:text-2xl font-semibold tracking-tight text-fg transition-colors duration-200 group-hover:text-accent">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-200/95 font-normal text-pretty">
                      {s.blurb}
                    </p>

                    {/* Key Outcome Highlight */}
                    <div className="mt-5 flex items-center justify-between rounded-lg bg-base/70 border border-line px-3.5 py-2.5 text-xs text-fg">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-accent shrink-0" />
                        <span className="font-medium text-fg">{meta.highlight}</span>
                      </div>
                      <span className="hidden sm:inline-block font-mono text-[10px] text-accent font-medium">{meta.telemetry}</span>
                    </div>

                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-accent-dim group-hover:translate-x-1 duration-200"
                    >
                      Enquire for this discipline
                      <ArrowRight size={13} />
                    </a>
                  </div>

                  {/* Tech Stack Micro-Pills */}
                  <div className="mt-6 pt-5 border-t border-line/70">
                    <p className="font-mono text-[10px] uppercase tracking-label text-slate-400 mb-2.5">
                      Engineered with:
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/10 bg-base/80 px-2.5 py-1 font-mono text-xs text-slate-300 transition-colors duration-200 group-hover:border-accent/30 group-hover:text-fg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Studio Discovery Banner */}
        <Reveal delay={200} className="mt-12">
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-r from-surface via-[#0A1322] to-surface p-6 sm:p-7 shadow-lift flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-base shadow-glow">
                <Bot size={22} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  Interactive AI Architecture &amp; ROI Lab
                </p>
                <h4 className="text-base sm:text-lg font-semibold text-fg">
                  Test live production pipeline schemas and calculate your hours saved.
                </h4>
              </div>
            </div>

            <Link
              href="/studio"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-xs font-semibold text-base transition-all hover:bg-accent-dim shadow-glow shrink-0 w-full sm:w-auto"
            >
              Open AI Studio
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
