'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '@/lib/data';

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) {
        const p = max > 0 ? y / max : 0;
        barRef.current.style.transform = 'scaleX(' + p + ')';
      }
      const next = y > 8;
      setStuck((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
      className={
        'sticky top-0 z-40 transition-all duration-300 ' +
        (stuck
          ? 'border-b border-line bg-base/85 backdrop-blur-md shadow-card'
          : 'border-b border-transparent')
      }
    >
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded bg-accent font-mono text-xs font-bold text-base transition-transform group-hover:scale-105">
            S
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-fg transition-colors group-hover:text-accent sm:block">
            {PROFILE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* GitHub Repo Button */}
          <a
            href={PROFILE.socials.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-md border border-line bg-surface text-fg-muted transition-all duration-200 hover:border-accent/40 hover:bg-surface-raised hover:text-accent"
            title="View sameed-portfolio-2026 on GitHub"
            aria-label="GitHub Repository"
          >
            <Github size={17} />
          </a>

          <a
            href={'mailto:' + PROFILE.email}
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-medium text-base transition-colors duration-200 hover:bg-accent-dim sm:inline-block shadow-glow"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 grid h-10 w-10 place-items-center text-fg lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* reading progress */}
      <div
        ref={barRef}
        aria-hidden
        className="h-px origin-left bg-accent transition-transform duration-75"
        style={{ transform: 'scaleX(0)' }}
      />

      {open && (
        <div className="border-t border-line bg-base/95 backdrop-blur-md lg:hidden animate-fadeIn">
          <nav className="shell flex flex-col py-2" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line-soft py-4 text-base text-fg-muted transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PROFILE.socials.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 border-b border-line-soft py-4 text-base text-fg-muted transition-colors hover:text-accent"
            >
              <Github size={18} />
              GitHub Repo (sameed-portfolio-2026)
            </a>
            <a
              href={'mailto:' + PROFILE.email}
              onClick={() => setOpen(false)}
              className="py-4 text-base font-medium text-accent"
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
