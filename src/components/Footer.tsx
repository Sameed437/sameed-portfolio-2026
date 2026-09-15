import { PROFILE } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="shell border-t border-rule py-10 md:py-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {year} {PROFILE.name}
        </p>
        <nav className="flex flex-wrap items-center gap-x-8 gap-y-2" aria-label="Footer">
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-sm text-ink-muted transition-colors hover:text-accent"
          >
            Email
          </a>
          <a href="#top" className="text-sm text-ink-muted transition-colors hover:text-accent">
            Back to top
          </a>
        </nav>
      </div>
    </footer>
  );
}
