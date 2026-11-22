import Image from 'next/image';
import {
  Bot,
  Layers,
  Cpu,
  Globe,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { PROFILE, SKILL_GROUPS } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import LiveStats from './LiveStats';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'AI & Automation': Bot,
  'Frontend & Headless': Layers,
  'Backend & Data': Cpu,
  'Growth & Performance': TrendingUp,
};

const IMPACT_METRICS = [
  { value: '3+', label: 'Years Experience', icon: Clock },
  { value: '50+', label: 'Automations Built', icon: Bot },
  { value: '20+', label: 'Hrs Saved Weekly', icon: Sparkles },
  { value: '70%', label: 'Organic Traffic Growth', icon: TrendingUp },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-line bg-surface/30">

      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="03"
          eyebrow="Profile &amp; Background"
          title="I build intelligent AI automation systems and scalable web platforms."
        />

        {/* Quick Impact Stats Strip */}
        <Reveal className="mb-14">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {IMPACT_METRICS.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-surface to-base p-4 sm:p-5 shadow-sm transition-all duration-200 hover:border-accent/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="sc-display text-2xl sm:text-3xl font-bold tracking-tight text-accent">
                      {m.value}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-wash text-accent border border-accent/20">
                      <Icon size={15} />
                    </span>
                  </div>
                  <p className="text-xs text-fg-muted mt-2 uppercase tracking-label">
                    {m.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <LiveStats />

        <div className="grid gap-12 md:grid-cols-12 md:gap-14 items-start">
          {/* Portrait Column with High-Tech Frame */}
          <Reveal className="md:col-span-5">
            <div className="relative">
              {/* Outer ambient blur */}
              <div
                aria-hidden
                className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-accent/20 to-cyan-500/10 blur-xl opacity-70"
              />

              <figure className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-accent/30 bg-surface shadow-lift">
                <Image
                  src="/sameed.jpg"
                  alt={PROFILE.name + ', ' + PROFILE.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  priority
                  className="object-cover object-top"
                />

                {/* Dark gradient fade for text legibility */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-base via-base/80 to-transparent"
                />

                {/* Floating Active Role Badge */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-base/85 px-3 py-1 text-[11px] font-medium text-accent border border-accent/30 backdrop-blur-md shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    360 Signum · Full-Time
                  </span>
                </div>

                <figcaption className="absolute inset-x-5 bottom-4">
                  <p className="text-base font-semibold text-fg">{PROFILE.name}</p>
                  <p className="text-xs text-accent mt-0.5">{PROFILE.title}</p>
                  <p className="text-xs text-fg-faint mt-1">Based in {PROFILE.location} · Available Worldwide</p>
                </figcaption>
              </figure>
            </div>
          </Reveal>

          {/* Bio & Skills Matrix Column */}
          <Reveal className="md:col-span-7" delay={120}>
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-pretty text-slate-300">
              <p>
                I&apos;m an <span className="text-fg font-semibold">Automation Engineer</span> based in {PROFILE.location}. I
                architect and deploy autonomous AI workflows, multi-agent pipelines, and webhook systems
                that eliminate repetitive manual bottlenecks — paired with high-performance
                headless e-commerce and full-stack web engineering.
              </p>
              <p>
                Currently, I work full-time as an Automation Engineer at{' '}
                <span className="text-fg font-semibold text-accent">360 Signum</span> (Remote),
                building enterprise-scale automation pipelines, multi-agent architectures, and webhook integrations.
              </p>
              <p>
                Previously at <span className="text-fg font-medium">Marham</span> (Dec 2025 – Nov 2026),
                Pakistan&apos;s leading healthcare platform, I engineered their in-house AI content platform in Python, Next.js, and Oracle Cloud, built an n8n + Claude API content pipeline saving 20+ hours per week, shipped a WhatsApp chatbot, and grew organic traffic 70% in 3 months.
              </p>
              <p>
                My flagship AI build <span className="text-fg font-medium">BlogBolt</span> automates a
                seven-phase SEO content workflow from SERP research to WordPress drafts. In headless e-commerce, I engineered{' '}
                <a
                  href="https://wonderlyf.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg font-semibold hover:text-accent transition-colors underline underline-offset-4 decoration-accent/40 inline-flex items-center gap-1"
                >
                  Wonderlyf (wonderlyf.co.uk)
                  <ArrowUpRight size={13} />
                </a>{' '}
                for a client — pairing React and headless WordPress &amp; WooCommerce for instant catalog filtering, dynamic cart state, and streamlined checkouts.
              </p>
            </div>

            {/* Categorized Skills Matrix */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {SKILL_GROUPS.map((group) => {
                const Icon = CATEGORY_ICONS[group.title] ?? Bot;
                return (
                  <div
                    key={group.title}
                    className="rounded-xl border border-white/10 bg-gradient-to-br from-surface to-base/80 p-5 transition-all duration-200 hover:border-accent/35 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 border-b border-line/60 pb-3 mb-3">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-wash text-accent border border-accent/20">
                        <Icon size={14} />
                      </span>
                      <h3 className="text-xs uppercase tracking-wider text-accent font-semibold">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/5 bg-base/60 px-2 py-1 text-[11px] text-fg-muted transition-colors hover:border-accent/30 hover:text-fg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
