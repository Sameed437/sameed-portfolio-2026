import { EXPERIENCE } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="bg-paper-alt">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="04"
          eyebrow="Experience"
          title="Where I've worked."
        />

        <ol className="border-t border-rule">
          {EXPERIENCE.map((job, i) => (
            <li key={job.company + job.date} className="border-b border-rule">
              <Reveal delay={Math.min(i, 4) * 50}>
                <article className="grid gap-x-8 gap-y-5 py-8 md:grid-cols-12 md:py-11">
                  <header className="md:col-span-4">
                    <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
                      {job.company}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{job.role}</p>
                    <p className="label mt-3">{job.date}</p>
                    <p className="label mt-1">{job.location}</p>
                  </header>

                  <div className="md:col-span-8">
                    {job.blurb && (
                      <p className="mb-4 max-w-prose text-pretty text-ink">
                        {job.blurb}
                      </p>
                    )}
                    <ul className="space-y-2.5">
                      {job.bullets.map((b) => (
                        <li
                          key={b}
                          className="relative pl-5 text-pretty text-ink-muted before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-ink-faint"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
