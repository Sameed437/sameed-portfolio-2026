'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 120);
        lastY = y;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // body scroll lock while mobile menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5 bg-ink-900/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#hero"
          className="group flex items-center gap-2 text-sm font-medium tracking-tight"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-violet-900 text-bone shadow-glow-sm">
            <span className="font-display text-base">S</span>
            <span className="absolute inset-0 rounded-lg bg-violet-500/30 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
          </span>
          <span className="hidden sm:block">
            <span className="text-bone">Sameed</span>
            <span className="text-violet-400">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-md px-3 py-2 text-sm text-bone/70 transition-colors hover:text-bone"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-transparent transition-transform duration-300 hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 overflow-hidden rounded-full border border-violet-500/40 bg-violet-600/10 px-4 py-2 text-sm font-medium text-bone shadow-glow-sm transition-all hover:bg-violet-600/20 hover:shadow-glow"
          >
            Hire Me
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-bone md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col px-5 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/5 py-3 text-bone/80 transition-colors hover:text-bone"
                  >
                    {l.label}
                    <span className="text-violet-400">→</span>
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex w-full items-center justify-center rounded-full border border-violet-500/40 bg-violet-600/10 py-3 text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
