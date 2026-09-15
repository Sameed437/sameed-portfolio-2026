import { SERVICES } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section id="services" className="shell py-20 md:py-28">
      <SectionHeader
        index="01"
        eyebrow="What I do"
        title="Marketing outcomes, delivered as engineering."
        description="Four things, and they compound: the automation produces the content, the SEO decides what it targets, the experiments decide what converts, and the web work is where it all lands."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 80}>
            <article className="card card-hover group h-full rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-line transition-colors group-hover:bg-accent/30" />
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-pretty text-fg-muted">{s.blurb}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-base px-2.5 py-1 font-mono text-[11px] text-fg-faint transition-colors group-hover:border-accent/25 group-hover:text-fg-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
