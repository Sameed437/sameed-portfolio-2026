export const PROFILE = {
  name: 'Sameed Chaudhary',
  firstName: 'Sameed',
  lastName: 'Chaudhary',
  title: 'AI Marketing Engineer',
  tagline:
    'I build AI automation systems that research, write and publish marketing content at scale — then run the experiments that make it convert.',
  email: 'msameedch437@gmail.com',
  location: 'Lahore, Pakistan',
  socials: {
    linkedin: 'https://www.linkedin.com/in/sameed-chaudhary-740424278/',
    github: 'https://github.com/Sameed437',
    upwork: 'https://www.upwork.com/freelancers/',
  },
  availability: 'Available for opportunities',
  rotatingTitles: [
    'AI Marketing Engineer',
    'Automation Engineer',
    'Growth Engineer',
    'SEO Systems',
  ],
};

export const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '7', label: 'Phase AI Pipeline' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '40+', label: 'Clients Served' },
];

/** The four things he actually sells, in priority order. */
export const SERVICES = [
  {
    title: 'AI Content Automation',
    blurb:
      'End-to-end pipelines that take a topic and return a publish-ready post. Claude handles research, outlining, drafting, on-page SEO and image alt-text; n8n orchestrates it; WordPress receives the draft.',
    items: ['Claude AI', 'AI Agents', 'n8n', 'Python', 'WordPress API'],
  },
  {
    title: 'Growth Engineering',
    blurb:
      'UI experiments and A/B tests on the pages that matter, run with product and marketing to lift conversion and engagement rather than guesswork.',
    items: ['A/B Testing', 'UI Experimentation', 'Conversion Optimization'],
  },
  {
    title: 'SEO Systems',
    blurb:
      'Keyword research and search-intent strategy, full on-page execution — meta, internal linking, URL structure — plus systematic refreshes of existing content to recover rankings and CTR.',
    items: ['Keyword Research', 'On-Page SEO', 'Content Strategy'],
  },
  {
    title: 'Web Engineering',
    blurb:
      'The sites the automations publish into: Next.js and React front ends, headless and traditional WordPress, built fast and structured for search.',
    items: ['Next.js', 'React', 'WordPress', 'WooCommerce'],
  },
];

export const SKILL_GROUPS = [
  {
    title: 'AI & Automation',
    items: [
      'Claude AI',
      'AI Agents',
      'n8n',
      'Python',
      'API Integration',
      'Blog Automation',
      'Workflow Design',
      'REST APIs',
    ],
  },
  {
    title: 'Growth & Experimentation',
    items: ['A/B Testing', 'UI Experimentation', 'Conversion Optimization'],
  },
  {
    title: 'SEO',
    items: [
      'Keyword Research',
      'On-Page SEO',
      'Internal Linking',
      'Content Strategy',
      'Content Refreshes',
      'Website Performance',
    ],
  },
  {
    title: 'Web & CMS',
    items: [
      'Next.js',
      'React',
      'JavaScript',
      'Tailwind CSS',
      'WordPress',
      'PHP',
      'WooCommerce',
      'Elementor',
    ],
  },
];

/** Which generated UI mockup a project uses for its cover. */
export type ProjectArt =
  | 'dashboard'
  | 'healthcare'
  | 'commerce'
  | 'vision'
  | 'corporate'
  | 'ledger'
  | 'portfolio'
  | 'records'
  | 'school';

export type Project = {
  title: string;
  art: ProjectArt;
  /** Short line shown under the title in the work index. */
  kicker: string;
  description: string;
  tags: string[];
  href?: string;
  badge?: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'BlogBolt',
    art: 'dashboard',
    kicker: 'AI content automation engine · Python + Claude',
    description:
      'BlogBolt is an end-to-end AI content pipeline built in Python with a Next.js control panel. Picks a topic, runs a 7-phase SEO content workflow with Claude — research, outline, draft, on-page SEO, image selection with auto alt-text, format, publish — and pushes the finished post into WordPress as a draft, ready for editorial review.',
    tags: ['Python', 'Claude AI', 'Next.js', 'SEO Automation', 'WordPress API'],
    badge: 'Flagship',
  },
  {
    title: 'Cure Abroad Health Solutions',
    art: 'healthcare',
    kicker: 'Medical tourism platform · Live',
    description:
      'Live medical-tourism platform coordinating cross-border healthcare — international consultations, visa and travel guidance, accommodation, translation and post-treatment follow-up. Built in WordPress with a service-led IA spanning Our Model, Partnerships and For Patients, plus separate patient and partnership enquiry funnels.',
    tags: ['WordPress', 'Healthcare', 'SEO', 'Lead Generation', 'Web Design'],
    href: 'https://cureabroadhealthsolutions.com/',
    badge: 'Live',
  },
  {
    title: 'Wonderlyf',
    art: 'commerce',
    kicker: 'Headless e-commerce · Live',
    description:
      'Live client storefront at wonderlyf.co.uk — a fully animated React front end on a headless WooCommerce and WordPress backend. Product catalog, cart, checkout, payments and editorial content all driven through the WP REST and Store APIs.',
    tags: ['React', 'Headless WordPress', 'WooCommerce', 'E-commerce'],
    href: 'https://wonderlyf.co.uk',
    badge: 'Live',
  },
  {
    title: 'School Fee Management System',
    art: 'records',
    kicker: 'Full-stack system · Database-backed',
    description:
      'Fee management system built for a school, backed by a proper relational database. Covers the full fee lifecycle — student records, fee structures, payment collection and outstanding balances — behind an admin dashboard used for day-to-day fee operations and reporting.',
    tags: ['Full-Stack', 'Database', 'Admin Dashboard', 'School Management'],
  },
  {
    title: 'AI Attendance & Parental Control',
    art: 'vision',
    kicker: 'Computer vision · Final-year project',
    description:
      'AI-based facial recognition for automated attendance, paired with a parental control dashboard for monitoring and policy enforcement. Built in Python with OpenCV.',
    tags: ['Python', 'OpenCV', 'AI', 'Machine Learning'],
  },
  {
    title: 'Seattle City Accounting',
    art: 'corporate',
    kicker: 'Accounting firm · Live',
    description:
      'Live site for a Seattle virtual bookkeeping practice serving small businesses — bookkeeping and bank reconciliation, payroll, sales-tax returns, financial statements and fractional CFO services. Tiered service levels, a testimonials section, and a Book a Call consultation funnel, on a responsive layout with a fast load profile.',
    tags: ['WordPress', 'Elementor', 'Responsive Design', 'SEO'],
    href: 'https://www.seattlecityaccounting.com/',
    badge: 'Live',
  },
  {
    title: 'LA Accounting Pro',
    art: 'ledger',
    kicker: 'Lead generation · Live',
    description:
      'Live lead-generation site for a Los Angeles virtual accounting firm. Service-led IA covering bookkeeping, accounts payable and receivable, payroll, tax preparation, year-end cleanup and fractional CFO work — with free-consultation, Schedule Now and Call Now CTAs threaded through the page, and testimonials carrying the social proof.',
    tags: ['WordPress', 'Elementor', 'Lead Generation', 'Web Design'],
    href: 'https://laaccountingpro.com/',
    badge: 'Live',
  },
  {
    title: 'Golden Gate Accounting',
    art: 'corporate',
    kicker: 'Business site · WordPress',
    description:
      'Business website with a clean editorial layout, optimized images, and strong Lighthouse performance.',
    tags: ['WordPress', 'Elementor'],
  },
  {
    title: 'Personal React Portfolio',
    art: 'portfolio',
    kicker: 'Front end · React',
    description:
      'An earlier portfolio iteration built in React with modern animations, a project showcase, and a skill matrix.',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Azhar Foundation School',
    art: 'school',
    kicker: 'School site · Live',
    description:
      'Live React site for Azhar Foundation School — “Excellence in Education Since 2001”. Built as a fast, clean single-page front end and deployed on Vercel, focused on presenting the school clearly to prospective families.',
    tags: ['React', 'JavaScript', 'Frontend', 'Vercel'],
    href: 'https://azhar-foundation-school.vercel.app/',
    badge: 'Live',
  },
];

export type Experience = {
  company: string;
  role: string;
  date: string;
  location: string;
  blurb?: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'Marham',
    role: 'SEO Content Specialist & Growth Engineer',
    date: 'Dec 2025 – Present',
    location: 'Lahore, On-site',
    blurb:
      'Working at the intersection of AI automation, SEO and product growth — building AI solutions with Claude and APIs, the systems that produce content, and the experiments that make it convert.',
    bullets: [
      'Build AI solutions using Claude and external APIs, including agent-based workflows, to automate marketing and content operations.',
      'Built blog-automation workflows in n8n to streamline publishing and improve operational efficiency.',
      'Run UI experiments and A/B tests on key product pages to lift conversion and engagement.',
      'Partner with product and marketing to identify, prioritize and ship data-driven UI improvements.',
      'Create and optimize SEO-focused healthcare content to drive organic traffic and search visibility.',
      'Manage and publish WordPress blogs with full on-page SEO — meta tags, internal linking, URL structure, formatting.',
      'Conduct keyword research and develop content strategies aligned with search intent and acquisition.',
      'Optimize and refresh existing content to improve rankings, CTR and organic reach.',
    ],
  },
  {
    company: 'Rocket Bookkeeper',
    role: 'WordPress Developer',
    date: 'Oct 2025 – Jan 2026',
    location: 'On-site',
    bullets: [
      'Developed and customized WordPress themes, templates and page layouts.',
      'Built new landing pages and improved existing site structure for better UX.',
      'Optimized website performance, speed and mobile responsiveness.',
      'Integrated lead forms, CRM tools and third-party plugins.',
      'Implemented SEO best practices and on-page enhancements.',
    ],
  },
  {
    company: 'Kynbix',
    role: 'Junior WordPress Developer',
    date: 'Feb 2025 – Nov 2025',
    location: 'Lahore, Remote',
    blurb: 'Also WordPress & UI/UX Intern — Dec 2024 to Feb 2025.',
    bullets: [
      'Developed and maintained WordPress sites with custom themes, plugins and Elementor.',
      'Optimized speed, SEO and responsive design for better UX and rankings.',
      'Implemented WooCommerce — product pages, checkout flows and payment gateways.',
      'Handled PHP, CSS, HTML and JavaScript customizations for client-specific requirements.',
      'Ensured website security, performance and cross-browser compatibility.',
    ],
  },
  {
    company: 'Intersoft',
    role: 'Research Analyst',
    date: 'Feb 2024 – Feb 2025',
    location: 'Lahore, Remote',
    bullets: [
      'Managed freelance IT projects: WordPress customization, AWS deployment, SQL database management.',
      'Collaborated with clients on technical assignments with timely, tailored solutions.',
      'Produced clear technical documentation and assisted with project tracking.',
    ],
  },
  {
    company: 'ESolBiz™',
    role: 'WordPress Intern',
    date: 'Sep 2024 – Dec 2024',
    location: 'Lahore, On-site',
    bullets: [
      'Hands-on WordPress development experience.',
      'Worked on PSD-to-WordPress conversions.',
      'Learned core concepts of WordPress design and theme structure.',
    ],
  },
];

export const EDUCATION = [
  {
    title: 'BS Computer Science',
    org: 'University of Central Punjab',
    detail: 'Graduated',
  },
  {
    title: 'Web Development Certification',
    org: 'Professional Certificate',
    detail: 'Modern web stack & best practices',
  },
  {
    title: 'Graphic Design Certification',
    org: 'Professional Certificate',
    detail: 'Visual design fundamentals',
  },
];

export const NAV_LINKS = [
  { href: '#services', label: 'What I Do' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

/*
 * Plain-text knowledge used by the on-site assistant.
 * Everything the assistant can say is derived from this file, so it can
 * quote real facts and never invent anything.
 */
export const BIO: string[] = [
  'Sameed Chaudhary is an AI Marketing Engineer based in Lahore, Pakistan. He builds AI automation systems that produce and publish marketing content at scale, and runs the growth experiments that make that content convert.',
  'His flagship project is BlogBolt — a Python pipeline with a Next.js control panel that runs a 7-phase SEO content workflow with Claude and publishes straight into WordPress. He has also built a database-backed school fee management system.',
  'He is currently SEO Content Specialist & Growth Engineer at Marham, where he builds AI solutions with Claude and APIs including agent-based workflows, builds n8n automations, runs UI experiments and A/B tests, and ships SEO-led content systems. He has 3+ years of experience and a web engineering background in Next.js, React and WordPress.',
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'What does an AI Marketing Engineer do?',
    a: 'In his case: build the automation that produces marketing content — AI pipelines for research, drafting and on-page SEO, orchestrated in n8n — then run A/B tests and UI experiments on the pages that content lands on. It is marketing outcomes delivered through engineering rather than manual effort.',
  },
  {
    q: 'Is he available for work?',
    a: 'Yes — he is open to both freelance projects and full-time roles, and usually replies within 24 hours. The fastest route is email: ' + PROFILE.email + '.',
  },
  {
    q: 'Where is he based?',
    a: 'Lahore, Pakistan. He has worked on-site, hybrid and fully remote — the Kynbix and Intersoft roles were both remote.',
  },
  {
    q: 'How much experience does he have?',
    a: '3+ years of professional experience across five companies, with 20+ projects delivered for 40+ clients.',
  },
];
