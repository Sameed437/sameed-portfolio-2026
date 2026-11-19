'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Eye, Globe, Maximize2, X, CheckCircle2 } from 'lucide-react';
import { PROJECTS, type Project } from '@/lib/data';
import ProjectCover from './ProjectCover';

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
            <div className="flex h-8 items-center justify-between border-b border-line bg-[#0C1019] px-4">
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
            <div className="relative w-full aspect-[16/10] bg-[#06080F]">
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
              <p className="text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="pt-2">
                  <h5 className="font-mono text-[11px] uppercase tracking-label text-fg-faint mb-2">
                    Key Highlights &amp; Architectural Features
                  </h5>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
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
/* Rail card                                                          */
/* ------------------------------------------------------------------ */
function Card({ project, onZoom }: { project: Project; onZoom: (p: Project) => void }) {
  const isLink = Boolean(project.href);
  return (
    <article className="work-card card group flex flex-col overflow-hidden rounded-xl">
      <div className="relative border-b border-line" data-sc-tilt="5">
        <ProjectCover
          art={project.art}
          title={project.title}
          snapshot={project.snapshot}
          domain={project.domain}
          onZoom={() => onZoom(project)}
          className="aspect-[16/10] w-full"
        />
        {project.badge && (
          <span className="absolute left-3 top-10 rounded-md border border-accent/30 bg-base/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-label text-accent">
            {project.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="label">{project.kicker}</p>
        <h3 className="sc-display mt-2.5 text-xl font-semibold tracking-tight text-fg">{project.title}</h3>
        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
        <div className="mt-auto flex items-center gap-3 pt-5">
          <button
            type="button"
            onClick={() => onZoom(project)}
            className="inline-flex items-center gap-1.5 rounded-md border border-line bg-base px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Maximize2 size={12} />
            Details
          </button>
          {isLink && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-dim"
            >
              Live site
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Act 4, pan: vertical scroll travels the work sideways.             */
/* ------------------------------------------------------------------ */
export default function Projects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      data-sc-act="pan"
      data-sc-span="4"
      data-sc-span-mobile="2.2"
      data-sc-drift="#06080f"
    >
      <div data-sc-stage className="flex flex-col justify-center pt-16">
        <div className="work-rail" data-sc-pan="0.04">
          <div className="work-lead flex flex-col justify-center pr-4">
            <p className="font-mono text-[11px] uppercase tracking-label text-accent">
              Selected work · {PROJECTS.length} projects
            </p>
            <h2 className="sc-display mt-4 text-title font-semibold text-balance text-fg">
              Headless stores, AI automations, live client sites.
            </h2>
            <p className="mt-5 text-pretty text-fg-muted">
              Keep scrolling and the work slides past. Open any project for the full write-up and
              snapshot.
            </p>
          </div>
          {PROJECTS.map((project) => (
            <Card key={project.title} project={project} onZoom={setModalProject} />
          ))}
          <div className="work-lead flex flex-col justify-center pl-2">
            <p className="sc-display text-2xl font-semibold text-fg">Want one of these?</p>
            <a
              href="#contact"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dim"
            >
              Tell me what you are building
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {modalProject && (
        <SnapshotModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </section>
  );
}
