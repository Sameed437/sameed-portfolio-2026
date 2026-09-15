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
  jobs: 'work',
  role: 'work',
  roles: 'work',
  employer: 'work',
  company: 'work',
  companies: 'work',
  career: 'experience',
  background: 'experience',
  history: 'experience',
  portfolio: 'projects',
  project: 'projects',
  built: 'projects',
  build: 'projects',
  made: 'projects',
  hire: 'available',
  hiring: 'available',
  freelance: 'available',
  availability: 'available',
  contact: 'email',
  reach: 'email',
  mail: 'email',
  study: 'education',
  studied: 'education',
  degree: 'education',
  university: 'education',
  college: 'education',
  school: 'education',
  lives: 'location',
  based: 'location',
  skill: 'skills',
  stack: 'skills',
  tech: 'skills',
  technologies: 'skills',
  technology: 'skills',
  tools: 'skills',
  experienced: 'experience',
  years: 'experience',
  year: 'experience',
  cv: 'resume',
  marketing: 'marketing',
  ai: 'ai',
};

const STOPWORDS = new Set([
  'a', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'been', 'but', 'by', 'can',
  'did', 'do', 'does', 'for', 'from', 'get', 'got', 'has', 'have', 'he', 'her',
  'him', 'his', 'how', 'i', 'if', 'in', 'is', 'it', 'its', 'me', 'much', 'my',
  'of', 'on', 'or', 'she', 'so', 'some', 'tell', 'that', 'the', 'their', 'them',
  'then', 'there', 'these', 'they', 'this', 'to', 'us', 'was', 'we', 'were',
  'what', 'whats', 'which', 'will', 'with', 'would', 'you', 'your',
  'about', 'also', 'more', 'many', 'please', 'give', 'show', 'need', 'want',
  'use', 'uses', 'used', 'where', 'when', 'why', 'know', 'knows', 'familiar',
]);

function normalise(input: string): string {
  let s = input.toLowerCase();
  for (const [re, to] of PHRASES) s = s.replace(re, to);
  return s.replace(/[^a-z0-9+#\s]/g, ' ').replace(/\s+/g, ' ').trim();
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
      text: `Yes — ${PROFILE.availability.toLowerCase()}. He is open to both freelance projects and full-time roles, and usually replies within 24 hours.`,
      links: [MAILTO],
    },
  });

  facts.push({
    id: 'location',
    weight: 1.2,
    keywords: kw('location live lahore pakistan remote relocate timezone onsite hybrid'),
    answer: {
      text: `He is based in ${PROFILE.location}. He has worked on-site, hybrid and fully remote — the Kynbix and Intersoft roles were both remote.`,
    },
  });

  facts.push({
    id: 'contact',
    weight: 1.2,
    keywords: kw('email contact message linkedin github socials connect touch'),
    answer: {
      text: `The fastest way to reach him is email — ${PROFILE.email}. He is also on LinkedIn and GitHub.`,
      links: [
        MAILTO,
        { label: 'LinkedIn', href: PROFILE.socials.linkedin },
        { label: 'GitHub', href: PROFILE.socials.github },
      ],
    },
  });

  facts.push({
    id: 'stats',
    weight: 1.1,
    keywords: kw('experience long seniority level clients delivered numbers senior junior'),
    answer: {
      text: `${list(STATS.map((s) => `${s.value} ${s.label.toLowerCase()}`))}. He has worked across ${EXPERIENCE.length} companies, currently as ${EXPERIENCE[0].role} at ${EXPERIENCE[0].company}.`,
    },
  });

  facts.push({
    id: 'titles',
    weight: 1.15,
    keywords: kw('title titles marketing ai engineer growth seo specialist developer what does do'),
    answer: {
      text: `He works as a ${list(PROFILE.rotatingTitles)} — in practice that means building the site, then making it rank and convert. His current title is ${EXPERIENCE[0].role} at ${EXPERIENCE[0].company}.`,
    },
  });

  facts.push({
    id: 'aiwork',
    weight: 1.35,
    keywords: kw('ai automation automate pipeline pipelines llm claude agent workflow workflows n8n marketing engineer'),
    answer: {
      text: 'His core work is AI content automation. BlogBolt is a Python pipeline with a Next.js control panel that runs a 7-phase SEO content workflow with Claude — research, outline, draft, on-page SEO, image selection with auto alt-text, format, publish — and delivers the post into WordPress as a reviewable draft. At Marham he also builds AI solutions with Claude and external APIs — including agent-based workflows — alongside blog-automation workflows in n8n.',
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
        'SEO runs through most of his work. He does keyword research and on-page optimisation — meta tags, internal linking, URL structure, formatting — and refreshes existing content to lift rankings and CTR. At Marham he ships SEO-led content systems and built blog-automation workflows in n8n; BlogBolt automates a 7-phase SEO content pipeline end to end.',
    },
  });

  // Technologies that appear in project tags but not in the skills list —
  // Python, OpenCV, Claude and friends — still deserve a real answer.
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
        answer: { text: `Yes — ${tag} shows up in his work: ${list(related)}.` },
      });
    }
  }

  // One fact per project
  for (const p of PROJECTS) {
    facts.push({
      id: `project:${p.title}`,
      weight: 1.15,
      keywords: kw(p.title, p.tags.join(' '), p.badge ?? ''),
      answer: {
        text: `${p.title} — ${p.description} Stack: ${list(p.tags)}.`,
        links: p.href ? [{ label: 'Visit site', href: p.href }] : undefined,
      },
    });
  }

  facts.push({
    id: 'projects',
    weight: 1.2,
    keywords: kw('projects showcase examples case studies samples portfolio'),
    answer: {
      text: `He has ${PROJECTS.length} projects listed, including ${list(
        PROJECTS.slice(0, 3).map((p) => p.title)
      )}. Ask about any of them by name for the detail.`,
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
    keywords: kw('resume download pdf document'),
    answer: {
      text: 'Everything on this page is his up-to-date experience. For a formal CV, email him directly and he will send one over.',
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
  'What does an AI Marketing Engineer do?',
  'What is BlogBolt?',
  'What AI work does he do at Marham?',
  'Is he available for work?',
  'What is his experience?',
];

export const GREETING_MESSAGE = `Hi — ask me about ${PROFILE.firstName}'s AI automation work, his stack, or his experience. Everything I say comes straight from his portfolio data, so I won't guess.`;

export function ask(query: string): Answer {
  const trimmed = query.trim();
  if (!trimmed) return { text: GREETING_MESSAGE };

  if (GREETING.test(trimmed) && trimmed.length < 24) {
    return {
      text: `Hello. Ask me about ${PROFILE.firstName}'s experience, his stack, a specific project, or whether he is available.`,
    };
  }

  if (THANKS.test(trimmed) && trimmed.length < 32) {
    return {
      text: `Any time. If you want to reach him directly, ${PROFILE.email} is the fastest route.`,
      links: [MAILTO],
    };
  }

  const tokens = tokenise(trimmed);
  if (tokens.length === 0) {
    // Nothing substantive to match on — almost always "tell me about him".
    return { text: BIO.join(' ') };
  }

  const ranked = FACTS.map((f) => ({ fact: f, score: scoreFact(f, tokens) }))
    .filter((r) => r.score >= THRESHOLD)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) {
    return {
      text: `That isn't in his portfolio data, so I'd rather not guess. He can answer directly at ${PROFILE.email}. You could also ask me about his experience, stack, projects, or availability.`,
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
