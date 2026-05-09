'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { type MouseEvent } from 'react';
import { PROJECTS, type Project } from '@/lib/data';
import SectionHeader from './SectionHeader';
import SectionReveal from './SectionReveal';

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
    rotateX.set((py - 0.5) * -8);
    rotateY.set((px - 0.5) * 10);
  };
  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${mx}px ${my}px, rgba(124,58,237,0.22), transparent 60%)`;

  // Bento — only the flagship card spans 2 cols on lg.
  const colSpan = index === 0 ? 'lg:col-span-2' : '';

  const isLive = Boolean(p.href);
  const Wrapper = (isLive ? motion.a : motion.article) as typeof motion.a;
  const wrapperProps = isLive
    ? {
        href: p.href,
        target: '_blank' as const,
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <SectionReveal className={`group h-full ${colSpan}`} delay={index * 0.05}>
      <Wrapper
        {...wrapperProps}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative block h-full overflow-hidden rounded-3xl border border-white/5 bg-ink-800/40 transition-shadow duration-500 hover:shadow-glow"
      >
        {/* spotlight */}
        <motion.div
          aria-hidden
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* gradient header */}
        <div className="relative h-44 overflow-hidden md:h-52">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90 transition-transform duration-700 group-hover:scale-110`}
          />
          <div className="absolute inset-0 bg-grid-violet [background-size:24px_24px] opacity-25 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

          {/* badge */}
          {p.badge && (
            <div
              className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md ${
                isLive
                  ? 'border-emerald-300/40 bg-emerald-400/15 text-emerald-100'
                  : 'border-violet-300/40 bg-violet-500/15 text-violet-100'
              }`}
            >
              {isLive && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                </span>
              )}
              {p.badge}
            </div>
          )}

          <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-bone backdrop-blur-md transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight size={16} />
          </div>
          <div className="absolute bottom-3 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/60">
            {String(index + 1).padStart(2, '0')} · Project
          </div>
        </div>

        {/* body */}
        <div className="relative p-5 md:p-6">
          <h3 className="font-display text-lg font-medium leading-tight text-bone sm:text-xl md:text-2xl">
            {p.title}
          </h3>
          <p className="mt-2.5 text-[13.5px] leading-relaxed text-bone/65 text-pretty sm:text-sm md:text-base">
            {p.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-bone/70 transition-colors group-hover:border-violet-400/40 group-hover:text-bone"
              >
                {t}
              </span>
            ))}
          </div>

          {isLive && (
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300 md:hidden">
              Visit live site <ArrowUpRight size={12} />
            </div>
          )}
        </div>

        {/* hover overlay — desktop */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-full bg-gradient-to-t from-ink-900 via-ink-900/95 to-transparent p-6 transition-transform duration-500 group-hover:translate-y-0 md:block">
          <span className="pointer-events-auto inline-flex h-10 items-center gap-2 rounded-full border border-violet-400/40 bg-violet-600/10 px-4 text-xs font-medium text-bone shadow-glow-sm backdrop-blur transition-colors hover:bg-violet-600/20">
            {isLive ? 'Visit Live Site' : 'View Project'}
            <ArrowUpRight size={14} />
          </span>
        </div>
      </Wrapper>
    </SectionReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects shipped recently."
          description="A snapshot of recent builds across AI automation, headless e-commerce, WordPress, and React — chosen to show range, not volume."
        />

        <div className="grid auto-rows-fr gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
