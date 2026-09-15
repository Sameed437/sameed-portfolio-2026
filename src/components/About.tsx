import Image from 'next/image';
import { PROFILE, STATS } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="shell py-20 md:py-28">
      <SectionHeader
        index="01"
        eyebrow="About"
        title="I build the site, then make it rank and convert."
      />

      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <div className="space-y-6 text-lead text-pretty text-ink-muted">
            <p>
              I&apos;m <span className="text-ink">{PROFILE.name}</span> — a
              frontend and WordPress developer based in {PROFILE.location},
              working at the intersection of design, SEO, and growth
              engineering.
            </p>
            <p>
              Over the past 3+ years I&apos;ve shipped marketing sites,
              e-commerce flows, automation workflows, and conversion-focused
              landing pages — for accounting firms, healthcare platforms, and
              independent brands. I care about clean code, measurable outcomes,
              and interfaces that feel considered rather than decorated.
            </p>
            <p>
              Today I&apos;m a Growth Engineer at{' '}
              <span className="text-ink">Marham</span>, where I build n8n
              automations, run UI experiments, and ship SEO-led content systems
              that compound traffic over time.
            </p>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={120}>
          <figure className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-rule bg-paper-alt md:ml-auto">
            <Image
              src="/sameed.jpg"
              alt={`${PROFILE.name}, frontend and WordPress developer`}
              fill
              sizes="(max-width: 768px) 90vw, 380px"
              priority
              className="object-cover object-top"
            />
          </figure>
          <figcaption className="mt-3 max-w-sm md:ml-auto">
            <p className="label">
              {PROFILE.name} — {PROFILE.location}
            </p>
          </figcaption>
        </Reveal>
      </div>

      <Reveal className="mt-16 md:mt-24" delay={80}>
        <dl className="grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-paper p-6 md:p-8">
              <dt className="label">{s.label}</dt>
              <dd className="mt-2 text-3xl font-medium tracking-tight text-ink md:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
