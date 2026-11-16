'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '@/lib/data';

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const resolveHref = (href: string) => {
    if (href.startsWith('/')) return href;
    if (pathname === '/') return href;
    return `/${href}`;
  };

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
    <header className="pointer-events-none fixed inset-x-0 top-3 z-40 flex justify-center px-3 md:top-5">
      <div
        className={
          'pointer-events-auto relative w-full max-w-4xl overflow-hidden rounded-full border transition-[background-color,border-color,box-shadow] duration-300 ' +
          (stuck || open
            ? 'border-white/10 bg-base/85 shadow-lift backdrop-blur-xl'
            : 'border-white/[0.06] bg-base/40 backdrop-blur-md')
        }
      >
        <div className="flex h-14 items-center justify-between gap-4 pl-2.5 pr-2">
          <Link href={pathname === '/' ? '#top' : '/'} className="group flex items-center gap-2.5 rounded-full pr-2">
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg border border-accent/35 bg-surface/90 shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:border-accent">
              <Image
                src="/logo.png"
                alt={PROFILE.name}
                width={36}
                height={36}
                priority
                className="h-full w-full object-contain"
              />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-fg sm:block">
              {PROFILE.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => {
              const isCurrent = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={resolveHref(l.href)}
                  className={
                    'rounded-full px-3.5 py-2 text-sm transition-all duration-200 ' +
                    (isCurrent
                      ? 'bg-accent/15 font-semibold text-accent border border-accent/25 shadow-[0_0_12px_rgba(0,210,238,0.15)]'
                      : 'text-fg-muted hover:bg-white/[0.06] hover:text-fg')
                  }
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={PROFILE.socials.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-accent"
              title="View sameed-portfolio-2026 on GitHub"
              aria-label="GitHub Repository"
            >
              <Github size={17} />
            </a>
            <a
              href={'mailto:' + PROFILE.email}
              className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-base transition-colors duration-200 hover:bg-accent-dim sm:inline-block"
            >
              Hire me
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full text-fg hover:bg-white/[0.06] lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* reading progress */}
        <div
          ref={barRef}
          aria-hidden
          className="absolute inset-x-6 bottom-0 h-px origin-left bg-accent/80"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {open && (
        <div className="pointer-events-auto absolute inset-x-3 top-[4.25rem] mx-auto max-w-4xl animate-fadeIn rounded-3xl border border-white/10 bg-base/90 p-2 shadow-lift backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((l) => {
              const isCurrent = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={resolveHref(l.href)}
                  onClick={() => setOpen(false)}
                  className={
                    'rounded-2xl px-4 py-3.5 text-base transition-colors ' +
                    (isCurrent
                      ? 'bg-accent/15 font-semibold text-accent'
                      : 'text-fg-muted hover:bg-white/[0.05] hover:text-accent')
                  }
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href={'mailto:' + PROFILE.email}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl bg-accent px-4 py-3.5 text-center text-base font-semibold text-base"
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
