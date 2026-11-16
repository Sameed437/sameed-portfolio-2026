import Image from 'next/image';
import type { CSSProperties } from 'react';

/*
 * Act 3, pinned, and the page's peak. The signature move: the visitor's scroll
 * runs BlogBolt's seven-phase pipeline. The stage holds while each phase
 * lights in order, the rail fills, and the real control panel wipes in once
 * the post is published. Pure CSS off --sc-p: no JS, no fake surface.
 */
const PHASES = [
  { name: 'Research', detail: 'Claude reads the SERP and the sources for the topic.' },
  { name: 'Outline', detail: 'Headings mapped to search intent before a word is written.' },
  { name: 'Draft', detail: 'The full article, written section by section.' },
  { name: 'On-page SEO', detail: 'Meta, structured headers, internal link suggestions.' },
  { name: 'Images', detail: 'Selected for each section, with alt text written for them.' },
  { name: 'Format', detail: 'Cleaned into WordPress-ready blocks.' },
  { name: 'Publish', detail: 'Pushed through the REST API as a draft for review.' },
];

export default function Pipeline() {
  return (
    <section
      id="pipeline"
      aria-labelledby="pipeline-title"
      data-sc-act="pin"
      data-sc-span="4.2"
      data-sc-drift="#070a14"
    >
      <div data-sc-stage className="flex items-center">
        <div className="shell grid w-full items-center gap-10 pt-16 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-label text-accent">
              BlogBolt · keep scrolling to run it
            </p>
            <h2
              id="pipeline-title"
              className="sc-display mt-4 text-title font-semibold text-balance text-fg"
            >
              One topic in. A publish-ready post out.
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-fg-muted max-md:hidden">
              My flagship AI build: a Python pipeline with a Next.js control panel. Claude does the
              work, n8n orchestrates it, and WordPress receives the draft.
            </p>

            <figure
              className="mt-8 overflow-hidden rounded-xl border border-line bg-surface shadow-lift max-md:hidden"
              data-sc-reveal="up"
              data-sc-reveal-at="0.72 0.96"
            >
              <Image
                src="/projects/blogbolt.png"
                alt="BlogBolt control panel, the dashboard that starts a pipeline run"
                width={1912}
                height={839}
                sizes="(max-width: 1280px) 45vw, 600px"
                className="h-auto w-full"
              />
            </figure>
          </div>

          <ol className="relative md:col-span-6" aria-label="BlogBolt pipeline phases">
            <span aria-hidden className="absolute bottom-3 left-[7px] top-3 w-px bg-line">
              <span className="pipe-rail-fill block h-full w-full bg-accent" />
            </span>
            {PHASES.map((ph, i) => (
              <li
                key={ph.name}
                className="pipe-phase relative flex gap-4 py-2 md:gap-5 md:py-3.5"
                style={{ '--t': ((i + 0.6) / (PHASES.length + 1)).toFixed(3) } as CSSProperties}
              >
                <span aria-hidden className="pipe-dot relative mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full" />
                <div>
                  <h3 className="sc-display text-lg font-semibold text-fg md:text-xl">{ph.name}</h3>
                  <p className="pipe-detail mt-0.5 text-xs text-fg-muted sm:text-sm">{ph.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
