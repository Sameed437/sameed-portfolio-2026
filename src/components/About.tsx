import Image from 'next/image';
import { PROFILE, SKILL_GROUPS } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative border-t border-line bg-surface/30">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="03"
          eyebrow="About"
          title="I build intelligent AI automation systems and scalable web platforms."
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-2xl bg-accent/10 blur-2xl"
              />
              <figure className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-line bg-surface shadow-card">
                <Image
                  src="/sameed.jpg"
                  alt={PROFILE.name + ', ' + PROFILE.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  priority
                  className="object-cover object-top"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-base to-transparent"
                />
                <figcaption className="absolute inset-x-5 bottom-4">
                  <p className="text-sm font-semibold text-fg">{PROFILE.name}</p>
                  <p className="label mt-0.5">{PROFILE.title}</p>
                </figcaption>
              </figure>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={120}>
            <div className="space-y-5 text-lead text-pretty text-fg-muted">
              <p>
                I&apos;m an AI Automation Specialist based in {PROFILE.location}. I
                design and deploy autonomous AI workflows, multi-agent systems, and API
                integrations that eliminate manual bottlenecks — backed by high-speed
                headless e-commerce and full-stack web engineering.
              </p>
              <p>
                Currently, I work full-time as an AI Automation Specialist at{' '}
                <span className="text-fg font-medium">360 Signum</span> (Remote),
                architecting production-grade AI automations, webhook integrations, and intelligent agents.
              </p>
              <p>
                Previously at <span className="text-fg font-medium">Marham</span> (Dec 2025 – Nov 2026),
                Pakistan&apos;s largest healthcare platform, I engineered an in-house AI content platform in Python, Next.js, and Oracle Cloud, built an n8n + Claude API content pipeline saving 20+ hours per week, shipped a WhatsApp chatbot, and grew organic traffic 70% in 3 months.
              </p>
              <p>
                My flagship AI build <span className="text-fg font-medium">BlogBolt</span> automates a
                seven-phase SEO content workflow from SERP research to WordPress drafts. In headless e-commerce, I engineered{' '}
                <a
                  href="https://almaripk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg font-semibold hover:text-accent transition-colors underline underline-offset-4 decoration-accent/40"
                >
                  Almari PK (almaripk.com)
                </a>{' '}
                for a client — pairing Next.js 14 / React with a headless WooCommerce &amp; WordPress API backend for instant catalog filtering and streamlined checkouts.
              </p>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title} className="bg-surface p-5 md:p-6 transition-colors hover:bg-surface-raised">
                  <h3 className="font-mono text-[11px] uppercase tracking-label text-accent">
                    {group.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-fg-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
