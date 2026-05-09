import SectionReveal from './SectionReveal';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: Props) {
  return (
    <SectionReveal
      className={`mb-12 max-w-2xl md:mb-16 ${
        align === 'center' ? 'mx-auto text-center' : ''
      }`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
        <span className="h-1 w-1 rounded-full bg-violet-400" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone sm:text-5xl md:text-6xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-bone/65 text-pretty md:text-lg">
          {description}
        </p>
      )}
    </SectionReveal>
  );
}
