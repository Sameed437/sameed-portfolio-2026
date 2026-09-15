import { EXPERIENCE } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="shell py-20 md:py-28">
      <SectionHeader
        index="04"
        eyebrow="Experience"
        title="Where I've worked."
      />

      <ol className="relative">
        {/* timeline spine */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line md:block"
        />

        {EXPERIENCE.map((job, i) => (
          <li key={job.company + job.date} className="relative md:pl-10">
            <span
              aria-hidden
              className={
                'absolute left-0 top-9 hidden h-[15px] w-[15px] rounded-full border-2 md:block ' +
                (i === 0
                  ? 'border-accent bg-accent'
                  : 'border-line bg-surface')
              }
            />

            <Reveal delay={Math.min(i, 4) * 60}>
              <article className="card card-hover mb-4 rounded-xl p-6 md:p-8">
                <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-fg md:text-2xl">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm text-accent">{job.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="label">{job.date}</p>
                    <p className="label mt-1">{job.location}</p>
                  </div>
                </header>

                {job.blurb && (
                  <p className="mt-5 max-w-prose text-pretty text-fg">
                    {job.blurb}
                  </p>
                )}

                <ul className="mt-5 grid gap-2.5 md:grid-cols-2 md:gap-x-8">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-5 text-sm leading-relaxed text-pretty text-fg-muted before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/50"
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
