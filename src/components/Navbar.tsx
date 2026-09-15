'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '@/lib/data';

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 8;
      // Only touch state on an actual transition, not on every scroll event.
      setStuck((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page behind the mobile sheet, and allow Escape to dismiss it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        stuck ? 'border-b border-rule bg-paper/90 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
        <a
          href="#top"
          className="font-mono text-[11px] uppercase tracking-label text-ink transition-colors hover:text-accent"
        >
          {PROFILE.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="border-b border-ink pb-0.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 grid h-10 w-10 place-items-center text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-rule bg-paper md:hidden">
          <nav className="shell flex flex-col py-2" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 text-base text-ink-muted transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              onClick={() => setOpen(false)}
              className="py-4 text-base font-medium text-accent"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
