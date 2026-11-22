import {
  BIO,
  EDUCATION,
  EXPERIENCE,
  FAQS,
  PROFILE,
  PROJECTS,
  SERVICES,
  SKILL_GROUPS,
  STATS,
} from './data';

export type Answer = {
  text: string;
  links?: { label: string; href: string }[];
};

type Fact = {
  id: string;
  keywords: string[];
  answer: Answer;
  weight?: number;
};

const MAILTO = { label: `Email ${PROFILE.email}`, href: `mailto:${PROFILE.email}` };

/* ------------------------------------------------------------------ */
/* Direct Intent Patterns (High Precision)                            */
/* ------------------------------------------------------------------ */

type Intent = {
  pattern: RegExp;
  answer: Answer;
};

const INTENTS: Intent[] = [
  // Pricing / Rates / Cost / Budget
  {
    pattern: /\b(rate|rates|price|prices|pricing|cost|costs|fee|fees|budget|charge|charges|how much|quote|quotation|expensive|cheap|hourly)\b/i,
    answer: {
      text: "Pricing depends on scope — the number of integrations, the systems involved, and the timeline — so there is no fixed rate card. The fastest way to get an accurate estimate is to email Sameed with what you want to automate or build.",
      links: [
        MAILTO,
        { label: 'Calculate ROI in AI Studio', href: '/studio' },
      ],
    },
  },

  // What does Sameed do / Services / Capabilities
  {
    pattern: /\b(what do (you|he) do|services|capabilities|what can (you|he) (do|build|automate)|offerings|solutions)\b/i,
    answer: {
      text: `Sameed is an ${PROFILE.title} specializing in:\n\n1. AI Automation & Autonomous Agents: Custom workflows engineered with n8n, Claude API, Make, Zapier, and Python to eliminate manual operational tasks.\n2. Autonomous Content Pipelines: Multi-stage SEO engines (like BlogBolt) that research SERPs, generate structured drafts, and auto-publish into WordPress.\n3. Headless E-Commerce Engineering: Ultra-fast React & Next.js frontends backed by WooCommerce REST/GraphQL APIs (like Wonderlyf).\n4. Intelligent Chatbots & CRM Syncs: Custom bots with RAG for customer support and instant WhatsApp/Slack routing.`,
      links: [
        { label: 'Explore Interactive Studio', href: '/studio' },
        { label: 'View Case Studies', href: '/#work' },
        MAILTO,
      ],
    },
  },

  // Can you build / automate for me / for my business
  {
    pattern: /\b(can you (build|help|automate|create|make|work)|help me|automate (my|our)|implement)\b/i,
    answer: {
      text: "Yes, absolutely! Sameed works directly with businesses, agencies, and founders to automate manual bottlenecks. Whether you need an n8n webhook integration, an autonomous Claude content pipeline, an automated lead qualification system, or a headless web platform, he can architect and deploy the entire solution end-to-end.\n\nYou can inspect live blueprints in the AI Studio or send over your requirements via email.",
      links: [
        { label: 'Test Production Workflows', href: '/studio' },
        MAILTO,
      ],
    },
  },

  // Process / How do we start / Turnaround / Timeline
  {
    pattern: /\b(process|steps|how (do we|to) start|onboard|turnaround|how long|timeline|deliver|delivery time)\b/i,
    answer: {
      text: "A typical engagement starts with a short discovery conversation about your tools, data flow and bottlenecks, followed by an architecture plan (API endpoints, workflow nodes, prompts, failure handling), the build and integration, and then testing, documentation and handover. Timelines depend on scope — email Sameed with your requirements for an estimate.",
      links: [MAILTO],
    },
  },

  // Tech stack / Tools / Languages
  {
    pattern: /\b(tech stack|technologies|tools|languages|frameworks|what stack|what tools|what do you use|toolkit)\b/i,
    answer: {
      text: `Sameed's stack:\n\n${SKILL_GROUPS.map((g) => `• ${g.title}: ${g.items.join(', ')}`).join('\n')}`,
      links: [{ label: 'View Selected Projects', href: '/#work' }],
    },
  },

  // 360 Signum
  {
    pattern: /\b(360\s*signum|signum)\b/i,
    answer: {
      text: "At 360 Signum (Nov 2026 – Present), Sameed works full-time as an Automation Engineer (Remote). He is responsible for engineering autonomous enterprise workflows, designing multi-agent pipeline architectures, and setting up automated webhook integrations connecting CRMs, databases, and LLM APIs to eliminate manual overhead.",
    },
  },

  // Marham
  {
    pattern: /\b(marham)\b/i,
    answer: {
      text: "At Marham (Dec 2025 – Nov 2026), Sameed was a Digital Growth Specialist (SEO Content Writer). He built Marham's in-house AI content platform (Python, Next.js, Oracle Cloud), an n8n + Claude API content pipeline saving 20+ hours per week, and a WhatsApp chatbot, and grew organic traffic 70% in 3 months on a targeted segment.",
    },
  },

  // BlogBolt
  {
    pattern: /\b(blogbolt|blog bolt|content pipeline)\b/i,
    answer: {
      text: "BlogBolt is Sameed's flagship AI pipeline built with Python and a Next.js control panel. It automates a 7-phase SEO workflow using Claude: SERP research, intent mapping, full article drafts, on-page SEO schema, image selection with alt text, markdown formatting, and direct publishing to WordPress via REST API.",
      links: [{ label: 'Inspect BlogBolt Architecture', href: '/studio' }],
    },
  },

  // Wonderlyf
  {
    pattern: /\b(wonderlyf|wonderlyf\.co\.uk)\b/i,
    answer: {
      text: "Wonderlyf (wonderlyf.co.uk) is a live headless e-commerce store designed and engineered by Sameed for a UK wellness brand. It features a fully animated React frontend backed by WooCommerce & WordPress REST APIs, instant catalog filtering, dynamic cart drawer, and optimized checkout.",
      links: [{ label: 'Visit wonderlyf.co.uk', href: 'https://wonderlyf.co.uk' }],
    },
  },

  // Cure Abroad
  {
    pattern: /\b(cure\s*abroad|cureabroad|medical tourism)\b/i,
    answer: {
      text: "Cure Abroad Health Solutions (cureabroadhealthsolutions.com) is an international medical tourism platform engineered by Sameed. It coordinates cross-border patient care between the UK, Europe, and Asia, featuring custom WordPress architecture and a dual-funnel patient/hospital conversion system.",
      links: [{ label: 'Visit cureabroadhealthsolutions.com', href: 'https://cureabroadhealthsolutions.com/' }],
    },
  },

  // Chatbots / Support Bots / RAG
  {
    pattern: /\b(chatbot|chatbots|whatsapp|slack|support bot|customer support|rag|bot)\b/i,
    answer: {
      text: "Yes! Sameed builds and deploys conversational AI agents and intelligent chatbots. They use retrieval-augmented generation (RAG) to accurately answer questions from your company knowledge base, call webhooks to update databases or CRMs (HubSpot, Airtable), and deploy across web widgets, WhatsApp, or Slack.",
      links: [MAILTO],
    },
  },

  // Who is Sameed / Bio / About him
  {
    pattern: /\b(who (is|are)|about (sameed|him|you)|tell me about|introduce|bio|summary|background|who made|who built)\b/i,
    answer: {
      text: `Sameed Chaudhary is an ${PROFILE.title} and Full-Stack Web Engineer based in Lahore, Pakistan with 3+ years of professional experience across ${EXPERIENCE.length} companies/contracts, delivering 25+ projects for 40+ clients worldwide.\n\nCurrently at 360 Signum, he architects autonomous pipelines and webhook systems. His flagship builds include BlogBolt, Wonderlyf (headless store), and Cure Abroad Health Solutions.`,
      links: [
        MAILTO,
        { label: 'LinkedIn Profile', href: PROFILE.socials.linkedin },
        { label: 'GitHub Profile', href: PROFILE.socials.github },
      ],
    },
  },

  // Availability / Hire / Freelance
  {
    pattern: /\b(hire|hiring|available|availability|freelance|contract|full-?time|open to|collaborate)\b/i,
    answer: {
      text: `Yes — ${PROFILE.availability.toLowerCase()}. He is open to freelance client projects (AI automation pipelines, autonomous agent systems, headless web development) as well as collaborative roles.`,
      links: [MAILTO],
    },
  },

  // Contact / Email / Phone / Reach
  {
    pattern: /\b(contact|email|phone|call|message|reach|connect|talk|touch|inquiry|consultation)\b/i,
    answer: {
      text: `The fastest way to reach Sameed is via email: ${PROFILE.email}. You can also connect with him on LinkedIn or review his repositories on GitHub.`,
      links: [
        MAILTO,
        { label: 'LinkedIn Profile', href: PROFILE.socials.linkedin },
        { label: 'GitHub Profile', href: PROFILE.socials.github },
      ],
    },
  },

  // Location / Timezone / Remote
  {
    pattern: /\b(location|where (is|are)|live|based|timezone|relocate|remote|lahore|pakistan)\b/i,
    answer: {
      text: `Sameed is based in ${PROFILE.location} (PKT / UTC+5). He works remotely with global teams and clients across the UK, US, and Pakistan.`,
    },
  },

  // Experience / Past companies / Seniority
  {
    pattern: /\b(experience|history|companies|employment|jobs|seniority|past roles|work history)\b/i,
    answer: {
      text: `Sameed has 3+ years of experience across ${EXPERIENCE.length} companies/contracts:\n\n${EXPERIENCE.map((e) => `• ${e.company} (${e.date}): ${e.role}`).join('\n')}`,
      links: [{ label: 'View Timeline', href: '/#experience' }],
    },
  },

  // Studio / Calculator
  {
    pattern: /\b(studio|calculator|roi|savings|hours saved|blueprint|inspector|lab)\b/i,
    answer: {
      text: 'You can test his interactive AI Studio & ROI Lab directly on the dedicated /studio page. It lets you inspect live production workflow nodes (with sample JSON payloads and Claude prompts) and calculate how many hours and dollars your team could reclaim.',
      links: [{ label: 'Open AI Studio & ROI Lab', href: '/studio' }],
    },
  },

  // Projects / Portfolio / Case Studies
  {
    pattern: /\b(projects?|portfolio|case stud(y|ies)|what (have you|did you) (built?|made|worked on)|examples of work)\b/i,
    answer: {
      text: `Sameed has engineered 25+ production projects across autonomous AI workflows, headless e-commerce, and healthcare platforms. Key highlights include:\n\n• BlogBolt: Autonomous 7-phase Python & Next.js content pipeline using Claude API and n8n.\n• Almari PK (almaripk.com): Headless Next.js 14 WooCommerce storefront with sub-second catalog search.\n• Cure Abroad Health Solutions (cureabroadhealthsolutions.com): International medical tourism platform with dual-funnel patient conversion.\n• Wonderlyf (wonderlyf.co.uk): Animated UK wellness store with headless cart and checkout.\n• Seattle Accounting & LA Accounting: Financial authority portals engineered for lead generation.`,
      links: [
        { label: 'View All Selected Work', href: '/#work' },
        { label: 'Inspect AI Studio Blueprints', href: '/studio' },
      ],
    },
  },

  // Websites / Web Development / E-Commerce
  {
    pattern: /\b(website|websites|web dev(elopment)?|web app|frontend|e-?commerce|store|storefront|headless|wordpress|woocommerce)\b/i,
    answer: {
      text: 'Yes! Sameed is a specialist in high-speed web platforms and headless e-commerce. He builds ultra-fast frontends using Next.js 14 (App Router), React, TypeScript, and Tailwind CSS, backed by headless WooCommerce, WordPress REST API, or custom backend services. Performance and Core Web Vitals are part of the build, not an afterthought.',
      links: [
        { label: 'View E-Commerce Case Studies', href: '/#work' },
        MAILTO,
      ],
    },
  },

  // n8n / Make / Workflows / Webhooks
  {
    pattern: /\b(n8n|make\.com|zapier|webhooks?|workflow automation|lead triage)\b/i,
    answer: {
      text: 'Sameed has built 50+ enterprise automations using n8n, Make, Zapier, and custom Python webhooks. Typical setups include:\n\n• Multi-agent content generation & SEO publishing\n• CRM syncing & automated lead enrichment (HubSpot, Airtable, Notion)\n• E-commerce order routing & inventory sync\n• Automated Slack / WhatsApp notifications with fallback error handling',
      links: [
        { label: 'Test Workflow Schemas in AI Studio', href: '/studio' },
        MAILTO,
      ],
    },
  },

  // SEO / Growth / Traffic
  {
    pattern: /\b(seo|search engine|rankings?|organic traffic|serp|on-page seo)\b/i,
    answer: {
      text: 'Sameed has hands-on technical SEO experience. At Marham, he grew organic traffic 70% in 3 months on a targeted segment and built AI content pipelines with GSC, GA4 and Semrush connected. His builds incorporate automated schema markup, semantic HTML, and SERP intent analysis built directly into the engineering stack.',
      links: [{ label: 'View Work', href: '/#work' }],
    },
  },

  // Identity / Assistant Bot
  {
    pattern: /\b(who are you|your name|what('s| is) your name|are you sameed)\b/i,
    answer: {
      text: `I am Sameed's AI assistant! I'm here to answer questions about Sameed Chaudhary's work as an ${PROFILE.title}, his experience at 360 Signum and Marham, his projects (like BlogBolt and Wonderlyf), his tech stack, and how to hire him.`,
      links: [
        MAILTO,
        { label: 'LinkedIn Profile', href: PROFILE.socials.linkedin },
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Text normalisation & Tokeniser                                     */
/* ------------------------------------------------------------------ */

const PHRASES: [RegExp, string][] = [
  [/\bnext\s*\.?\s*js\b/g, 'nextjs'],
  [/\bnode\s*\.?\s*js\b/g, 'nodejs'],
  [/\breact\s*\.?\s*js\b/g, 'react'],
  [/\bword\s*press\b/g, 'wordpress'],
  [/\bwoo\s*commerce\b/g, 'woocommerce'],
  [/\btail\s*wind\b/g, 'tailwind'],
  [/\bwonderlyf\b/g, 'wonderlyf'],
  [/\balmari\s*pk\b/g, 'almaripk'],
  [/\bcure\s*abroad\b/g, 'cureabroad'],
  [/\b360\s*signum\b/g, 'signum'],
];

const SYNONYMS: Record<string, string> = {
  js: 'javascript',
  ts: 'typescript',
  wp: 'wordpress',
  woo: 'woocommerce',
  next: 'nextjs',
  node: 'nodejs',
  rates: 'pricing',
  rate: 'pricing',
  cost: 'pricing',
  costs: 'pricing',
  fee: 'pricing',
  fees: 'pricing',
  charge: 'pricing',
  charges: 'pricing',
  budget: 'pricing',
  quote: 'pricing',
  pipeline: 'automation',
  pipelines: 'automation',
  automate: 'automation',
  automates: 'automation',
  bot: 'chatbot',
  bots: 'chatbot',
  store: 'ecommerce',
  shop: 'ecommerce',
  cv: 'resume',
  repo: 'github',
};

const STOPWORDS = new Set([
  'a', 'about', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'do',
  'does', 'for', 'from', 'has', 'have', 'he', 'him', 'his', 'how', 'i',
  'in', 'is', 'it', 'its', 'me', 'my', 'of', 'on', 'or', 'our', 'that',
  'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'to',
  'us', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'who',
  'why', 'will', 'with', 'would', 'you', 'your',
]);

function normalise(raw: string): string {
  let s = raw.toLowerCase();
  for (const [re, replacement] of PHRASES) {
    s = s.replace(re, replacement);
  }
  return s.replace(/[^a-z0-9\s]/g, ' ');
}

function expand(token: string): string | null {
  if (STOPWORDS.has(token) || token.length < 2) return null;
  return SYNONYMS[token] ?? token;
}

function tokenise(input: string): string[] {
  const out = new Set<string>();
  for (const t of normalise(input).split(' ').filter(Boolean)) {
    const mapped = expand(t);
    if (mapped) out.add(mapped);
  }
  return [...out];
}

function kw(...parts: string[]): string[] {
  const out = new Set<string>();
  for (const part of parts) {
    for (const t of normalise(part).split(' ').filter(Boolean)) {
      const mapped = expand(t);
      if (mapped) out.add(mapped);
    }
  }
  return [...out];
}

function list(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

/* ------------------------------------------------------------------ */
/* Knowledge Base Assembly                                             */
/* ------------------------------------------------------------------ */

function buildFacts(): Fact[] {
  const facts: Fact[] = [];

  for (const s of SERVICES) {
    facts.push({
      id: `service:${s.title}`,
      weight: 1.3,
      keywords: kw(s.title, s.items.join(' '), s.blurb),
      answer: { text: `${s.title}: ${s.blurb}` },
    });
  }

  for (const p of PROJECTS) {
    facts.push({
      id: `project:${p.title}`,
      weight: 1.4,
      keywords: kw(p.title, p.kicker, p.tags.join(' '), p.description),
      answer: {
        text: `${p.title} (${p.kicker}): ${p.description}`,
        links: p.href
          ? [{ label: `View ${p.title}`, href: p.href }]
          : undefined,
      },
    });
  }

  for (const group of SKILL_GROUPS) {
    facts.push({
      id: `skillgroup:${group.title}`,
      weight: 1.25,
      keywords: kw(group.title, group.items.join(' ')),
      answer: { text: `${group.title} stack: ${list(group.items)}.` },
    });

    for (const item of group.items) {
      facts.push({
        id: `skill:${item}`,
        weight: 1.2,
        keywords: kw(item),
        answer: { text: `Yes — ${item} is a core part of Sameed's ${group.title} toolkit.` },
      });
    }
  }

  for (const [i, f] of FAQS.entries()) {
    facts.push({
      id: `faq:${i}`,
      weight: 1.2,
      keywords: kw(f.q),
      answer: { text: f.a },
    });
  }

  return facts;
}

const FACTS = buildFacts();

function scoreFact(fact: Fact, tokens: string[]): number {
  let score = 0;
  for (const token of tokens) {
    for (const keyword of fact.keywords) {
      if (keyword === token) {
        score += 3;
        break;
      }
      if (token.length >= 4 && (keyword.startsWith(token) || token.startsWith(keyword))) {
        score += 1.5;
        break;
      }
    }
  }
  return score * (fact.weight ?? 1);
}

/* ------------------------------------------------------------------ */
/* Public API                                                         */
/* ------------------------------------------------------------------ */

const GREETING = /^(hi|hey|hello|yo|salam|assalam|aoa|good (morning|afternoon|evening))\b/i;
const THANKS = /\b(thanks|thank you|thankyou|cheers|appreciate|great)\b/i;

export const SUGGESTIONS = [
  'What services do you offer?',
  'What are your pricing and hourly rates?',
  'What is your role at 360 Signum?',
  'What is BlogBolt and how does it work?',
  'Can you automate my business workflows?',
];

export const GREETING_MESSAGE = `Hi! I'm Sameed's AI assistant. Ask me about his automation pipelines, role at 360 Signum, BlogBolt, headless e-commerce builds, pricing, or tech stack.`;

export function ask(query: string): Answer {
  const trimmed = query.trim();
  if (!trimmed) return { text: GREETING_MESSAGE };

  // Quick greetings
  if (GREETING.test(trimmed) && trimmed.length < 24) {
    return {
      text: `Hello! I'm happy to help. You can ask me about Sameed's AI automations, projects like BlogBolt or Wonderlyf, his pricing, or his availability.`,
      links: [
        { label: 'View Services', href: '/#services' },
        { label: 'Explore AI Studio', href: '/studio' },
      ],
    };
  }

  // Thanks
  if (THANKS.test(trimmed) && trimmed.length < 32) {
    return {
      text: `You're welcome! If you'd like to discuss a project or schedule a discovery call, feel free to email Sameed directly at ${PROFILE.email}.`,
      links: [MAILTO],
    };
  }

  // 1. Check High-Precision Intent Matches first
  for (const intent of INTENTS) {
    if (intent.pattern.test(trimmed)) {
      return intent.answer;
    }
  }

  // 2. Keyword ranking against dynamic database
  const tokens = tokenise(trimmed);
  if (tokens.length > 0) {
    const ranked = FACTS.map((f) => ({ fact: f, score: scoreFact(f, tokens) }))
      .filter((r) => r.score >= 2.0)
      .sort((a, b) => b.score - a.score);

    if (ranked.length > 0) {
      return ranked[0].fact.answer;
    }
  }

  // 3. Intelligent helpful fallback
  return {
    text: `Sameed specializes in AI automation workflows (n8n, Claude API, custom agents), headless e-commerce, and high-performance web engineering.\n\nHere are some questions you can ask me:\n• "What are your pricing and hourly rates?"\n• "What is BlogBolt and how does it work?"\n• "What did Sameed build at 360 Signum or Marham?"\n• "Can you automate my business workflows?"\n• "What is your tech stack?"\n\nYou can also contact him directly at ${PROFILE.email}.`,
    links: [
      MAILTO,
      { label: 'Open AI Studio & ROI Lab', href: '/studio' },
    ],
  };
}
