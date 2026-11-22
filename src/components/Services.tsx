import Link from 'next/link';
import { Bot, Sparkles, ShoppingCart, Code2, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const SERVICE_META = [
  {
    icon: Bot,
    discipline: 'Autonomous Agents',
    highlight: 'Reclaims 20+ manual operational hours every week',
    telemetry: '99.9% uptime · automated failover',
  },
  {
    icon: Sparkles,
    discipline: 'Content Pipelines',
    highlight: 'From SERP research to WordPress drafts, hands-free',
    telemetry: '100K+ impressions · SERP mapped',
  },
  {
    icon: ShoppingCart,
    discipline: 'Headless Commerce',
    highlight: 'Sub-second catalog search and instant checkout',
    telemetry: '< 1s load · React frontend',
  },
  {
    icon: Code2,
    discipline: 'Growth Engineering',
    highlight: 'Production APIs, webhooks and Core Web Vitals',
    telemetry: '100/100 mobile vitals · Next.js 14',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-t border-line">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="01"
          eyebrow="Core Disciplines"
          title="Automation outcomes, delivered as engineering."
          description="Four disciplines built to compound: automation removes operational friction, pipelines scale content, technical SEO captures intent, and fast web platforms turn visitors into revenue."
        />

        {/* Editorial index: one ruled row per discipline */}
        <ol className="border-t border-white/15">
          {SERVICES.map((s, idx) => {
            const meta = SERVICE_META[idx] ?? SERVICE_META[0];
            const Icon = meta.icon;

            return (
              <li key={s.title} className="border-b border-white/10">
                <Reveal delay={idx * 70}>
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${s.title}`}
                    className="group relative grid gap-8 py-10 md:py-14 lg:grid-cols-12 lg:gap-10 transition-colors duration-500 hover:bg-white/[0.015]"
                  >
                    {/* Accent rule that draws in on hover */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full"
                    />

                    {/* Index + discipline */}
                    <div className="flex items-start gap-5 lg:col-span-3 lg:flex-col lg:gap-6">
                      <span className="text-5xl md:text-6xl font-light leading-none tracking-tighter text-white/55 tabular-nums transition-colors duration-500 group-hover:text-accent">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-2.5 pt-1 lg:pt-0 text-fg-faint">
                        <Icon size={15} strokeWidth={1.5} />
                        <span className="text-[11px] uppercase tracking-label">
                          {meta.discipline}
                        </span>
                      </div>
                    </div>

                    {/* Title + description */}
                    <div className="lg:col-span-5">
                      <h3 className="text-2xl md:text-[1.75rem] font-medium leading-tight tracking-tight text-fg text-balance">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-[0.95rem] leading-[1.75] text-fg-muted text-pretty">
                        {s.blurb}
                      </p>
                    </div>

                    {/* Outcome + stack */}
                    <div className="flex flex-col justify-between gap-8 lg:col-span-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-label text-fg-faint">
                          Outcome
                        </p>
                        <p className="mt-2.5 text-base font-medium leading-snug text-fg">
                          {meta.highlight}
                        </p>
                        <p className="mt-1.5 text-xs text-fg-faint">{meta.telemetry}</p>
                      </div>

                      <div className="flex items-end justify-between gap-6">
                        <p className="text-[13px] leading-relaxed text-fg-faint">
                          {s.items.join(' · ')}
                        </p>
                        <span
                          aria-hidden
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-fg transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-base"
                        >
                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.5}
                            className="transition-transform duration-500 group-hover:rotate-45"
                          />
                        </span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* Studio link */}
        <Reveal delay={150} className="mt-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-label text-fg-faint">
                AI Architecture &amp; ROI Lab
              </p>
              <p className="mt-2 text-lg font-medium leading-snug text-fg">
                Explore live pipeline schemas and calculate the hours you could save.
              </p>
            </div>
            <Link
              href="/studio"
              className="group inline-flex items-center justify-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-sm font-semibold text-base transition-colors hover:bg-accent-dim sm:self-auto"
            >
              Open AI Studio
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
