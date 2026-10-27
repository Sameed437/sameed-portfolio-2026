'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Eye, Globe, Maximize2, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { PROJECTS, type Project, type ProjectCategory } from '@/lib/data';
import SectionHeader from './SectionHeader';
import ProjectCover from './ProjectCover';
import Reveal from './Reveal';

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ecommerce', label: 'Headless E-Commerce' },
  { id: 'automation', label: 'AI & Automation' },
  { id: 'client', label: 'Client Sites' },
  { id: 'fullstack', label: 'Full-Stack' },
];

/* ------------------------------------------------------------------ */
/* Interactive High-Resolution Snapshot Lightbox Modal                */
/* ------------------------------------------------------------------ */
function SnapshotModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-base/90 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Shell */}
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-lift z-10">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-line bg-surface-raised px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded bg-accent/15 text-accent font-mono text-xs font-bold">
              <Eye size={14} />
            </span>
            <div>
              <h3 id="modal-title" className="text-base font-semibold text-fg">
                {project.title}
              </h3>
              <p className="font-mono text-[11px] text-fg-faint">
                {project.domain || project.kicker}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent-wash px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-base"
              >
                Visit Site
                <ArrowUpRight size={13} />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded-lg border border-line text-fg-muted transition-colors hover:bg-base hover:text-fg"
              aria-label="Close snapshot modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Main Snapshot Frame */}
          <div className="overflow-hidden rounded-xl border border-line bg-base shadow-card">
            {/* Browser chrome replica */}
            <div className="flex h-8 items-center justify-between border-b border-line bg-[#10141D] px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-fg-muted">
                <Globe size={11} className="text-accent" />
                <span>https://{project.domain || 'project.live'}</span>
              </div>
              <span className="w-10" />
            </div>

            {/* High-Resolution Snapshot */}
            <div className="relative w-full aspect-[16/10] bg-[#080A10]">
              <Image
                src={project.snapshot}
                alt={`${project.title} High-Resolution Snapshot`}
                fill
                unoptimized
                sizes="(max-width: 1200px) 95vw, 1200px"
                className="object-contain object-top"
              />
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-label text-accent">
                System Overview
              </h4>
              <p className="text-sm leading-relaxed text-fg-muted">
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="pt-2">
                  <h5 className="font-mono text-[11px] uppercase tracking-label text-fg-faint mb-2">
                    Key Highlights &amp; Architectural Features
                  </h5>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-fg-muted">
                        <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="md:col-span-5 space-y-4">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-label text-accent mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-base px-2 py-0.5 font-mono text-[11px] text-fg-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.href && (
                <div className="pt-2">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-base transition-colors hover:bg-accent-dim shadow-glow"
                  >
                    Open Live Deployment
                    <ExternalLink size={15} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Project Card Component                                             */
/* ------------------------------------------------------------------ */
function Card({
  project,
  index,
  onZoom,
}: {
  project: Project;
  index: number;
  onZoom: (p: Project) => void;
}) {
  const isLink = Boolean(project.href);
  const featured = index === 0;

  return (
    <article
      className={
        'card card-hover group h-full overflow-hidden rounded-xl flex flex-col justify-between ' +
        (featured ? 'md:grid md:grid-cols-12 md:items-center' : '')
      }
    >
      {/* Visual Snapshot Browser Mockup */}
      <div
        className={
          'relative overflow-hidden border-b border-line ' +
          (featured ? 'md:col-span-7 md:border-b-0 md:border-r h-full' : 'w-full')
        }
      >
        <ProjectCover
          art={project.art}
          title={project.title}
          snapshot={project.snapshot}
          domain={project.domain}
          onZoom={() => onZoom(project)}
          className="aspect-[16/10] w-full"
        />

        {project.badge && (
          <span className="absolute left-3.5 top-10 rounded-md border border-accent/30 bg-base/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-accent backdrop-blur-md shadow-card">
            {project.badge}
          </span>
        )}
      </div>

      {/* Info Section */}
      <div
        className={
          'flex flex-col justify-between p-6 sm:p-7 ' +
          (featured ? 'md:col-span-5 md:p-9' : 'flex-1')
        }
      >
        <div>
          <div className="flex items-center justify-between gap-2">
            <p className="label">{project.kicker}</p>
          </div>

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

          {featured && project.highlights && (
            <ul className="mt-4 space-y-1.5 border-t border-line/60 pt-3">
              {project.highlights.slice(0, 3).map((h, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-fg-muted">
                  <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded border border-line bg-base px-2 py-0.5 font-mono text-[11px] text-fg-faint"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Action CTAs */}
        <div className="mt-6 flex items-center gap-3 pt-3 border-t border-line/40">
          <button
            type="button"
            onClick={() => onZoom(project)}
            className="inline-flex items-center gap-1.5 rounded-md border border-line bg-base px-3 py-1.5 text-xs font-medium text-fg-muted transition-all hover:border-accent/40 hover:text-accent"
          >
            <Maximize2 size={12} />
            Inspect Snapshot
          </button>

          {isLink && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-accent-dim"
            >
              Live Site
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Main Projects Section with Category Filtering                      */
/* ------------------------------------------------------------------ */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="work" className="relative">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="02"
          eyebrow={'Selected work — ' + PROJECTS.length + ' projects'}
          title="Headless stores, AI automations, and client deployments."
          description="Every project includes full interface snapshots. Featured flagship is Almari PK (almaripk.com) — a full headless WooCommerce store built with React & Next.js, alongside BlogBolt and live client portals."
        />

        {/* Smooth Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat.id).length;
            const active = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={
                  'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-all duration-300 ' +
                  (active
                    ? 'bg-accent text-base font-semibold shadow-glow'
                    : 'border border-line bg-surface text-fg-muted hover:border-accent/30 hover:bg-surface-raised hover:text-fg')
                }
              >
                <span>{cat.label}</span>
                <span
                  className={
                    'rounded-full px-1.5 py-0.2 font-mono text-[10px] ' +
                    (active ? 'bg-base/20 text-base' : 'bg-base text-fg-faint')
                  }
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <ul className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <li
              key={project.title}
              className={
                activeCategory === 'all' && i === 0
                  ? 'md:col-span-2'
                  : ''
              }
            >
              <Reveal delay={i === 0 ? 0 : (i % 2) * 80}>
                <Card project={project} index={i} onZoom={setModalProject} />
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Modal Lightbox */}
        {modalProject && (
          <SnapshotModal
            project={modalProject}
            onClose={() => setModalProject(null)}
          />
        )}
      </div>
    </section>
  );
}
