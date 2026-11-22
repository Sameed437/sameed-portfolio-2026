import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCE } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" data-sc-act="flow" className="shell py-20 md:py-28">
      <SectionHeader
        index="04"
        eyebrow="Career Timeline"
        title="Where I've delivered high-impact engineering."
        description="3+ years of professional engineering experience across autonomous AI pipelines, healthcare platforms, and full-stack headless architectures."
      />

      <ol className="relative">
        {/* Timeline glowing spine */}
        <span
          aria-hidden
          className="absolute left-[7px] top-4 hidden h-[calc(100%-2rem)] w-px bg-line/80 md:block"
        >
          <span className="exp-spine-fill block h-full w-full bg-gradient-to-b from-accent via-cyan-400 to-transparent" />
        </span>

        {EXPERIENCE.map((job, i) => (
          <li key={job.company + job.date} className="relative md:pl-10">
            {/* Timeline node */}
            <span
              aria-hidden
              className={
                'absolute left-0 top-9 hidden h-4 w-4 rounded-full border-2 transition-transform duration-300 md:block ' +
                (i === 0
                  ? 'border-accent bg-base shadow-[0_0_12px_rgba(0,210,238,0.7)] ring-4 ring-accent/20'
                  : 'border-line bg-surface')
              }
            />

            <Reveal delay={Math.min(i, 4) * 60}>
              <article className="group mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-surface via-[#090D16] to-surface p-6 sm:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lift">
                <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 border-b border-line/60 pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                        {job.company}
                      </h3>

                      {i === 0 && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-wash px-2.5 py-0.5 text-[11px] font-mono font-medium text-accent border border-accent/30 shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                          Current Full-Time Role
                        </span>
                      )}

                      {job.company === 'Marham' && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-mono text-fg-muted border border-white/10">
                          <Sparkles size={11} className="text-accent" />
                          Key Impact: 20+ hrs/wk saved
                        </span>
                      )}
                    </div>

                    <p className="mt-1.5 text-sm sm:text-base font-medium text-accent">
                      {job.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:text-right text-xs font-mono text-fg-faint">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} className="text-accent" />
                      {job.date}
                    </span>
                    <span className="text-line">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} className="text-accent" />
                      {job.location}
                    </span>
                  </div>
                </header>

                {job.blurb && (
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-pretty text-slate-300">
                    {job.blurb}
                  </p>
                )}

                <ul className="mt-5 grid gap-2.5 md:grid-cols-2 md:gap-x-8">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-5 text-xs sm:text-sm leading-relaxed text-pretty text-slate-300 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
