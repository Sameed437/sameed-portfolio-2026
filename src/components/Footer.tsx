import Image from 'next/image';
import { Github } from 'lucide-react';
import { PROFILE } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/20">
      <div className="shell flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between md:py-16">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg border border-accent/30 bg-surface">
              <Image
                src="/logo.webp"
                alt={PROFILE.name}
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </span>
            <p className="text-lg font-semibold tracking-tight text-fg">
              {PROFILE.name}
            </p>
          </div>
          <p className="mt-1 text-sm text-fg-muted">{PROFILE.title}</p>
          <p className="label mt-4">
            {'\u00A9'} {year} — {PROFILE.location} · Available Worldwide
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3" aria-label="Footer">
          {[
            { label: 'LinkedIn', href: PROFILE.socials.linkedin },
            { label: 'GitHub @Sameed437', href: PROFILE.socials.github },
            { label: 'Repository', href: PROFILE.socials.githubRepo },
            { label: 'Email', href: `mailto:${PROFILE.email}` },
            { label: 'Back to top', href: '#top' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm text-fg-muted transition-colors duration-200 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
