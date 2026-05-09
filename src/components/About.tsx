'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PROFILE, STATS } from '@/lib/data';
import SectionHeader from './SectionHeader';
import SectionReveal, { staggerChild, staggerParent } from './SectionReveal';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="About"
          title="A developer obsessed with the details."
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <SectionReveal className="md:col-span-7" delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-bone/75 md:text-lg">
              <p>
                I&apos;m{' '}
                <span className="font-medium text-bone">{PROFILE.name}</span> —
                a frontend &amp; WordPress developer based in Lahore, Pakistan,
                currently building at the intersection of{' '}
                <span className="text-violet-300">design</span>,{' '}
                <span className="text-violet-300">SEO</span>, and{' '}
                <span className="text-violet-300">growth engineering</span>.
              </p>
              <p>
                Over the past 3+ years I&apos;ve shipped marketing sites,
                e-commerce flows, automation workflows, and conversion-focused
                landing pages — for accounting firms, healthcare platforms, and
                independent brands. I care about clean code, measurable
                outcomes, and interfaces that feel premium without being heavy.
              </p>
              <p>
                Today I&apos;m a Growth Engineer at{' '}
                <span className="font-medium text-bone">Marham</span>, where I
                build n8n automations, run UI experiments, and ship SEO-led
                content systems that compound traffic over time.
              </p>
            </div>

            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <motion.div
                  key={s.label}
                  variants={staggerChild}
                  className="glass relative overflow-hidden rounded-2xl p-5 transition-all hover:border-violet-400/40 hover:shadow-glow-sm"
                >
                  <div className="font-display text-3xl font-semibold text-gradient md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-bone/55">
                    {s.label}
                  </div>
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-violet-600/10 blur-2xl" />
                </motion.div>
              ))}
            </motion.div>
          </SectionReveal>

          <SectionReveal className="md:col-span-5" delay={0.2}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[20rem] sm:max-w-sm">
              {/* rotating conic glow ring */}
              <motion.div
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
                className="absolute -inset-3 rounded-[2rem] bg-[conic-gradient(from_180deg,rgba(124,58,237,0.0)_0deg,rgba(124,58,237,0.55)_120deg,rgba(124,58,237,0.0)_240deg)] blur-2xl"
              />
              {/* outer violet glow halo */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.4rem] bg-violet-700/20 blur-3xl"
              />

              <div className="glass-violet relative h-full overflow-hidden rounded-[2rem] p-1">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-4px)] bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
                  {/* grid texture under the photo */}
                  <div className="absolute inset-0 bg-grid-violet [background-size:32px_32px] opacity-25" />

                  {/* photo */}
                  <Image
                    src="/sameed.jpg"
                    alt={`${PROFILE.name} — portrait`}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 380px"
                    priority
                    className="object-cover object-top"
                  />

                  {/* top vignette so name/role chip sits cleanly */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-900/70 via-ink-900/20 to-transparent" />
                  {/* bottom gradient for badge contrast */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent" />
                  {/* subtle violet wash */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.22),transparent_55%)]" />

                  {/* top role chip */}
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-900/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-bone/80 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    Frontend · Growth
                  </div>

                  {/* bottom name plate */}
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="font-display text-xl text-bone sm:text-2xl">
                      {PROFILE.name}
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-violet-300">
                      {PROFILE.location}
                    </div>
                  </div>

                  {/* corner mono tag */}
                  <div className="absolute right-4 top-4 font-mono text-[10px] text-bone/45">
                    /portfolio
                  </div>
                </div>
              </div>

              {/* floating chips — desktop only */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-10 hidden rounded-2xl border border-white/10 bg-ink-800/80 px-3 py-2 text-xs text-bone/80 shadow-glow-sm backdrop-blur md:block"
              >
                <span className="text-violet-300">{'<'}</span>
                <span className="font-mono">React</span>
                <span className="text-violet-300">{' />'}</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 bottom-16 hidden rounded-2xl border border-white/10 bg-ink-800/80 px-3 py-2 text-xs text-bone/80 shadow-glow-sm backdrop-blur md:block"
              >
                <span className="font-mono text-emerald-300">SEO ↑</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 top-24 hidden rounded-2xl border border-violet-400/30 bg-violet-600/10 px-3 py-2 text-xs text-bone/85 shadow-glow-sm backdrop-blur md:block"
              >
                <span className="font-mono text-violet-200">3+ yrs</span>
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
