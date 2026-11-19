'use client';

import { useState, useId } from 'react';
import Link from 'next/link';
import {
  Activity,
  Bot,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  Database,
  DollarSign,
  Layers,
  Play,
  Send,
  Server,
  ShoppingCart,
  Sliders,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
  Webhook,
  Zap,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import VideoBriefing from './VideoBriefing';

/* ------------------------------------------------------------------ */
/* Production Workflow Blueprint Definitions                           */
/* ------------------------------------------------------------------ */

type WorkflowStep = {
  id: string;
  stepNum: string;
  name: string;
  role: string;
  tech: string;
  status: string;
  latency: string;
  tokens?: string;
  iconType: 'webhook' | 'ai' | 'engine' | 'db' | 'dispatch';
  summary: string;
  payload: Record<string, any>;
  promptLogic?: string;
  outputPreview: Record<string, any>;
  businessOutcome: string;
};

type WorkflowBlueprint = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  stackTags: string[];
  steps: WorkflowStep[];
};

const BLUEPRINTS: WorkflowBlueprint[] = [
  {
    id: 'content-engine',
    badge: 'Marham & BlogBolt Production Flow',
    title: 'Autonomous AI Content & SEO Publishing Engine',
    subtitle:
      'Takes target keyword clusters, analyzes live search intent, generates semantic editorial drafts with schema markup, and dispatches to WordPress.',
    metric: '20+ hrs/wk',
    metricLabel: 'Manual research & writing saved',
    stackTags: ['n8n', 'Claude 3.5 Sonnet', 'Oracle Cloud', 'WordPress REST API', 'Semrush API'],
    steps: [
      {
        id: 'c1',
        stepNum: '01',
        name: 'SERP & Search Intent Ingestion',
        role: 'Data Aggregator',
        tech: 'n8n Webhook + Semrush API',
        status: '200 OK',
        latency: '340ms',
        iconType: 'webhook',
        summary: 'Pulls keyword difficulty, top 10 ranking SERP outlines, and patient query intent from search data.',
        payload: {
          event: 'topic.queued',
          keyword: 'preventive cardiology screening guidelines',
          volume: 14800,
          difficulty: 38,
          intent: 'informational_commercial',
          target_audience: 'patients_40_plus',
        },
        outputPreview: {
          clusters_identified: 5,
          search_questions: 12,
          competitor_gaps: ['pricing transparency', 'hospital accreditation checklist'],
        },
        businessOutcome: 'Eliminates 3+ hours of manual keyword research and competitor outline analysis per article.',
      },
      {
        id: 'c2',
        stepNum: '02',
        name: 'Claude 3.5 Semantic Architect',
        role: 'LLM Agent Core',
        tech: 'Claude API (Sonnet 3.5)',
        status: '200 OK',
        latency: '1,420ms',
        tokens: '1,840',
        iconType: 'ai',
        summary: 'Generates structured medical-editorial content following rigorous E-E-A-T guidelines, section-by-section.',
        promptLogic: `You are an expert clinical editor for Pakistan's largest healthcare portal. 
Draft a comprehensive, medically accurate guide for the target query.
Follow strict schema: H2/H3 hierarchy, clinical FAQ accordion, and internal citation links.`,
        payload: {
          model: 'claude-3-5-sonnet-20241022',
          temperature: 0.25,
          max_tokens: 4000,
          framework: 'E-E-A-T Clinical Standards',
        },
        outputPreview: {
          word_count: 1850,
          reading_level: 'Grade 8 (Accessible)',
          medical_citations: 6,
          structured_faq_count: 4,
        },
        businessOutcome: 'Produces publication-grade, intent-matched drafts in seconds rather than days.',
      },
      {
        id: 'c3',
        stepNum: '03',
        name: 'SEO Schema & Asset Metadata',
        role: 'Optimization Engine',
        tech: 'Python Semantic Parser',
        status: '200 OK',
        latency: '180ms',
        iconType: 'engine',
        summary: 'Injects JSON-LD MedicalWebPage schema, crafts meta titles, builds OpenGraph cards, and generates contextual image alt-text.',
        payload: {
          schema_type: 'MedicalWebPage',
          target_meta_title_len: 58,
          alt_text_policy: 'descriptive_clinical',
        },
        outputPreview: {
          json_ld_valid: true,
          meta_title: 'Preventive Cardiology Screening: What to Expect & Cost Guide',
          og_image_alt: 'Doctor reviewing cardiac ultrasound with patient in clinical setting',
        },
        businessOutcome: 'Compounds organic Google rankings and Google Discover placement with zero technical debt.',
      },
      {
        id: 'c4',
        stepNum: '04',
        name: 'Headless WordPress Draft Dispatch',
        role: 'CMS Delivery',
        tech: 'WordPress REST API',
        status: '201 Created',
        latency: '260ms',
        iconType: 'dispatch',
        summary: 'Pushes complete HTML blocks, categories, tags, and featured asset associations as an editorial-ready draft.',
        payload: {
          endpoint: '/wp-json/wp/v2/posts',
          status: 'draft',
          categories: ['Cardiology', 'Preventive Health'],
          featured_media_id: 8492,
        },
        outputPreview: {
          post_id: 10482,
          edit_url: 'https://marham.pk/wp-admin/post.php?post=10482&action=edit',
          editorial_ready: true,
        },
        businessOutcome: 'Publishing turnaround reduced from 3 hours to 2 minutes, self-serve for the editorial squad.',
      },
    ],
  },
  {
    id: 'ecommerce-sync',
    badge: 'Wonderlyf & Headless Commerce Flow',
    title: 'Headless E-Commerce Event & Multi-Channel Sync',
    subtitle:
      'Real-time transaction webhook handling: updates headless Next.js cache, syncs inventory ledgers, and dispatches automated WhatsApp updates.',
    metric: 'Sub-50ms',
    metricLabel: 'Event-to-dispatch latency',
    stackTags: ['Next.js 14', 'WooCommerce REST', 'Webhook Bus', 'Twilio / WhatsApp API', 'Redis Cache'],
    steps: [
      {
        id: 'e1',
        stepNum: '01',
        name: 'Cart & Checkout Webhook Trigger',
        role: 'Event Ingestion',
        tech: 'Next.js API Route + Signature Verifier',
        status: '200 OK',
        latency: '45ms',
        iconType: 'webhook',
        summary: 'Receives signed order payload from localized payment gateways (EasyPaisa, JazzCash, Stripe).',
        payload: {
          event: 'order.completed',
          order_id: 'PK-94821',
          currency: 'PKR',
          total: 14500,
          customer_phone: '+923330120212',
          items: [{ sku: 'ALM-SILK-01', qty: 2 }],
        },
        outputPreview: {
          signature_valid: true,
          idempotency_key: '94821-verified',
          payment_settled: true,
        },
        businessOutcome: 'Zero lost orders or race conditions during flash sales and high-traffic drops.',
      },
      {
        id: 'e2',
        stepNum: '02',
        name: 'Inventory Ledger & Cache Revalidation',
        role: 'Data Consistency',
        tech: 'Headless WooCommerce + On-Demand ISR',
        status: '200 OK',
        latency: '90ms',
        iconType: 'db',
        summary: 'Deducts stock balances and triggers instant Next.js tag revalidation so out-of-stock items update across edge caches in sub-second time.',
        payload: {
          action: 'revalidateTag',
          tags: ['product-ALM-SILK-01', 'category-pret'],
          stock_deduction: 2,
        },
        outputPreview: {
          edge_revalidated: true,
          remaining_stock: 4,
          cache_purge_time_ms: 22,
        },
        businessOutcome: 'Prevents overselling and eliminates stale catalog listings without full site rebuilds.',
      },
      {
        id: 'e3',
        stepNum: '03',
        name: 'AI WhatsApp Customer Dispatch',
        role: 'Messaging Agent',
        tech: 'Twilio WhatsApp API + AI Template Engine',
        status: '200 OK',
        latency: '310ms',
        iconType: 'dispatch',
        summary: 'Dispatches bilingual order receipt and live courier tracking link with interactive quick-reply buttons directly into WhatsApp.',
        payload: {
          to: 'whatsapp:+923330120212',
          template: 'order_confirmed_v2',
          params: { order_id: 'PK-94821', courier: 'TCS Express', tracking_code: 'TCS8472910' },
        },
        outputPreview: {
          message_sid: 'SM948271038471',
          delivery_status: 'delivered',
          read_receipt: 'pending',
        },
        businessOutcome: 'Reduces "where is my order?" customer support tickets by over 65%.',
      },
    ],
  },
  {
    id: 'lead-qualification',
    badge: '360 Signum & High-Ticket B2B',
    title: 'Smart Inbound Lead Qualification & CRM Routing',
    subtitle:
      'Instantly enriches form submissions, scores customer intent with Claude, alerts the team on Slack, and creates calendar booking links.',
    metric: '4.2x',
    metricLabel: 'Faster inbound qualification SLA',
    stackTags: ['Make / Zapier', 'Claude 3.5', 'HubSpot / Airtable', 'Slack Bot', 'Cal.com API'],
    steps: [
      {
        id: 'l1',
        stepNum: '01',
        name: 'Inbound Lead Ingestion & Domain Audit',
        role: 'Ingestion Bus',
        tech: 'Webhook Listener + Clearbit/Hunter API',
        status: '200 OK',
        latency: '290ms',
        iconType: 'webhook',
        summary: 'Pulls company domain, team headcount, traffic volume, and technology stack when an inquiry lands.',
        payload: {
          lead_email: 'cto@scale-health.co.uk',
          project_type: 'AI Automation & Headless Store',
          budget_bracket: '$5,000 - $15,000',
          timeline: 'Immediate (< 3 weeks)',
        },
        outputPreview: {
          company: 'Scale Health UK',
          headcount: '25-50',
          current_tech: ['WordPress', 'Zapier', 'Stripe'],
          enrichment_score: 'A+',
        },
        businessOutcome: 'Filters high-ticket qualified prospects instantly, avoiding hours of manual pre-vetting.',
      },
      {
        id: 'l2',
        stepNum: '02',
        name: 'Claude Intent & Urgency Classifier',
        role: 'AI Decision Logic',
        tech: 'Claude API Agent',
        status: '200 OK',
        latency: '820ms',
        tokens: '940',
        iconType: 'ai',
        summary: 'Evaluates project scope, assigns priority tier (Tier 1 Enterprise vs Tier 3 General), and drafts tailored discovery questions.',
        promptLogic: `Analyze this inbound lead. Classify scope into [Tier 1, Tier 2, Tier 3].
Draft 3 technical discovery questions based on their existing stack.`,
        payload: {
          tier: 'Tier 1 (High Priority)',
          score: 94,
          urgency: 'HIGH',
        },
        outputPreview: {
          assigned_agent: 'Sameed Chaudhary',
          suggested_pipeline: 'Next.js Front + Custom n8n Automation Engine',
          estimated_deal_size: '$8,500',
        },
        businessOutcome: 'Ensures urgent high-budget clients get immediate discovery within minutes, not days.',
      },
      {
        id: 'l3',
        stepNum: '03',
        name: 'Team Slack Alert & Cal.com Booking Link',
        role: 'Multi-Channel Alert',
        tech: 'Slack Webhook + Cal.com API',
        status: '200 OK',
        latency: '190ms',
        iconType: 'dispatch',
        summary: 'Sends rich Slack card with 1-click meeting approval and automatically emails candidate booking schedule.',
        payload: {
          slack_channel: '#deal-flow-urgent',
          booking_link: 'https://cal.com/sameed-chaudhary/15min',
        },
        outputPreview: {
          slack_ts: '1731758291.002',
          invitation_dispatched: true,
        },
        businessOutcome: 'Closes the loop between submission and calendar appointment within 60 seconds.',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* ROI & Time-Savings Calculator Logic                                */
/* ------------------------------------------------------------------ */

function calculateROI(teamSize: number, hoursPerPerson: number, hourlyRate: number) {
  const weeklyHours = teamSize * hoursPerPerson;
  const annualHours = Math.round(weeklyHours * 50); // 50 work weeks
  const annualCost = Math.round(annualHours * hourlyRate);
  // Estimated 75% automation efficiency
  const hoursReclaimed = Math.round(annualHours * 0.75);
  const netSavings = Math.round(annualCost * 0.75);
  const turnaroundMultiplier = (hoursPerPerson >= 15 ? 4.5 : 3.2).toFixed(1);

  return {
    weeklyHours,
    annualHours,
    hoursReclaimed,
    netSavings,
    turnaroundMultiplier,
  };
}

/* ------------------------------------------------------------------ */
/* Main WorkflowStudio Component                                      */
/* ------------------------------------------------------------------ */

export default function WorkflowStudio({ standalone = false }: { standalone?: boolean }) {
  const [activeTab, setActiveTab] = useState<'architect' | 'calculator'>('architect');
  const [selectedBlueprintId, setSelectedBlueprintId] = useState<string>(BLUEPRINTS[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [inspectorView, setInspectorView] = useState<'payload' | 'logic' | 'output'>('payload');

  // Calculator State
  const [teamSize, setTeamSize] = useState<number>(4);
  const [hoursPerPerson, setHoursPerPerson] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(35);

  const teamId = useId();
  const hoursId = useId();
  const rateId = useId();

  const currentBlueprint =
    BLUEPRINTS.find((b) => b.id === selectedBlueprintId) ?? BLUEPRINTS[0];
  const currentStep =
    currentBlueprint.steps[activeStepIndex] ?? currentBlueprint.steps[0];

  const roi = calculateROI(teamSize, hoursPerPerson, hourlyRate);

  // Prefill contact form and scroll down or redirect
  const handleConsultationClick = (prefillSubject?: string, prefillMessage?: string) => {
    const subject =
      prefillSubject ||
      `AI Automation Inquiry (Estimated ${roi.hoursReclaimed.toLocaleString()} hrs/yr savings)`;
    const message =
      prefillMessage ||
      `Hi Sameed,\n\nI tested your ROI Calculator and calculated our team of ${teamSize} could reclaim approximately ${roi.hoursReclaimed.toLocaleString()} hours/year and save ~$${roi.netSavings.toLocaleString()}/year through intelligent automation.\n\nI'd like to discuss implementing a custom AI pipeline for our business.`;

    if (typeof window !== 'undefined') {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        window.dispatchEvent(
          new CustomEvent('prefill-contact', {
            detail: { subject, message },
          })
        );
        contactEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        const query = new URLSearchParams({ subject, message }).toString();
        window.location.href = `/?${query}#contact`;
      }
    }
  };

  return (
    <section
      id="studio"
      className={`relative ${
        standalone
          ? 'min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 bg-surface/30'
          : 'border-t border-line bg-surface/40'
      }`}
    >
      <div className="shell">
        {standalone && (
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-2 text-xs font-mono text-fg-muted transition-all duration-200 hover:border-accent/40 hover:text-accent hover:bg-surface"
            >
              <ArrowLeft size={13} />
              Return to Portfolio
            </Link>
          </div>
        )}

        <SectionHeader
          index={standalone ? 'AI LAB' : '02'}
          eyebrow="Interactive Studio"
          title="Autonomous Systems Architecture & ROI Lab."
          description="Explore production-grade AI pipelines built with Claude API, n8n, and webhooks — or calculate the exact hours and capital your business can reclaim through intelligent automation."
        />

        {standalone && <VideoBriefing />}

        {/* Studio Mode Selector Switch */}
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <div className="inline-flex rounded-xl border border-line bg-base p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab('architect')}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                  activeTab === 'architect'
                    ? 'bg-accent text-base shadow-glow'
                    : 'text-fg-muted hover:text-fg'
                }`}
              >
                <Layers size={14} />
                Live Architecture Inspector
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('calculator')}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                  activeTab === 'calculator'
                    ? 'bg-accent text-base shadow-glow'
                    : 'text-fg-muted hover:text-fg'
                }`}
              >
                <Sliders size={14} />
                ROI &amp; Savings Calculator
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-fg-faint">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulseDot" />
              <span>Interactive Telemetry Simulator</span>
            </div>
          </div>
        </Reveal>

        {/* ========================================================== */}
        {/* TAB 1: LIVE ARCHITECTURE INSPECTOR                         */}
        {/* ========================================================== */}
        {activeTab === 'architect' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Blueprint Selector Buttons */}
            <div className="grid gap-3 sm:grid-cols-3">
              {BLUEPRINTS.map((bp) => {
                const isSelected = bp.id === selectedBlueprintId;
                return (
                  <button
                    key={bp.id}
                    type="button"
                    onClick={() => {
                      setSelectedBlueprintId(bp.id);
                      setActiveStepIndex(0);
                    }}
                    className={`card group flex flex-col p-4 text-left transition-all rounded-xl ${
                      isSelected
                        ? 'border-accent/60 bg-surface-raised shadow-lift'
                        : 'hover:border-accent/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-label text-accent">
                        {bp.badge}
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full transition-colors ${
                          isSelected ? 'bg-accent' : 'bg-line'
                        }`}
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-semibold tracking-tight text-fg transition-colors group-hover:text-accent">
                      {bp.title}
                    </h3>
                    <div className="mt-3 flex items-center justify-between border-t border-line/60 pt-2.5 text-xs">
                      <span className="font-mono text-fg-faint">{bp.metricLabel}</span>
                      <span className="font-semibold text-accent">{bp.metric}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Stage */}
            <div className="card rounded-2xl border border-line bg-surface overflow-hidden shadow-lift">
              {/* Pipeline Overview Strip */}
              <div className="border-b border-line bg-surface-raised/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-semibold text-fg flex items-center gap-2">
                    <Sparkles size={16} className="text-accent" />
                    {currentBlueprint.title}
                  </h4>
                  <p className="mt-1 text-xs text-fg-muted max-w-2xl">
                    {currentBlueprint.subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {currentBlueprint.stackTags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-base px-2 py-0.5 font-mono text-[11px] text-fg-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Node Sequence Horizontal Rail */}
              <div className="p-6 md:p-8 border-b border-line bg-base/50">
                <p className="font-mono text-[11px] uppercase tracking-label text-accent mb-4">
                  Pipeline Steps · Click any step to inspect telemetry &amp; logic
                </p>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {currentBlueprint.steps.map((step, idx) => {
                    const isStepActive = idx === activeStepIndex;
                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => setActiveStepIndex(idx)}
                        className={`group relative flex flex-col justify-between rounded-xl p-4 text-left transition-all border ${
                          isStepActive
                            ? 'border-accent bg-surface-raised shadow-glow'
                            : 'border-line bg-surface hover:border-accent/40 hover:bg-surface-raised'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-accent">
                              Step {step.stepNum}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              {step.status}
                            </span>
                          </div>

                          <h5 className="mt-2.5 text-sm font-semibold tracking-tight text-fg group-hover:text-accent transition-colors">
                            {step.name}
                          </h5>
                          <p className="mt-1 font-mono text-[11px] text-fg-faint">
                            {step.tech}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-2 text-[11px] font-mono text-fg-muted">
                          <span className="flex items-center gap-1">
                            <Clock size={11} className="text-accent" />
                            {step.latency}
                          </span>
                          <span className="text-accent group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                            Inspect
                            <ChevronRight size={12} />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step Deep-Dive Inspector Terminal */}
              <div className="p-6 md:p-8 bg-surface">
                <div className="grid gap-6 lg:grid-cols-12">
                  {/* Left: Metadata & Business Outcome */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-label text-accent">
                        Node Execution Telemetry
                      </span>
                      <span className="rounded-full border border-accent/25 bg-accent-wash px-2.5 py-0.5 font-mono text-[10px] text-accent font-semibold">
                        Step {currentStep.stepNum} Active
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold tracking-tight text-fg">
                      {currentStep.name}
                    </h4>

                    <p className="text-sm leading-relaxed text-fg-muted">
                      {currentStep.summary}
                    </p>

                    <div className="rounded-xl border border-line bg-base/80 p-4 space-y-2.5">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                        <div>
                          <p className="text-xs font-semibold text-fg">Target Business Outcome</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-fg-muted">
                            {currentStep.businessOutcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleConsultationClick(
                            `Automate Pipeline: ${currentBlueprint.title}`,
                            `Hi Sameed,\n\nI was inspecting the "${currentBlueprint.title}" architecture on your portfolio. We'd like to implement a similar workflow for our business.\n\nCould we schedule a short discovery call to discuss feasibility and implementation timeline?`
                          )
                        }
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-xs font-semibold text-base transition-all hover:bg-accent-dim shadow-glow"
                      >
                        Deploy This Architecture For My Business
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Right: Code / JSON Terminal Inspector */}
                  <div className="lg:col-span-7">
                    <div className="overflow-hidden rounded-xl border border-line bg-[#070A12] shadow-card">
                      {/* Terminal Chrome Bar */}
                      <div className="flex h-10 items-center justify-between border-b border-line bg-[#0B0F19] px-4">
                        <div className="flex items-center gap-2">
                          <Terminal size={13} className="text-accent" />
                          <span className="font-mono text-xs text-fg">
                            {currentStep.id}_inspector.json
                          </span>
                        </div>

                        {/* View Tabs */}
                        <div className="flex items-center gap-1 font-mono text-[11px]">
                          <button
                            type="button"
                            onClick={() => setInspectorView('payload')}
                            className={`rounded px-2.5 py-1 transition-colors ${
                              inspectorView === 'payload'
                                ? 'bg-accent/20 text-accent font-semibold'
                                : 'text-fg-faint hover:text-fg'
                            }`}
                          >
                            Input Payload
                          </button>
                          {currentStep.promptLogic && (
                            <button
                              type="button"
                              onClick={() => setInspectorView('logic')}
                              className={`rounded px-2.5 py-1 transition-colors ${
                                inspectorView === 'logic'
                                  ? 'bg-accent/20 text-accent font-semibold'
                                  : 'text-fg-faint hover:text-fg'
                              }`}
                            >
                              AI Prompt
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => setInspectorView('output')}
                            className={`rounded px-2.5 py-1 transition-colors ${
                              inspectorView === 'output'
                                ? 'bg-accent/20 text-accent font-semibold'
                                : 'text-fg-faint hover:text-fg'
                            }`}
                          >
                            Output Result
                          </button>
                        </div>
                      </div>

                      {/* Code Block Content */}
                      <div className="p-4 overflow-x-auto max-h-[340px] text-xs font-mono leading-relaxed">
                        {inspectorView === 'payload' && (
                          <pre className="text-cyan-300">
                            {JSON.stringify(currentStep.payload, null, 2)}
                          </pre>
                        )}

                        {inspectorView === 'logic' && (
                          <div className="space-y-3">
                            <p className="text-fg-faint">{'// System Prompt & Model Directive'}</p>
                            <pre className="whitespace-pre-wrap text-emerald-300 font-sans text-xs leading-relaxed">
                              {currentStep.promptLogic}
                            </pre>
                          </div>
                        )}

                        {inspectorView === 'output' && (
                          <pre className="text-emerald-400">
                            {JSON.stringify(currentStep.outputPreview, null, 2)}
                          </pre>
                        )}
                      </div>

                      {/* Terminal Footer Telemetry */}
                      <div className="flex items-center justify-between border-t border-line/60 bg-[#070A12] px-4 py-2 text-[10px] font-mono text-fg-faint">
                        <span>Status: 200 OK · Latency: {currentStep.latency}</span>
                        {currentStep.tokens && <span>Tokens: {currentStep.tokens}</span>}
                        <span>Runtime: Node.js 20 / Python 3.11</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* TAB 2: ROI & TIME-SAVINGS CALCULATOR                       */}
        {/* ========================================================== */}
        {activeTab === 'calculator' && (
          <div className="card rounded-2xl border border-line bg-surface p-6 md:p-10 shadow-lift animate-fadeIn">
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              {/* Sliders Input Column */}
              <div className="lg:col-span-6 space-y-7">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-label text-accent">
                    Input Your Operations Parameters
                  </span>
                  <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-fg">
                    Calculate Your Automation Dividend
                  </h3>
                  <p className="mt-2 text-sm text-fg-muted">
                    Slide the controls to reflect your team size and weekly hours spent on
                    repetitive manual processes.
                  </p>
                </div>

                {/* Slider 1: Team Size */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor={teamId} className="font-medium text-fg flex items-center gap-2">
                      <Users size={15} className="text-accent" />
                      Team members doing repetitive work
                    </label>
                    <span className="font-mono font-bold text-accent text-base">
                      {teamSize} {teamSize === 1 ? 'person' : 'people'}
                    </span>
                  </div>
                  <input
                    id={teamId}
                    type="range"
                    min={1}
                    max={30}
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 rounded-lg bg-line accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-fg-faint">
                    <span>1 person</span>
                    <span>15 people</span>
                    <span>30 people</span>
                  </div>
                </div>

                {/* Slider 2: Weekly Hours */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor={hoursId} className="font-medium text-fg flex items-center gap-2">
                      <Clock size={15} className="text-accent" />
                      Repetitive hours per person / week
                    </label>
                    <span className="font-mono font-bold text-accent text-base">
                      {hoursPerPerson} hrs/week
                    </span>
                  </div>
                  <input
                    id={hoursId}
                    type="range"
                    min={2}
                    max={30}
                    value={hoursPerPerson}
                    onChange={(e) => setHoursPerPerson(Number(e.target.value))}
                    className="w-full h-2 rounded-lg bg-line accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-fg-faint">
                    <span>2 hrs (light)</span>
                    <span>15 hrs (heavy)</span>
                    <span>30 hrs (severe bottleneck)</span>
                  </div>
                </div>

                {/* Slider 3: Hourly Cost */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor={rateId} className="font-medium text-fg flex items-center gap-2">
                      <DollarSign size={15} className="text-accent" />
                      Average estimated hourly rate
                    </label>
                    <span className="font-mono font-bold text-accent text-base">
                      ${hourlyRate}/hour
                    </span>
                  </div>
                  <input
                    id={rateId}
                    type="range"
                    min={15}
                    max={120}
                    step={5}
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 rounded-lg bg-line accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-fg-faint">
                    <span>$15/hr</span>
                    <span>$60/hr</span>
                    <span>$120/hr</span>
                  </div>
                </div>
              </div>

              {/* Output Results Card */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-accent/40 bg-gradient-to-br from-surface to-[#0A1220] p-6 md:p-8 shadow-lift space-y-6">
                  <div className="flex items-center justify-between border-b border-line pb-4">
                    <span className="font-mono text-xs uppercase tracking-label text-accent font-semibold">
                      Estimated Annual Dividend
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-wash px-2.5 py-1 text-xs font-semibold text-accent border border-accent/30">
                      <TrendingUp size={13} />
                      {roi.turnaroundMultiplier}x Speed Lift
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-line bg-base/60 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-label text-fg-faint">
                        Hours Reclaimed / Year
                      </p>
                      <p className="sc-display mt-2 text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                        {roi.hoursReclaimed.toLocaleString()}
                        <span className="text-sm font-normal text-fg-muted ml-1">hrs</span>
                      </p>
                      <p className="mt-1 text-xs text-fg-muted">
                        ~{Math.round(roi.hoursReclaimed / 50)} hrs saved every week
                      </p>
                    </div>

                    <div className="rounded-xl border border-line bg-base/60 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-label text-fg-faint">
                        Estimated Capital Savings
                      </p>
                      <p className="sc-display mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                        ${roi.netSavings.toLocaleString()}
                        <span className="text-sm font-normal text-fg-muted ml-1">/yr</span>
                      </p>
                      <p className="mt-1 text-xs text-fg-muted">
                        Direct labor cost avoidance
                      </p>
                    </div>
                  </div>

                  {/* Tasks Automated Checklist */}
                  <div className="rounded-xl border border-line/80 bg-base/40 p-4 space-y-2">
                    <p className="font-mono text-[11px] uppercase tracking-label text-fg-faint mb-2">
                      Key Systems Automated In Your Business:
                    </p>
                    <ul className="grid gap-2 text-xs text-fg-muted sm:grid-cols-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-accent shrink-0" />
                        <span>AI content &amp; SEO drafts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-accent shrink-0" />
                        <span>E-commerce order &amp; stock sync</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-accent shrink-0" />
                        <span>Lead qualification &amp; scoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-accent shrink-0" />
                        <span>Instant WhatsApp &amp; Slack alerts</span>
                      </li>
                    </ul>
                  </div>

                  {/* Direct Conversion CTA */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleConsultationClick()}
                      className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-4 text-sm font-semibold text-base transition-all hover:bg-accent-dim shadow-glow"
                    >
                      Reclaim ~{roi.hoursReclaimed.toLocaleString()} Hours With Sameed
                      <ArrowRight size={16} />
                    </button>
                    <p className="text-center text-[11px] text-fg-faint mt-2.5">
                      Transfers calculated figures directly into your discovery inquiry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {standalone && (
          <div className="mt-16 rounded-2xl border border-line bg-surface/60 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-label text-accent font-semibold">
                Ready to automate your operations?
              </p>
              <h3 className="mt-1 text-lg font-semibold text-fg">
                Let&apos;s build your custom workflow engine.
              </h3>
              <p className="mt-1 text-sm text-fg-muted max-w-xl">
                Whether you need autonomous SEO content generation, ERP/CRM event synchronization, or an intelligent customer qualification bot, let&apos;s architect the right pipeline.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <Link
                href="/#work"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-line bg-base px-5 py-3 text-xs font-semibold text-fg transition-colors hover:border-accent/40"
              >
                View Case Studies
              </Link>
              <button
                type="button"
                onClick={() => handleConsultationClick()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-xs font-semibold text-base transition-colors hover:bg-accent-dim shadow-glow"
              >
                Contact Sameed
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
