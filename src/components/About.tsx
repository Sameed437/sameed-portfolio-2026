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
          title="I build the full system, from headless storefronts to AI pipelines."
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
                  alt={PROFILE.name + ', AI Marketing & Web Engineer'}
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
                I&apos;m an AI Marketing &amp; Web Engineer based in {PROFILE.location}. I
                build the automation that produces marketing content, engineer high-speed
                headless e-commerce stores, and run the experimentation loops that make them convert.
              </p>
              <p>
                In headless e-commerce, I recently prepared{' '}
                <a
                  href="https://almaripk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg font-semibold hover:text-accent transition-colors underline underline-offset-4 decoration-accent/40"
                >
                  Almari PK (almaripk.com)
                </a>{' '}
                for a client — a modern full-stack headless store pairing a Next.js 14 / React frontend with a headless WooCommerce &amp; WordPress API backend for instant catalog filtering and streamlined checkouts.
              </p>
              <p>
                My flagship AI project is <span className="text-fg font-medium">BlogBolt</span>: a
                Python pipeline with a Next.js control panel that runs a seven-phase SEO content workflow with Claude — research, outline, draft, on-page SEO, image selection with auto alt-text, format, publish — landing drafts directly in WordPress.
              </p>
              <p>
                At <span className="text-fg font-medium">Marham</span> I engineer AI solutions with Claude and APIs, automate publishing via n8n workflows, run UI experiments and A/B tests on key product flows, and scale organic reach with structured SEO systems.
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
