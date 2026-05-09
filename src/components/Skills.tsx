'use client';

import { motion } from 'framer-motion';
import {
  Boxes,
  Code2,
  LineChart,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { SKILL_GROUPS } from '@/lib/data';
import SectionHeader from './SectionHeader';
import SectionReveal, { staggerChild, staggerParent } from './SectionReveal';

const ICONS: Record<string, LucideIcon> = {
  Frontend: Code2,
  'Backend & Tools': Boxes,
  'Growth & Automation': LineChart,
  Other: Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-36">
      <div className="absolute inset-x-0 top-0 -z-10 h-[60%] bg-gradient-to-b from-violet-900/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="The toolkit, kept sharp."
          description="A pragmatic mix of frontend craft, WordPress depth, and growth tooling — selected for shipping outcomes, not buzzwords."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = ICONS[group.title] ?? Sparkles;
            return (
              <SectionReveal
                key={group.title}
                delay={gi * 0.08}
                className="h-full"
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-glow">
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-violet-500/30 bg-violet-600/10 text-violet-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-lg font-medium tracking-tight text-bone">
                      {group.title}
                    </h3>
                  </div>

                  <motion.ul
                    variants={staggerParent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {group.items.map((skill) => (
                      <motion.li
                        key={skill}
                        variants={staggerChild}
                        whileHover={{ scale: 1.04 }}
                        className="group/chip relative cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-bone/80 transition-all hover:border-violet-400/60 hover:bg-violet-600/15 hover:text-bone hover:shadow-glow-sm"
                      >
                        <span className="relative z-10">{skill}</span>
                        <span className="pointer-events-none absolute inset-0 rounded-full bg-violet-500/0 transition-colors group-hover/chip:bg-violet-500/0" />
                      </motion.li>
                    ))}
                  </motion.ul>

                  <div className="pointer-events-none absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-violet-700/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
