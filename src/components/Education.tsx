'use client';

import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION } from '@/lib/data';
import SectionHeader from './SectionHeader';
import SectionReveal from './SectionReveal';

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Education & Certifications"
          title="Foundations."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {EDUCATION.map((e, i) => {
            const Icon = i === 0 ? GraduationCap : Award;
            return (
              <SectionReveal key={e.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-glow">
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.15),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-violet-500/30 bg-violet-600/10 text-violet-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-bone">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-bone/85">
                    {e.org}
                  </p>
                  <p className="mt-2 text-sm text-bone/60">{e.detail}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
