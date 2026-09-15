import { EDUCATION } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="shell py-20 md:py-28">
      <SectionHeader
        index="05"
        eyebrow="Education"
        title="Training &amp; credentials."
      />

      <ul className="grid gap-px border border-rule bg-rule md:grid-cols-3">
        {EDUCATION.map((e, i) => (
          <li key={e.title} className="bg-paper p-6 md:p-8">
            <Reveal delay={i * 60}>
              <span className="label">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">
                {e.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{e.org}</p>
              <p className="mt-4 text-sm text-ink-faint">{e.detail}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
