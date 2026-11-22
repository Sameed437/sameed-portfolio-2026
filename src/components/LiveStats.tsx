import { GitCommitHorizontal, Workflow, Gauge, Accessibility, ShieldCheck, Search } from 'lucide-react';
import { getLiveStats } from '@/lib/stats';
import Counter from './Counter';

type Item = { label: string; value: string; icon: React.ElementType; hint?: string };

const nf = new Intl.NumberFormat('en-US');

/*
 * Measured numbers only. Items whose value is null are dropped, and if nothing
 * was measured the whole strip is omitted, so it can never show a guess.
 */
export default async function LiveStats() {
  const { stats, live } = await getLiveStats();
  const { github, n8n, lighthouse: lh } = stats;

  const items: (Item | null)[] = [
    github.commits30d !== null
      ? { label: 'GitHub commits · 30d', value: nf.format(github.commits30d), icon: GitCommitHorizontal }
      : null,
    n8n.runs30d !== null && n8n.runs30d > 0
      ? {
          label: 'n8n runs · 30d',
          value: nf.format(n8n.runs30d),
          icon: Workflow,
          hint: n8n.successRate !== null ? `${n8n.successRate}% succeeded` : undefined,
        }
      : null,
    lh.performance !== null ? { label: 'Lighthouse perf', value: String(lh.performance), icon: Gauge } : null,
    lh.accessibility !== null ? { label: 'Lighthouse a11y', value: String(lh.accessibility), icon: Accessibility } : null,
    lh.bestPractices !== null ? { label: 'Best practices', value: String(lh.bestPractices), icon: ShieldCheck } : null,
    lh.seo !== null ? { label: 'Lighthouse SEO', value: String(lh.seo), icon: Search } : null,
  ];
  const shown = items.filter((i): i is Item => i !== null);
  if (shown.length === 0) return null;

  const updated = stats.updatedAt
    ? new Date(stats.updatedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
      })
    : null;

  return (
    <div className="mb-14" aria-label="Live engineering metrics">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-label text-fg-faint">
        <span className="inline-flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-accent animate-pulse' : 'bg-fg-faint'}`} />
          {live ? 'Live from my self-hosted n8n' : 'Last measured snapshot'}
        </span>
        {updated && <span>Updated {updated}</span>}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {shown.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-surface to-base p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="sc-display text-2xl font-bold tracking-tight text-accent">
                  <Counter value={m.value} />
                </span>
                <Icon size={15} className="text-accent" />
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-label text-fg-muted">{m.label}</p>
              {m.hint && <p className="mt-1 text-[11px] text-fg-faint">{m.hint}</p>}
            </div>
          );
        })}
      </div>

      {lh.url && (
        <p className="mt-2 font-mono text-[11px] text-fg-faint">Lighthouse: mobile, {lh.url}</p>
      )}
    </div>
  );
}
