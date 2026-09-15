import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '@/lib/data';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="shell pb-20 pt-16 md:pb-28 md:pt-24">
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="label">{PROFILE.location}</span>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {PROFILE.availability}
          </span>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="mt-8 max-w-5xl text-display font-medium text-balance text-ink">
          Frontend &amp; WordPress developer building{' '}
          <span className="text-accent">fast, search-visible</span> websites.
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-8 max-w-prose text-lead text-pretty text-ink-muted">
          {PROFILE.tagline}
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            View selected work
            <ArrowDown
              size={15}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="link-u text-sm font-medium"
          >
            {PROFILE.email}
          </a>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-16 hairline pt-6 md:mt-24">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <p className="label">{PROFILE.rotatingTitles.join(' · ')}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-accent"
              >
                LinkedIn
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-accent"
              >
                GitHub
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
