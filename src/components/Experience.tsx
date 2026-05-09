'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { useRef } from 'react';
import { EXPERIENCE, type Experience as ExpType } from '@/lib/data';
import SectionHeader from './SectionHeader';

function TimelineItem({ exp, index }: { exp: ExpType; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-120px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative pl-12 md:pl-20"
    >
      {/* dot — centered on track line */}
      <div className="absolute left-5 top-3 -translate-x-1/2 md:left-[42px]">
        <div className="relative grid h-4 w-4 place-items-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-violet-500/40" />
          <span className="relative h-3 w-3 rounded-full bg-violet-500 shadow-glow" />
        </div>
      </div>

      <div className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-violet-400/40 hover:shadow-glow-sm md:p-7">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-700/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-violet-300">
              0{index + 1}
            </div>
            <h3 className="mt-1 font-display text-2xl font-medium leading-tight text-bone md:text-3xl">
              {exp.company}
            </h3>
            <p className="mt-1 text-sm font-medium text-bone/85 md:text-base">
              {exp.role}
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 text-xs text-bone/60 md:items-end">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              <Briefcase size={11} />
              {exp.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-bone/55">
              <MapPin size={11} />
              {exp.location}
            </span>
          </div>
        </div>

        {exp.blurb && (
          <p className="mt-4 text-sm leading-relaxed text-bone/70 md:text-base">
            {exp.blurb}
          </p>
        )}

        <ul className="mt-5 space-y-2.5">
          {exp.bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm leading-relaxed text-bone/70 md:text-[15px]"
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-violet-400 shadow-glow-sm" />
              <span className="text-pretty">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start 70%', 'end 30%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative py-20 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Career so far."
          description="From WordPress intern to growth engineer — a focused trajectory through build, ship, and measure."
        />

        <div ref={wrapRef} className="relative">
          {/* track */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-[42px]" />
          {/* progress */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-violet-400 via-violet-500 to-violet-700 shadow-[0_0_12px_rgba(124,58,237,0.6)] md:left-[42px]"
          />

          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <TimelineItem key={e.company + i} exp={e} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
