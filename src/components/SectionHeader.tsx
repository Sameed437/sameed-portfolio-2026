import Reveal from './Reveal';

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ index, eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-label text-accent">
          {index}
        </span>
        <span className="label">{eyebrow}</span>
        <span className="h-px flex-1 accent-rule opacity-40" />
      </div>
      <h2 className="mt-6 max-w-3xl text-title font-semibold text-balance text-fg">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-prose text-lead text-pretty text-fg-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
