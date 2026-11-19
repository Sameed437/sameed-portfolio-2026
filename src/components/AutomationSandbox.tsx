'use client';

import { useState, useEffect } from 'react';
import {
  Terminal,
  Play,
  RotateCcw,
  Zap,
  CheckCircle2,
  Cpu,
  Bot,
  Webhook,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

type Scenario = {
  id: string;
  title: string;
  badge: string;
  description: string;
  latency: string;
  timeSaved: string;
  reliability: string;
  steps: {
    time: string;
    tag: string;
    color: string;
    message: string;
    detail?: string;
  }[];
};

const SCENARIOS: Scenario[] = [
  {
    id: 'lead-qualification',
    title: 'Enterprise Inbound Lead Qualification & CRM Sync',
    badge: '360 Signum & High-Ticket B2B',
    description:
      'Incoming webhook payload from web forms is immediately validated, enriched with firmographic data, classified by Claude 3.5 for intent score, synced into HubSpot CRM, and routed to Slack with calendar booking links.',
    latency: '184ms',
    timeSaved: '15 min / lead',
    reliability: '99.98%',
    steps: [
      {
        time: '00:00:02',
        tag: 'WEBHOOK_IN',
        color: 'text-accent border-accent/30 bg-accent/10',
        message: 'POST /api/v1/lead-ingest received [Payload size: 1.4KB]',
        detail: 'Event: lead.submitted · Source: Enterprise Pricing Modal · Origin: verified',
      },
      {
        time: '00:00:38',
        tag: 'DATA_ENRICH',
        color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
        message: 'Enriching domain firmographics via Clearbit & hunter APIs',
        detail: 'Company: Series-B FinTech · Headcount: 140 · Industry: SaaS · Annual Revenue: $18M',
      },
      {
        time: '00:00:94',
        tag: 'CLAUDE_3_5',
        color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        message: 'Anthropic Claude 3.5 Sonnet intent analysis & scoring',
        detail: 'Intent: High-Commercial · Budget: $25K+ · Priority: Tier 1 · Action: Instant SLA',
      },
      {
        time: '00:01:42',
        tag: 'CRM_DISPATCH',
        color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
        message: 'HubSpot CRM contact created + Deal record opened',
        detail: 'Deal Stage: "Qualified Inbound" · Custom properties & intent summary attached',
      },
      {
        time: '00:01:84',
        tag: 'DISPATCH_DONE',
        color: 'text-accent border-accent/30 bg-accent/10',
        message: 'Slack alert pushed to #enterprise-leads + Cal.com link sent',
        detail: 'Pipeline cycle completed in 184ms. Zero manual touches required.',
      },
    ],
  },
  {
    id: 'content-publishing',
    title: 'Autonomous Multi-Stage SEO Content Pipeline',
    badge: 'Marham & BlogBolt Production Architecture',
    description:
      'Autonomous 7-phase content engine: accepts target keyword clusters, analyzes live search intent and competitor gaps, writes semantic outlines, generates full markdown drafts with schema markup, and dispatches to WordPress REST API.',
    latency: '2.1s',
    timeSaved: '3.5 hrs / article',
    reliability: '99.9%',
    steps: [
      {
        time: '00:00:05',
        tag: 'SERP_INGEST',
        color: 'text-accent border-accent/30 bg-accent/10',
        message: 'Pulls keyword difficulty & top 10 ranking SERP structures',
        detail: 'Keyword: "robotic knee surgery recovery timeline" · Vol: 9.8K · Search Intent: Commercial',
      },
      {
        time: '00:00:62',
        tag: 'GAP_ANALYSIS',
        color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
        message: 'Extracting competitor heading hierarchy & question queries',
        detail: 'Identified 4 unanswered patient questions and missing pricing/recovery comparison table',
      },
      {
        time: '00:01:25',
        tag: 'CLAUDE_DRAFT',
        color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        message: 'Claude 3.5 Sonnet generates comprehensive 2,400-word draft',
        detail: 'Format: Markdown with schema FAQPage + MedicalWebPage JSON-LD + Alt tags',
      },
      {
        time: '00:01:80',
        tag: 'SEO_VALIDATE',
        color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
        message: 'Keyword density & readability score validation passed',
        detail: 'Flesch Reading Ease: 64 · Target Keyword Density: 1.4% · Heading coverage: 100%',
      },
      {
        time: '00:02:10',
        tag: 'CMS_PUBLISHED',
        color: 'text-accent border-accent/30 bg-accent/10',
        message: 'WordPress REST API: Draft created with categories & tags',
        detail: 'Draft ID: #10842 · Editorial review ready. 3.5 hours of manual research eliminated.',
      },
    ],
  },
  {
    id: 'headless-inventory',
    title: 'Headless E-Commerce Inventory & Order Webhook Sync',
    badge: 'Wonderlyf & High-Volume Commerce',
    description:
      'High-throughput synchronization pipeline: reconciles cart checkouts, updates WooCommerce backend inventory, fires customer SMS/WhatsApp confirmations, and pushes fulfillment tickets to third-party courier APIs.',
    latency: '312ms',
    timeSaved: '10 min / order',
    reliability: '99.99%',
    steps: [
      {
        time: '00:00:02',
        tag: 'CHECKOUT_HOOK',
        color: 'text-accent border-accent/30 bg-accent/10',
        message: 'Order placed on Next.js 14 frontend -> Webhook fired',
        detail: 'Order #ALM-9821 · Cart: 3 SKUs · Payment: Verified · Customer: Verified',
      },
      {
        time: '00:00:85',
        tag: 'DB_RESERVE',
        color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
        message: 'Atomic stock deduction across distributed WooCommerce tables',
        detail: 'SKUs reserved · Race condition prevented via Redis locking key',
      },
      {
        time: '00:01:70',
        tag: 'COURIER_SYNC',
        color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        message: 'Courier API booking dispatched & tracking number generated',
        detail: 'Carrier: Trax/TCS · Airway Bill #TRX-449102 · Pickup batch scheduled',
      },
      {
        time: '00:02:40',
        tag: 'NOTIFY_ENGINE',
        color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
        message: 'WhatsApp Business API + Email receipt dispatched',
        detail: 'Customer tracking link delivered in real time · Delivery notification active',
      },
      {
        time: '00:03:12',
        tag: 'ORDER_LOCKED',
        color: 'text-accent border-accent/30 bg-accent/10',
        message: 'State updated in Next.js frontend cache & admin telemetry',
        detail: 'Order workflow synchronized in 312ms. Automated failover monitoring active.',
      },
    ],
  },
];

export default function AutomationSandbox() {
  const [activeScenarioId, setActiveScenarioId] = useState(SCENARIOS[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) ?? SCENARIOS[0];

  const runSimulation = () => {
    setIsRunning(true);
    setVisibleSteps(0);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setVisibleSteps(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && visibleSteps < scenario.steps.length) {
      timer = setTimeout(() => {
        setVisibleSteps((prev) => prev + 1);
      }, 420);
    } else if (visibleSteps >= scenario.steps.length) {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isRunning, visibleSteps, scenario.steps.length]);

  // Run on initial select
  useEffect(() => {
    setVisibleSteps(scenario.steps.length);
  }, [activeScenarioId, scenario.steps.length]);

  return (
    <section id="simulator" className="relative border-t border-line bg-surface/20">
      <div className="shell py-20 md:py-28">
        <SectionHeader
          index="02"
          eyebrow="Live Telemetry"
          title="Interactive Automation Sandbox."
          description="Test live production pipeline traces engineered by Sameed. Select an enterprise workflow below and watch real-time webhook ingestion, LLM intent scoring, and automated API dispatching."
        />

        {/* Sandbox Shell */}
        <Reveal delay={100}>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B0F19] via-[#070A12] to-[#0B0F19] p-5 sm:p-8 shadow-lift">
            {/* Top Bar: Scenario Selector Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                {SCENARIOS.map((s) => {
                  const isActive = s.id === scenario.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setActiveScenarioId(s.id);
                        setVisibleSteps(0);
                        setIsRunning(true);
                      }}
                      className={
                        'rounded-xl px-3.5 py-2 text-xs font-mono font-medium transition-all duration-200 ' +
                        (isActive
                          ? 'border border-accent/40 bg-accent-wash text-accent shadow-sm'
                          : 'border border-white/5 bg-base/60 text-slate-400 hover:border-white/15 hover:text-fg')
                      }
                    >
                      {s.title.split(' ')[0]} {s.title.split(' ')[1]}
                    </button>
                  );
                })}
              </div>

              {/* Simulation Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={runSimulation}
                  disabled={isRunning}
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-base transition-all hover:bg-accent-dim shadow-glow disabled:opacity-50"
                >
                  <Play size={13} className={isRunning ? 'animate-spin' : ''} />
                  {isRunning ? 'Executing Pipeline...' : '▶ Run Live Simulation'}
                </button>
                <button
                  type="button"
                  onClick={resetSimulation}
                  className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-base/80 text-slate-400 transition-colors hover:text-fg hover:border-accent/30"
                  title="Reset trace"
                >
                  <RotateCcw size={13} />
                </button>
              </div>
            </div>

            {/* Scenario Header Info */}
            <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                  {scenario.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-fg mt-1">
                  {scenario.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
                  {scenario.description}
                </p>
              </div>

              {/* Executive Impact Metrics */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="rounded-xl border border-white/10 bg-base/80 px-3.5 py-2.5 text-center">
                  <p className="font-mono text-base font-semibold text-accent">{scenario.latency}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">Execution SLA</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-base/80 px-3.5 py-2.5 text-center">
                  <p className="font-mono text-base font-semibold text-emerald-400">{scenario.timeSaved}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">Time Saved</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-base/80 px-3.5 py-2.5 text-center">
                  <p className="font-mono text-base font-semibold text-fg">{scenario.reliability}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">Reliability</p>
                </div>
              </div>
            </div>

            {/* Telemetry Terminal Output */}
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#04060A] shadow-inner">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Terminal size={12} className="text-accent" />
                    trace://sameed.systems/production/{scenario.id}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {visibleSteps === scenario.steps.length ? '● Pipeline Complete (200 OK)' : isRunning ? '⚡ Streaming Events...' : 'Ready to Execute'}
                </span>
              </div>

              {/* Terminal Event Stream */}
              <div className="space-y-3 p-4 sm:p-5 font-mono text-xs max-h-96 overflow-y-auto">
                {scenario.steps.slice(0, visibleSteps).map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-1 rounded-lg border border-white/5 bg-white/[0.015] p-3 transition-all duration-200 animate-fadeIn"
                  >
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-[11px] text-slate-500 font-medium">{step.time}</span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-semibold border ${step.color}`}
                      >
                        {step.tag}
                      </span>
                      <span className="text-slate-200 font-medium">{step.message}</span>
                    </div>
                    {step.detail && (
                      <p className="text-[11px] text-slate-400 pl-4 border-l border-white/10 mt-1">
                        ↳ {step.detail}
                      </p>
                    )}
                  </div>
                ))}

                {visibleSteps === 0 && (
                  <div className="py-8 text-center text-slate-500 font-mono text-xs">
                    Click &quot;▶ Run Live Simulation&quot; to trigger this pipeline and observe telemetry.
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Insight Footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent shrink-0" />
                <span className="text-slate-300">
                  Engineered with n8n, Claude 3.5 Sonnet API, webhooks, and automated retry backoff.
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-semibold text-accent transition-colors hover:text-accent-dim"
              >
                Discuss automating your business pipeline
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
