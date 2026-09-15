import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/lib/data';
import SectionHeader from './SectionHeader';
import ProjectCover from './ProjectCover';
import Reveal from './Reveal';

function Card({ project, index }: { project: Project; index: number }) {
  const isLink = Boolean(project.href);
  // The flagship and the two live client sites lead the grid at full width.
  const featured = index === 0;

  const body = (
    <article
      className={
        'card card-hover group h-full overflow-hidden rounded-xl ' +
        (featured ? 'md:grid md:grid-cols-2 md:items-center' : '')
      }
    >
      <div className="relative overflow-hidden border-b border-line md:border-b-0">
        <ProjectCover
          art={project.art}
          title={project.title}
          className="block aspect-[16/10] w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {project.badge && (
          <span className="absolute left-4 top-4 rounded-md bg-base/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-accent backdrop-blur-sm">
            {project.badge}
          </span>
        )}
      </div>

      <div className={'p-6 md:p-7 ' + (featured ? 'md:p-10' : '')}>
        <p className="label">{project.kicker}</p>

        <h3
          className={
            'mt-3 flex items-start gap-2 font-semibold tracking-tight text-fg transition-colors group-hover:text-accent ' +
            (featured ? 'text-2xl md:text-3xl' : 'text-xl')
          }
        >
          {project.title}
          {isLink && (
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-fg-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          )}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-pretty text-fg-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-line bg-base px-2.5 py-1 font-mono text-[11px] text-fg-faint"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );

  return isLink ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {body}
    </a>
  ) : (
    body
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="02"
          eyebrow={'Selected work — ' + PROJECTS.length + ' projects'}
          title="Systems, client sites, and the automation behind them."
          description="Live sites are linked. The flagship is an AI content pipeline that takes a topic and returns a publish-ready, SEO-optimised draft."
        />

        <ul className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <li key={project.title} className={i === 0 ? 'md:col-span-2' : ''}>
              <Reveal delay={i === 0 ? 0 : (i % 2) * 80}>
                <Card project={project} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
