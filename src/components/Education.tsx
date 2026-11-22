import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { EDUCATION } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const EDU_ICONS = [GraduationCap, Award, BookOpen];

export default function Education() {
  return (
    <section id="education" className="border-y border-line bg-surface/30">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="05"
          eyebrow="Credentials &amp; Training"
          title="Education and professional specializations."
          description="Academic foundation in computer sciences paired with continuous professional certifications in digital growth and visual design."
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {EDUCATION.map((e, i) => {
            const Icon = EDU_ICONS[i] ?? GraduationCap;
            return (
              <li key={e.title}>
                <Reveal delay={i * 80}>
                  <article className="group h-full flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-surface via-[#090D16] to-surface p-6 sm:p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-lift">
                    <div>
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/30 bg-accent-wash text-accent shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-accent">
                        <Icon size={20} />
                      </span>

                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                        {e.title}
                      </h3>

                      <p className="mt-2 text-sm text-fg-muted">
                        {e.org}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-line/60">
                      <span className="inline-block rounded-md border border-white/5 bg-base/80 px-2.5 py-1 text-[11px] text-accent">
                        {e.detail}
                      </span>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
