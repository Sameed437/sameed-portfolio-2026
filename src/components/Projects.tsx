import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/lib/data';
import SectionHeader from './SectionHeader';
import ProjectCover from './ProjectCover';
import Reveal from './Reveal';

function Card({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, '0');
  const isLink = Boolean(project.href);

  const body = (
    <>
      <div className="overflow-hidden border border-rule bg-paper-alt">
        <ProjectCover
          art={project.art}
          title={project.title}
          className="block aspect-[8/5] w-full transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        />
      </div>

      <div className="mt-5 flex items-center gap-4">
        <span className="label">{num}</span>
        {project.badge && (
          <span className="font-mono text-[11px] uppercase tracking-label text-accent">
            {project.badge}
          </span>
        )}
        <span className="h-px flex-1 bg-rule" />
      </div>

      <h3 className="mt-3 flex items-start gap-2 text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-accent md:text-2xl">
        {project.title}
        {isLink && (
          <ArrowUpRight
            size={17}
            className="mt-1 shrink-0 text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        )}
      </h3>

      <p className="mt-3 text-pretty text-ink-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
        {project.tags.map((tag) => (
          <li key={tag} className="font-mono text-xs text-ink-faint">
            {tag}
          </li>
        ))}
      </ul>
    </>
  );

  return isLink ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {body}
    </a>
  ) : (
    <div className="group">{body}</div>
  );
}

export default function Projects() {
  const total = String(PROJECTS.length).padStart(2, '0');

  return (
    <section id="projects" className="shell py-20 md:py-28">
      <SectionHeader
        index="03"
        eyebrow={`Selected work — 01 / ${total}`}
        title="Things I've shipped."
        description="Client sites, production e-commerce, and internal tooling. Live sites are linked — the rest are described in full."
      />

      <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-12">
        {PROJECTS.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={(i % 2) * 70}>
              <Card project={project} index={i} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
