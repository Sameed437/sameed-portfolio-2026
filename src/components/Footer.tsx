'use client';

import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';
import { NAV_LINKS, PROFILE } from '@/lib/data';

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <footer
      ref={ref}
      className="relative isolate mt-20 overflow-hidden border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.18),transparent)]"
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <a
              href="#hero"
              className="font-display text-3xl font-medium tracking-tight text-bone"
            >
              Sameed<span className="text-violet-400">.</span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-bone/60">
              Frontend &amp; WordPress developer · Growth Engineer. Building
              measurable, premium web experiences from Lahore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-4"
          >
            <h4 className="text-xs uppercase tracking-[0.22em] text-bone/55">
              Navigate
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-bone/75">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-violet-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <h4 className="text-xs uppercase tracking-[0.22em] text-bone/55">
              Connect
            </h4>
            <div className="mt-4 flex items-center gap-2">
              {[
                {
                  href: PROFILE.socials.linkedin,
                  Icon: Linkedin,
                  label: 'LinkedIn',
                },
                {
                  href: PROFILE.socials.github,
                  Icon: Github,
                  label: 'GitHub',
                },
                {
                  href: `mailto:${PROFILE.email}`,
                  Icon: Mail,
                  label: 'Email',
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-bone/70 transition-all hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-600/10 hover:text-bone hover:shadow-glow-sm"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-bone/50 md:flex-row md:items-center"
        >
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="font-mono">
            Designed &amp; built with{' '}
            <span className="text-violet-300">Next.js</span> &amp;{' '}
            <span className="text-violet-300">Framer Motion</span>.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
