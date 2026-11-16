import { SERVICES } from '@/lib/data';

/*
 * Act 2, flow. The four disciplines as a typeset list rather than a card grid:
 * a large title per row on a hairline, the detail beside it. Rows rise in on
 * entry; this is the one act that reads like a document.
 */
export default function Services() {
  return (
    <section id="services" data-sc-act="flow" className="relative">
      <div className="shell pb-16 pt-16 md:pb-24 md:pt-20">
        <div className="max-w-3xl" data-sc-in>
          <h2 className="sc-display text-title font-semibold text-balance text-fg">
            Marketing outcomes, delivered as engineering.
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-fg-muted">
            Four things, and they compound: the automation produces the content, the SEO decides
            what it targets, the experiments decide what converts, and the web work is where it
            all lands.
          </p>
        </div>

        <ol className="mt-14 border-b border-line" data-sc-in data-sc-stagger="70">
          {SERVICES.map((s) => (
            <li
              key={s.title}
              className="group grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <h3 className="sc-display text-2xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent md:col-span-5 md:text-3xl">
                {s.title}
              </h3>
              <div className="md:col-span-7">
                <p className="text-pretty text-fg-muted">{s.blurb}</p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-label text-fg-faint">
                  {s.items.join('  ·  ')}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
