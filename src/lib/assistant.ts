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

/*
 * A small local retrieval engine.
 *
 * Every answer is assembled from src/lib/data.ts at module load, so the
 * assistant can only ever state things that are actually true of Sameed —
 * there is no model, no API key, and no way for it to invent a fact.
 * Edit data.ts and the assistant's knowledge updates with it.
 */

export type Answer = {
  text: string;
  links?: { label: string; href: string }[];
};

type Fact = {
  id: string;
  keywords: string[];
  answer: Answer;
  /** Lifts broad topics above incidental keyword collisions. */
  weight?: number;
};

/* ------------------------------------------------------------------ */
/* Text normalisation                                                  */
/* ------------------------------------------------------------------ */

const PHRASES: [RegExp, string][] = [
  [/\bnext\s*\.?\s*js\b/g, 'nextjs'],
  [/\bnode\s*\.?\s*js\b/g, 'nodejs'],
  [/\breact\s*\.?\s*js\b/g, 'react'],
  [/\bword\s*press\b/g, 'wordpress'],
  [/\bwoo\s*commerce\b/g, 'woocommerce'],
  [/\btail\s*wind\b/g, 'tailwind'],
  [/\balmari\s*pk\b/g, 'almaripk'],
  [/\balmaripk\.com\b/g, 'almaripk'],
  [/\bcure\s*abroad\b/g, 'cureabroad'],
  [/\bcureabroadhealthsolutions\.com\b/g, 'cureabroad'],
];

const SYNONYMS: Record<string, string> = {
  js: 'javascript',
  ts: 'typescript',
  wp: 'wordpress',
  woo: 'woocommerce',
  next: 'nextjs',
  node: 'nodejs',
  css3: 'css',
  html5: 'html',
  front: 'frontend',
  ui: 'frontend',
  ux: 'design',
  job: 'work',
  hire: 'available',
  available: 'available',
  cv: 'resume',
  repo: 'github',
  source: 'github',
  codebase: 'github',
  store: 'ecommerce',
  shop: 'ecommerce',
  almari: 'almaripk',
  medical: 'healthcare',
  tourism: 'cureabroad',
};

const STOPWORDS = new Set([
  'a',
  'about',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'can',
  'do',
  'does',
  'for',
  'from',
  'has',
  'have',
  'he',
  'him',
  'his',
  'how',
  'i',
  'in',
  'is',
  'it',
  'its',
  'me',
  'my',
  'of',
  'on',
  'or',
  'our',
  'sameed',
  'so',
  'tell',
  'that',
  'the',
  'their',
  'there',
  'this',
  'to',
  'was',
  'we',
  'what',
  'where',
  'which',
  'who',
  'will',
  'with',
  'you',
  'your',
]);

function normalise(input: string): string {
  let s = input.toLowerCase();
  for (const [regex, replacement] of PHRASES) {
    s = s.replace(regex, replacement);
  }
  return s
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/[\s-]+/g, ' ')
    .trim();
}

function expand(token: string): string | null {
  const mapped = SYNONYMS[token] ?? token;
  if (mapped.length < 2 || STOPWORDS.has(mapped)) return null;
  return mapped;
}

function tokenise(input: string): string[] {
  const out = new Set<string>();
  for (const t of normalise(input).split(' ').filter(Boolean)) {
    const mapped = expand(t);
    if (mapped) out.add(mapped);
  }
  return [...out];
}

/** Build a de-duplicated keyword bag for a fact. */
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
/* Knowledge base, derived from data.ts                                */
/* ------------------------------------------------------------------ */

const MAILTO = { label: PROFILE.email, href: `mailto:${PROFILE.email}` };

function buildFacts(): Fact[] {
  const facts: Fact[] = [];

  facts.push({
    id: 'who',
    weight: 1.1,
    keywords: kw('who sameed chaudhary introduce yourself intro summary overview bio himself person'),
    answer: { text: BIO.join(' ') },
  });

  facts.push({
    id: 'available',
    weight: 1.3,
    keywords: kw('available hire hiring freelance open opportunities work roles fulltime contract start notice'),
    answer: {
      text: `Yes — ${PROFILE.availability.toLowerCase()}. He is open to both freelance client projects (including headless e-commerce builds, healthcare portals, AI automation, and web development) and full-time roles, usually replying within 24 hours.`,
      links: [MAILTO],
    },
  });

  facts.push({
    id: 'location',
    weight: 1.2,
    keywords: kw('location live lahore pakistan remote relocate timezone onsite hybrid'),
    answer: {
      text: `He is based in ${PROFILE.location}. He has worked on-site, hybrid and fully remote with clients internationally across the UK, US, and Pakistan.`,
    },
  });

  facts.push({
    id: 'contact',
    weight: 1.2,
    keywords: kw('email contact message linkedin github socials connect touch reach'),
    answer: {
      text: `The fastest way to reach him is email — ${PROFILE.email}. You can also connect on LinkedIn or view his work and repositories on GitHub.`,
      links: [
        MAILTO,
        { label: 'LinkedIn', href: PROFILE.socials.linkedin },
        { label: 'GitHub Profile', href: PROFILE.socials.github },
        { label: 'GitHub Repo (2026)', href: PROFILE.socials.githubRepo },
      ],
    },
  });

  facts.push({
    id: 'github',
    weight: 1.4,
    keywords: kw('github repo repository source code git open source sameed437 sameed-portfolio-2026'),
    answer: {
      text: `His GitHub profile is ${PROFILE.socials.github}. The complete open-source repository for this portfolio is hosted at ${PROFILE.socials.githubRepo}.`,
      links: [
        { label: 'GitHub Repository', href: PROFILE.socials.githubRepo },
        { label: 'GitHub Profile', href: PROFILE.socials.github },
      ],
    },
  });

  facts.push({
    id: 'almaripk',
    weight: 1.45,
    keywords: kw('almaripk almari store ecommerce headless woocommerce fashion client retail pakistan'),
    answer: {
      text: 'Almari PK (almaripk.com) is a full headless WooCommerce store prepared for a client. Sameed built the frontend in React and Next.js 14, backed by WooCommerce and WordPress REST/GraphQL APIs, featuring instant catalog search, sub-second page loads, a real-time cart drawer, and localized checkout.',
      links: [{ label: 'Visit almaripk.com', href: 'https://almaripk.com' }],
    },
  });

  facts.push({
    id: 'cureabroad',
    weight: 1.48,
    keywords: kw('cureabroad cure abroad health solutions medical tourism healthcare international patients hospitals doctor surgery treatment'),
    answer: {
      text: 'Cure Abroad Health Solutions (cureabroadhealthsolutions.com) is an international medical tourism platform engineered by Sameed. It coordinates cross-border patient treatment, second opinions, and accredited hospital care between the UK, Europe, and Asia. Sameed built the custom WordPress child theme, dual-funnel lead architecture (patients & hospital partners), WebP media optimization pipeline, and GDPR-compliant workflows.',
      links: [{ label: 'Visit cureabroadhealthsolutions.com', href: 'https://cureabroadhealthsolutions.com/' }],
    },
  });

  facts.push({
    id: 'stats',
    weight: 1.1,
    keywords: kw('experience long seniority level clients delivered numbers senior junior metrics'),
    answer: {
      text: `${list(STATS.map((s) => `${s.value} ${s.label.toLowerCase()}`))}. He has worked across ${EXPERIENCE.length} companies, currently as ${EXPERIENCE[0].role} at ${EXPERIENCE[0].company}.`,
    },
  });

  facts.push({
    id: 'titles',
    weight: 1.15,
    keywords: kw('title titles marketing ai engineer growth seo specialist developer what does do ecommerce'),
    answer: {
      text: `He works as a ${list(PROFILE.rotatingTitles)} — in practice that means engineering high-speed frontends (like headless WooCommerce stores), building AI marketing automations, and running data-driven growth experiments.`,
    },
  });

  facts.push({
    id: 'aiwork',
    weight: 1.35,
    keywords: kw('ai automation automate pipeline pipelines llm claude agent workflow workflows n8n marketing engineer'),
    answer: {
      text: 'His AI automation work spans custom Python pipelines and n8n workflows. BlogBolt is a Python pipeline with a Next.js control panel running a 7-phase SEO workflow with Claude (research, outline, draft, on-page SEO, image selection, formatting, publish) pushing drafts into WordPress. At Marham, he builds AI solutions with Claude and APIs including agent-based workflows alongside n8n automations.',
    },
  });

  for (const s of SERVICES) {
    facts.push({
      id: `service:${s.title}`,
      weight: 1.2,
      keywords: kw(s.title, s.items.join(' ')),
      answer: { text: `${s.title} — ${s.blurb}` },
    });
  }

  facts.push({
    id: 'services',
    weight: 1.2,
    keywords: kw('services offer offering help hire what do deliver'),
    answer: {
      text: SERVICES.map((x) => `${x.title}: ${x.blurb}`).join(' '),
    },
  });

  facts.push({
    id: 'skills',
    weight: 1.3,
    keywords: kw('skills stack tech technologies tools proficient good'),
    answer: {
      text: SKILL_GROUPS.map((g) => `${g.title}: ${list(g.items)}.`).join(' '),
    },
  });

  // Whole skill groups
  for (const group of SKILL_GROUPS) {
    facts.push({
      id: `skillgroup:${group.title}`,
      keywords: kw(group.title, group.items.join(' ')),
      answer: { text: `${group.title}: ${list(group.items)}.` },
    });
  }

  // One fact per individual technology, cross-referenced to real projects
  for (const group of SKILL_GROUPS) {
    for (const item of group.items) {
      const needle = normalise(item);
      const related = PROJECTS.filter((p) =>
        p.tags.some((t) => normalise(t).includes(needle))
      ).map((p) => p.title);

      facts.push({
        id: `skill:${item}`,
        weight: 1.25,
        keywords: kw(item),
        answer: {
          text:
            `Yes — ${item} is part of his ${group.title} toolkit.` +
            (related.length ? ` You can see it in ${list(related.slice(0, 3))}.` : ''),
        },
      });
    }
  }

  facts.push({
    id: 'seo',
    weight: 1.5,
    keywords: kw('seo search ranking rankings organic traffic keywords keyword onpage visibility ctr'),
    answer: {
      text:
        'SEO runs through all his web and content work. He conducts keyword research, search intent mapping, and on-page technical optimization — meta tags, internal linking, schema, URL structure — and refreshes existing content to lift organic rankings and CTR.',
    },
  });

  // Technologies that appear in project tags
  const skillTokens = SKILL_GROUPS.flatMap((g) =>
    g.items.map((i) => new Set(kw(i)))
  );
  const seenTags = new Set<string>();
  for (const p of PROJECTS) {
    for (const tag of p.tags) {
      const key = normalise(tag);
      if (seenTags.has(key)) continue;
      const tokens = kw(tag);
      if (skillTokens.some((set) => tokens.every((t) => set.has(t)))) continue;
      seenTags.add(key);
      const related = PROJECTS.filter((x) => x.tags.includes(tag)).map((x) => x.title);
      facts.push({
        id: `tag:${tag}`,
        weight: 1.18,
        keywords: kw(tag),
        answer: { text: `Yes — ${tag} is used in his work: ${list(related)}.` },
      });
    }
  }

  // One fact per project
  for (const p of PROJECTS) {
    facts.push({
      id: `project:${p.title}`,
      weight: 1.2,
      keywords: kw(p.title, p.tags.join(' '), p.badge ?? '', p.domain ?? ''),
      answer: {
        text: `${p.title} — ${p.description} Stack: ${list(p.tags)}.`,
        links: p.href ? [{ label: `Visit ${p.domain ?? p.title}`, href: p.href }] : undefined,
      },
    });
  }

  facts.push({
    id: 'projects',
    weight: 1.2,
    keywords: kw('projects showcase examples case studies samples portfolio work'),
    answer: {
      text: `He has ${PROJECTS.length} projects showcased with full interface snapshots, including Almari PK (headless WooCommerce store), Cure Abroad Health Solutions (medical tourism platform), BlogBolt (AI content automation), and Wonderlyf. Ask about any project for details!`,
    },
  });

  // One fact per role
  for (const job of EXPERIENCE) {
    facts.push({
      id: `job:${job.company}`,
      weight: 1.15,
      keywords: kw(job.company, job.role, job.location),
      answer: {
        text: `${job.role} at ${job.company} (${job.date}, ${job.location}). ${job.bullets
          .slice(0, 3)
          .join(' ')}`,
      },
    });
  }

  facts.push({
    id: 'experience',
    weight: 1.2,
    keywords: kw('experience employment previous past timeline'),
    answer: {
      text: `3+ years across ${EXPERIENCE.length} companies: ${list(
        EXPERIENCE.map((e) => `${e.role} at ${e.company} (${e.date})`)
      )}.`,
    },
  });

  facts.push({
    id: 'education',
    weight: 1.2,
    keywords: kw(
      'education qualification certification certificate academic graduated',
      EDUCATION.map((e) => `${e.title} ${e.org}`).join(' ')
    ),
    answer: {
      text: list(EDUCATION.map((e) => `${e.title} — ${e.org} (${e.detail})`)) + '.',
    },
  });

  facts.push({
    id: 'resume',
    keywords: kw('resume download pdf document cv'),
    answer: {
      text: 'Everything on this page represents his up-to-date experience. For a formal CV or custom client portfolio PDF, email him directly.',
      links: [MAILTO],
    },
  });

  for (const [i, f] of FAQS.entries()) {
    facts.push({ id: `faq:${i}`, keywords: kw(f.q), answer: { text: f.a } });
  }

  return facts;
}

const FACTS = buildFacts();

/* ------------------------------------------------------------------ */
/* Scoring                                                             */
/* ------------------------------------------------------------------ */

const EXACT = 3;
const PARTIAL = 1.25;
const THRESHOLD = 2.5;

function scoreFact(fact: Fact, tokens: string[]): number {
  let score = 0;
  for (const token of tokens) {
    let best = 0;
    for (const keyword of fact.keywords) {
      if (keyword === token) {
        best = EXACT;
        break;
      }
      if (token.length >= 4 && (keyword.startsWith(token) || token.startsWith(keyword))) {
        best = Math.max(best, PARTIAL);
      }
    }
    score += best;
  }
  return score * (fact.weight ?? 1);
}

const GREETING = /^(hi|hey|hello|yo|salam|assalam|good (morning|afternoon|evening))\b/i;
const THANKS = /\b(thanks|thank you|thankyou|cheers|appreciate)\b/i;

export const SUGGESTIONS = [
  'What is Cure Abroad Health Solutions (cureabroadhealthsolutions.com)?',
  'What is Almari PK (almaripk.com)?',
  'What is BlogBolt and how does it work?',
  'Where can I see his GitHub repository?',
  'Is he available for freelance client work?',
];

export const GREETING_MESSAGE = `Hi — ask me about ${PROFILE.firstName}'s work: Cure Abroad Health Solutions, headless e-commerce builds (like almaripk.com), AI marketing pipelines, or his GitHub repository.`;

export function ask(query: string): Answer {
  const trimmed = query.trim();
  if (!trimmed) return { text: GREETING_MESSAGE };

  if (GREETING.test(trimmed) && trimmed.length < 24) {
    return {
      text: `Hello. Ask me about ${PROFILE.firstName}'s projects (like Cure Abroad, Almari PK, or BlogBolt), his tech stack, GitHub repo, or availability.`,
    };
  }

  if (THANKS.test(trimmed) && trimmed.length < 32) {
    return {
      text: `Any time! If you want to reach him directly, ${PROFILE.email} is the fastest route.`,
      links: [MAILTO],
    };
  }

  const tokens = tokenise(trimmed);
  if (tokens.length === 0) {
    return { text: BIO.join(' ') };
  }

  const ranked = FACTS.map((f) => ({ fact: f, score: scoreFact(f, tokens) }))
    .filter((r) => r.score >= THRESHOLD)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) {
    return {
      text: `That isn't in his portfolio data, so I'd rather not guess. He can answer directly at ${PROFILE.email}. You could also ask about Cure Abroad, Almari PK, BlogBolt, his stack, or his GitHub repository.`,
      links: [MAILTO],
    };
  }

  const [top, second] = ranked;

  // Two near-equal matches — answer both rather than picking arbitrarily.
  if (second && second.score >= top.score * 0.95 && second.fact.id !== top.fact.id) {
    return {
      text: `${top.fact.answer.text}\n\n${second.fact.answer.text}`,
      links: top.fact.answer.links ?? second.fact.answer.links,
    };
  }

  return top.fact.answer;
}
