import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { PROFILE, STATS } from '@/lib/data';

/*
 * Act 1, pinned. A layered composition: technical grid (far), the outlined
 * name (mid), the portrait cutout (near, anchored to the bottom edge), and a
 * floor fade in front. Each plane moves at its own rate as the stage holds.
 * The headline greets on landing; the stats arrive as the second beat.
 */

function parseStat(v: string) {
  const m = v.match(/^(\d+)(.*)$/);
  return m ? { n: m[1], suffix: m[2] } : null;
}

export default function Hero() {
  return (
    <section id="top" data-sc-act="pin" data-sc-span="2.2" data-sc-drift="#06080f">
      <div data-sc-stage className="hero-stage">
        <div aria-hidden className="hero-plane" data-sc-parallax="-0.5">
          <div className="hero-glow absolute inset-0" />
          <div className="grid-lines absolute inset-0 opacity-70" />
        </div>

        <div aria-hidden data-sc-parallax="-1.1" className="absolute inset-0">
          <p className="hero-word">SAMEED</p>
        </div>

        <div aria-hidden data-sc-parallax="-1.8" className="hero-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait-cutout.webp"
            alt={PROFILE.name}
            width={1000}
            height={1000}
            fetchPriority="high"
            className="hero-portrait__img"
          />
        </div>

        <div aria-hidden className="hero-floor" />

        {/* Beat one: who, what, and the way in. Present the moment the page lands. */}
        <div className="hero-copy" data-sc-cue="0 0.56 0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-wash px-3 py-1.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-accent" />
              {PROFILE.availability}
            </span>
            <span className="label">{PROFILE.location}</span>
          </div>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-label text-accent">
            {PROFILE.name} · {PROFILE.title}
          </p>
          <h1 className="sc-display hero-h1 mt-4" data-sc-kinetic="lines">
            I engineer AI automation systems and high-speed web platforms.
          </h1>
          <p className="hero-tagline mt-6 max-w-prose text-lead text-pretty text-fg-muted">
            Autonomous workflows that eliminate manual work, intelligent agent pipelines, and storefronts that load
            before you blink.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-base transition-colors duration-200 hover:bg-accent-dim"
            >
              See the work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={'mailto:' + PROFILE.email}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/80 px-6 py-3.5 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent/40"
            >
              Hire me
            </a>
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-md border border-line bg-surface/80 text-fg-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Github size={17} />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-2 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Beat two: the record, counted in as the stage holds. */}
        <div className="hero-copy" data-sc-cue="0.5 1 0.25 0.2">
          <p className="label">The record so far</p>
          <dl className="mt-6 grid grid-cols-2 gap-x-10 gap-y-8">
            {STATS.map((s) => {
              const p = parseStat(s.value);
              return (
                <div key={s.label} className="border-t border-line pt-4">
                  <dd className="sc-display text-5xl font-semibold tracking-tight text-fg md:text-6xl">
                    {p ? (
                      <>
                        <span data-sc-count={'0 ' + p.n} data-sc-count-at="0.52 0.78">
                          {p.n}
                        </span>
                        <span className="text-accent">{p.suffix}</span>
                      </>
                    ) : (
                      s.value
                    )}
                  </dd>
                  <dt className="label mt-2">{s.label}</dt>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
