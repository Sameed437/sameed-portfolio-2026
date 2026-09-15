/*
 * The canonical origin for this deployment.
 *
 * Resolved at build time, in order:
 *   1. NEXT_PUBLIC_SITE_URL   — set this once you have a custom domain.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — set automatically by Vercel, so a
 *      fresh import gets correct canonical/sitemap URLs with no config.
 *   3. localhost — local development.
 *
 * Hardcoding a URL here is how the canonical tag, the sitemap and the
 * robots.txt sitemap directive all end up pointing at a dead host.
 */
function resolve(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return 'http://localhost:3000';
}

export const SITE_URL = resolve();
