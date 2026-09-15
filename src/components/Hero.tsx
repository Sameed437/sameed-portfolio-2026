import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROFILE, STATS, SKILL_GROUPS } from '@/lib/data';
import Reveal from './Reveal';
import Counter from './Counter';

const TOOLS = SKILL_GROUPS.flatMap((g) => g.items);

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* ambient light + technical grid — both static CSS, no canvas */}
      <div aria-hidden className="hero-glow absolute inset-0 -z-10" />
      <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-70" />

      <div className="shell pb-16 pt-16 md:pb-24 md:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-wash px-3 py-1.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-accent" />
              {PROFILE.availability}
            </span>
            <span className="label">{PROFILE.location}</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-label text-accent">
            {PROFILE.title}
          </p>
          <h1 className="mt-4 max-w-4xl text-display font-semibold text-balance text-fg">
            I engineer <span className="text-accent">AI content systems</span> that
            scale marketing.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-prose text-lead text-pretty text-fg-muted">
            {PROFILE.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-base transition-all hover:bg-accent-dim hover:shadow-glow"
            >
              See the work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-6 py-3.5 text-sm font-medium text-fg transition-all hover:border-accent/40 hover:bg-surface-raised"
            >
              What I do
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-1 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              LinkedIn
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:mt-20 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-surface p-6 md:p-7">
                <dd className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                  <Counter value={s.value} />
                </dd>
                <dt className="label mt-2">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* tool marquee */}
      <div className="border-y border-line bg-surface/40 py-4">
        <div className="fade-x flex overflow-hidden">
          <ul
            className="flex shrink-0 animate-marquee items-center gap-10 pr-10"
            aria-hidden
          >
            {[...TOOLS, ...TOOLS].map((t, i) => (
              <li
                key={t + i}
                className="whitespace-nowrap font-mono text-xs uppercase tracking-label text-fg-faint"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <span className="sr-only">Tools: {TOOLS.join(', ')}</span>
      </div>
    </section>
  );
}
