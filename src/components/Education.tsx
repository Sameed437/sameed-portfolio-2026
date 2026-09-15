import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section
      id="education"
      className="border-y border-line bg-surface/30"
    >
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="05"
          eyebrow="Education"
          title="Training & credentials."
        />

        <ul className="grid gap-5 md:grid-cols-3">
          {EDUCATION.map((e, i) => (
            <li key={e.title}>
              <Reveal delay={i * 70}>
                <article className="card card-hover group h-full rounded-xl p-6 md:p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-base text-accent transition-colors group-hover:border-accent/30">
                    <GraduationCap size={18} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm text-fg-muted">{e.org}</p>
                  <p className="label mt-4">{e.detail}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
