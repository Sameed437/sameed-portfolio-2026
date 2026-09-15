import Reveal from './Reveal';

type Props = {
  /** Two-digit index shown in the margin, e.g. "02". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="label">{index}</span>
        <span className="label">{eyebrow}</span>
        <span className="h-px flex-1 bg-rule" />
      </div>
      <h2 className="mt-6 max-w-3xl text-title font-medium text-balance text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-prose text-lead text-pretty text-ink-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
