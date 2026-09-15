import { SKILL_GROUPS } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="bg-paper-alt">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="02"
          eyebrow="Capabilities"
          title="What I work with."
        />

        <div className="border-t border-rule">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <div className="grid gap-4 border-b border-rule py-7 md:grid-cols-12 md:gap-8 md:py-9">
                <h3 className="label md:col-span-3 md:pt-1">{group.title}</h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-9">
                  {group.items.map((item) => (
                    <li key={item} className="text-base text-ink-muted md:text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
