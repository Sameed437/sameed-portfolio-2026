export const PROFILE = {
  name: 'Sameed Chaudhary',
  firstName: 'Sameed',
  lastName: 'Chaudhary',
  title: 'AI Automation Specialist',
  tagline:
    'I build end-to-end AI automation systems and autonomous agent workflows that eliminate manual work — paired with high-performance web platforms and headless e-commerce stores that convert.',
  email: 'msameedch437@gmail.com',
  location: 'Lahore, Pakistan',
  socials: {
    website: 'https://sameed.work',
    linkedin: 'https://www.linkedin.com/in/sameed-chaudhary',
    github: 'https://github.com/Sameed437',
    githubRepo: 'https://github.com/Sameed437/sameed-portfolio-2026',
    upwork: 'https://www.upwork.com/freelancers/',
  },
  availability: 'Available for opportunities',
  rotatingTitles: [
    'AI Automation Specialist',
    'AI Systems Engineer',
    'Automation Specialist',
    'AI Workflow Architect',
    'Headless E-Commerce Dev',
    'Full-Stack Web Engineer',
  ],
};

export const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: '50+', label: 'Automations Built' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '40+', label: 'Clients Served' },
];

/** The four core areas Sameed delivers, in priority order. */
export const SERVICES = [
  {
    title: 'AI Automation & Autonomous Systems',
    blurb:
      'End-to-end intelligent automation pipelines and autonomous agent systems. Custom workflows engineered with n8n, Claude API, Make, Zapier, and Python — including automated webhook integrations, CRM syncs, and intelligent chatbots that eliminate manual bottlenecks.',
    items: ['n8n', 'Claude API', 'Claude Code', 'AI Agents', 'Make / Zapier', 'Chatbot Development', 'Webhook Integrations'],
  },
  {
    title: 'AI Content & Marketing Pipelines',
    blurb:
      'Autonomous multi-stage content engines (like BlogBolt). Claude handles deep SERP research, structured outlines, full drafts, on-page SEO schema, and image alt-text; n8n orchestrates the pipeline, publishing directly into WordPress and CMS backends.',
    items: ['Autonomous Pipelines', 'Claude API', 'WordPress REST API', 'n8n', 'On-Page SEO', 'Python'],
  },
  {
    title: 'Headless E-Commerce Engineering',
    blurb:
      'High-performance client stores: Next.js and React front ends on headless WooCommerce and WordPress backends (such as almaripk.com and wonderlyf.co.uk). Built for speed, instant filtering, dynamic carts, and seamless checkout flows.',
    items: ['Next.js 14', 'React', 'Headless WooCommerce', 'WordPress REST / GraphQL', 'Tailwind CSS'],
  },
  {
    title: 'Growth Engineering & SEO Systems',
    blurb:
      'Data-driven search intent strategy, technical on-page execution, GA4/GSC funnel tracking, and structured A/B UI experimentation on high-impact conversion pages to systematically grow organic reach and revenue.',
    items: ['Technical SEO', 'GA4 & GSC', 'Semrush', 'Conversion Optimization', 'A/B Testing'],
  },
];

export const SKILL_GROUPS = [
  {
    title: 'AI & Automation',
    items: [
      'n8n',
      'Claude API',
      'Claude Code',
      'Make',
      'Zapier',
      'Chatbot Development',
      'Webhook Integrations',
      'AI Agents',
      'Python',
    ],
  },
  {
    title: 'Web & Headless E-Commerce',
    items: [
      'Next.js 14',
      'React',
      'Headless WooCommerce',
      'WordPress REST API',
      'GraphQL',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PHP',
    ],
  },
  {
    title: 'SEO & Analytics',
    items: [
      'Technical & On-Page SEO',
      'Content Strategy',
      'GA4',
      'Google Search Console',
      'Semrush',
      'Conversion Tracking',
      'Funnels & A/B Testing',
    ],
  },
  {
    title: 'Infrastructure & Cloud',
    items: [
      'Oracle Cloud',
      'AWS Deployment',
      'REST APIs',
      'Git & GitHub',
    ],
  },
];

/** Which generated UI mockup or fallback a project uses. */
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

export type ProjectCategory = 'all' | 'ecommerce' | 'automation' | 'client' | 'fullstack';

export type Project = {
  title: string;
  art: ProjectArt;
  /** High-resolution visual snapshot image of the project interface */
  snapshot: string;
  category: ProjectCategory;
  domain?: string;
  /** Short line shown under the title in the work index. */
  kicker: string;
  description: string;
  tags: string[];
  href?: string;
  badge?: string;
  highlights?: string[];
};

export const PROJECTS: Project[] = [
  {
    title: 'Almari PK',
    art: 'commerce',
    snapshot: '/projects/almaripk.svg',
    category: 'ecommerce',
    domain: 'almaripk.com',
    kicker: 'Headless WooCommerce Store · React / Next.js',
    description:
      'Full headless e-commerce store prepared for a client at almaripk.com. Features a lightning-fast React / Next.js 14 frontend backed by a headless WooCommerce and WordPress REST/GraphQL API. Built with instant server-rendered catalog listings, dynamic faceted filtering, real-time cart state management with optimistic UI, integrated Pakistani & international payment gateways, and sub-second page transitions.',
    tags: [
      'Next.js 14',
      'React',
      'Headless WooCommerce',
      'WordPress API',
      'Tailwind CSS',
      'E-commerce',
    ],
    href: 'https://almaripk.com',
    badge: 'Client Store',
    highlights: [
      'Headless architecture: Next.js frontend with WooCommerce REST / GraphQL backend',
      'Sub-50ms instant client-side page navigation with Next.js ISR',
      'Real-time slide-out cart drawer with optimistic state updates',
      'Multi-currency and localized payment gateway integration (Cards, EasyPaisa, JazzCash)',
    ],
  },
  {
    title: 'Cure Abroad Health Solutions',
    art: 'healthcare',
    snapshot: '/projects/cureabroad-live.webp',
    category: 'client',
    domain: 'cureabroadhealthsolutions.com',
    kicker: 'Cross-Border Healthcare Platform · Live Client',
    description:
      'Live international healthcare facilitation platform at cureabroadhealthsolutions.com coordinating medical travel, surgical consultations, second opinions, and accredited hospital care between the UK, Europe, and Asia. Built on WordPress with a custom child theme, featuring a dual-funnel architecture for patient treatment quotes and institutional hospital partnerships, complete UK/EU GDPR compliance, and an ultra-lean WebP media pipeline.',
    tags: [
      'WordPress',
      'Custom Child Theme',
      'Healthcare Facilitation',
      'Elementor',
      'Fluent Forms',
      'SEO Schema',
      'LiteSpeed',
      'Lead Funnels',
    ],
    href: 'https://cureabroadhealthsolutions.com/',
    badge: 'Live Platform',
    highlights: [
      'Dual-funnel conversion architecture: dedicated pathways for Patient Quotes and Hospital Partnership Agreements',
      'Custom child theme engineering (cureabroad-child): container CSS decoupled from Elementor for brand governance',
      'Ultra-optimized WebP asset pipeline: complete landing page imagery compressed to ≈360 KB, delivering sub-second LCP',
      'UK/EU GDPR & Medical Compliance: non-emergency healthcare facilitation disclosures and consent-managed data handling',
      'Full DNS & SMTP infrastructure: SPF, DKIM, DMARC, and PrivateEmail integration for automated office notifications and sender receipts',
    ],
  },
  {
    title: 'BlogBolt',
    art: 'dashboard',
    snapshot: '/projects/blogbolt.png',
    category: 'automation',
    domain: 'blogbolt.io',
    kicker: 'AI content automation engine · Python + Claude',
    description:
      'End-to-end AI content pipeline built in Python with a Next.js control panel. Picks a topic, runs a 7-phase SEO content workflow with Claude — research, outline, draft, on-page SEO, image selection with auto alt-text, format, publish — and pushes the finished post into WordPress as a draft, ready for editorial review.',
    tags: ['Python', 'Claude AI', 'Next.js', 'SEO Automation', 'WordPress API', 'n8n'],
    badge: 'Flagship AI',
    highlights: [
      '7-phase autonomous pipeline from keyword to publishable draft',
      'Automated semantic SEO, structured headers, and internal link suggestions',
      'Direct headless WordPress draft publishing via REST API',
    ],
  },
  {
    title: 'Wonderlyf',
    art: 'commerce',
    snapshot: '/projects/wonderlyf-live.webp',
    category: 'ecommerce',
    domain: 'wonderlyf.co.uk',
    kicker: 'Headless e-commerce storefront · Live UK Client',
    description:
      'Live client storefront at wonderlyf.co.uk — a fully animated React front end on a headless WooCommerce and WordPress backend. Product catalog, cart, checkout, payments and editorial content all driven through the WP REST and Store APIs for UK wellness consumers.',
    tags: ['React', 'Headless WordPress', 'WooCommerce', 'E-commerce', 'Tailwind CSS'],
    href: 'https://wonderlyf.co.uk',
    badge: 'Live Store',
    highlights: [
      'Bespoke React storefront decoupled from WooCommerce backend',
      'Sub-second catalog browsing and instant cart interactions',
      'Integrated Stripe & PayPal UK payment processing',
    ],
  },
  {
    title: 'Azhar Foundation School',
    art: 'school',
    snapshot: '/projects/azhar-school-live.webp',
    category: 'client',
    domain: 'azhar-foundation-school.vercel.app',
    kicker: 'School portal · Live React on Vercel',
    description:
      'Live React site for Azhar Foundation School — “Excellence in Education Since 2001”. Built as a fast, clean single-page front end and deployed on Vercel, focused on presenting academic programmes and admission workflows clearly to prospective families.',
    tags: ['React', 'JavaScript', 'Frontend', 'Vercel', 'Responsive'],
    href: 'https://azhar-foundation-school.vercel.app/',
    badge: 'Live',
    highlights: [
      'Lightning-fast single-page React app deployed on Vercel Edge',
      'Interactive academic calendar and admission application funnel',
      'Fully responsive mobile-first typography and layout',
    ],
  },
  {
    title: 'School Fee Management System',
    art: 'records',
    snapshot: '/projects/fee-system.svg',
    category: 'fullstack',
    domain: 'portal.edufee.internal',
    kicker: 'Full-stack system · Database-backed',
    description:
      'Fee management system built for an educational institution, backed by a relational database. Covers the full fee lifecycle — student records, fee structures, payment collection, fee vouchers, and outstanding balances — behind an admin dashboard used for day-to-day operations and reporting.',
    tags: ['Full-Stack', 'Relational DB', 'Admin Dashboard', 'School Management', 'PHP'],
    badge: 'Full-Stack',
    highlights: [
      'Relational database architecture for student ledgers and vouchers',
      'Automated late fee calculations and receipt generation',
      'Real-time collection analytics with class-by-class filters',
    ],
  },
  {
    title: 'AI Attendance & Parental Control',
    art: 'vision',
    snapshot: '/projects/ai-attendance.svg',
    category: 'automation',
    domain: 'visionattend.ai',
    kicker: 'Computer vision · Final-year project',
    description:
      'AI-based facial recognition for automated attendance, paired with a parental control dashboard for monitoring and policy enforcement. Built in Python with OpenCV and deep learning face embeddings.',
    tags: ['Python', 'OpenCV', 'AI', 'Machine Learning', 'Twilio API'],
    badge: 'Computer Vision',
    highlights: [
      'Sub-30ms real-time facial recognition inference on live video feeds',
      'Automated SMS & push notifications dispatched to parents on gate check-in',
      'Secure analytics dashboard for administrative oversight',
    ],
  },
  {
    title: 'Seattle City Accounting',
    art: 'corporate',
    snapshot: '/projects/seattle-accounting-live.webp',
    category: 'client',
    domain: 'seattlecityaccounting.com',
    kicker: 'Accounting firm · Live',
    description:
      'Live site for a Seattle virtual bookkeeping practice serving small businesses — bookkeeping and bank reconciliation, payroll, sales-tax returns, financial statements and fractional CFO services. Tiered service levels, a testimonials section, and a Book a Call consultation funnel.',
    tags: ['WordPress', 'Elementor', 'Responsive Design', 'SEO', 'Lead Gen'],
    href: 'https://www.seattlecityaccounting.com/',
    badge: 'Live Client',
    highlights: [
      'Integrated consultation booking engine with calendar sync',
      'Mobile-first responsive layouts with sub-second page loads',
      'Full local SEO configuration targeting Pacific Northwest businesses',
    ],
  },
  {
    title: 'LA Accounting Pro',
    art: 'ledger',
    snapshot: '/projects/la-accounting-live.webp',
    category: 'client',
    domain: 'laaccountingpro.com',
    kicker: 'Lead generation · Live',
    description:
      'Live lead-generation site for a Los Angeles virtual accounting firm. Service-led IA covering bookkeeping, accounts payable and receivable, payroll, tax preparation, year-end cleanup and fractional CFO work — with Schedule Now and Call Now CTAs threaded throughout.',
    tags: ['WordPress', 'Elementor', 'Lead Generation', 'Web Design', 'Conversion UI'],
    href: 'https://laaccountingpro.com/',
    badge: 'Live Client',
    highlights: [
      'High-converting lead capture funnels optimized via A/B testing',
      'Social proof and testimonial integration driving client conversions',
      'Customized WordPress architecture with zero code bloat',
    ],
  },
  {
    title: 'Golden Gate Accounting',
    art: 'corporate',
    snapshot: '/projects/golden-gate.svg',
    category: 'client',
    domain: 'goldengateaccounting.com',
    kicker: 'Business site · WordPress',
    description:
      'Corporate accounting and advisory firm website featuring a clean editorial layout, optimized image delivery, and 100/100 Lighthouse performance metrics.',
    tags: ['WordPress', 'Elementor', 'Performance', 'SEO'],
    highlights: [
      'Flawless Lighthouse 100 performance score on mobile and desktop',
      'Modular practice area showcases with structured schema markup',
    ],
  },
  {
    title: 'Personal React Portfolio',
    art: 'portfolio',
    snapshot: '/projects/react-portfolio.svg',
    category: 'fullstack',
    domain: 'sameed437.github.io',
    kicker: 'Front end · React & TypeScript',
    description:
      'Interactive developer portfolio built with React, showcasing modern animations, a dynamic project filter showcase, and an interactive skills matrix.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    href: 'https://github.com/Sameed437/sameed-portfolio-2026',
    badge: 'Open Source',
    highlights: [
      'Component-driven architecture with buttery smooth transitions',
      'Full GitHub repository open-sourced and connected',
    ],
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
    company: '360 Signum',
    role: 'AI Automation Specialist',
    date: 'Nov 2026 – Present',
    location: 'Remote · Full-time',
    blurb:
      'Leading AI automation architecture and workflow engineering — designing intelligent agent systems, API pipelines, and autonomous business processes.',
    bullets: [
      'Design and deploy production-grade AI automation pipelines and multi-step agent workflows using n8n, Claude API, Make, and Zapier.',
      'Build custom webhook integrations and REST API connectors linking web apps, CRMs, databases, and AI models.',
      'Develop intelligent chatbots and automated communication pipelines to eliminate manual support and operational overhead.',
      'Engineer autonomous data extraction, processing, and reporting systems to replace repetitive manual operations.',
      'Collaborate remotely with cross-functional teams to identify automation opportunities and implement scalable AI solutions.',
    ],
  },
  {
    company: 'Marham',
    role: 'Digital Growth Specialist (SEO Content Writer)',
    date: 'Dec 2025 – Nov 2026',
    location: 'Lahore / Remote',
    blurb:
      'Built and ran the in-house AI content platform at Pakistan’s largest healthcare platform, while owning organic SEO strategy and growth experiments.',
    bullets: [
      'Grew organic traffic 70% in 3 months on a targeted segment and started conversions from that segment.',
      'Built an AI content platform (Python, Next.js, Oracle Cloud) that researches, optimises and publishes a blog post in about 2 minutes. Live in production and self-serve for the team, with GSC, GA4 and Semrush connected.',
      'Built an n8n + Claude API + WordPress REST API content pipeline in production, saving 20+ hours per week.',
      'Owned organic SEO strategy, set up GA4 and GSC tracking and internal dashboards, and shipped an automated WhatsApp chatbot.',
      'Built and marketed Marham Labs, a new preventive-health segment: researched and prioritised problems using search demand, platform data, competitor research, and user/doctor interviews, then launched through SEO and performance marketing.',
      'Worked in a cross-functional Scrum squad shipping rapid UI experiments and A/B tests on key product funnels.',
    ],
  },
  {
    company: 'Animaker Media',
    role: 'Senior Marketing Expert (Contract)',
    date: 'Jun 2026 – Aug 2026',
    location: 'Remote · Contract',
    bullets: [
      'Delivered SEO and WordPress site work across multiple projects on a contract basis.',
      'Managed several projects in parallel alongside a full-time role.',
      'Enhanced site architecture, on-page technical SEO, and conversion funnels.',
    ],
  },
  {
    company: 'Rocket Bookkeeper',
    role: 'WordPress Developer',
    date: 'Oct 2025 – Dec 2025',
    location: 'Lahore · On-site',
    bullets: [
      'Built the company website and handled technical and on-page SEO, page speed fixes, migrations, hosting and deployments.',
      'Engineered custom WordPress page layouts, lead-generation consultation funnels, and CRM form integrations.',
    ],
  },
  {
    company: 'Kynbix',
    role: 'Junior WordPress Developer',
    date: 'Feb 2025 – Nov 2025',
    location: 'Lahore / Remote',
    blurb: 'Also WordPress & UI/UX Intern (2024 – 2025).',
    bullets: [
      'Converted Figma, XD and PSD designs into WordPress themes, built Elementor sites and WooCommerce stores, customised plugins and maintained live sites.',
      'Optimized site speed, mobile responsiveness, and technical SEO structure.',
    ],
  },
  {
    company: 'Internsoft',
    role: 'Research Analyst (Freelance)',
    date: 'Feb 2024 – Jun 2024',
    location: 'Remote',
    bullets: [
      'Delivered freelance client technical solutions: WordPress customisation, AWS deployment, and SQL database management.',
      'Collaborated directly with clients on technical assignments with timely, tailored solutions and documentation.',
    ],
  },
];

export const EDUCATION = [
  {
    title: 'B.Sc. Computer Science',
    org: 'University of the Central Punjab, Lahore',
    detail: '2021 – 2025 · Final year project: AI-based attendance system with parental control (React.js, AI)',
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
  { href: '/studio', label: 'AI Studio' },
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
  'Sameed Chaudhary is an AI Automation Specialist and Full-Stack Web Engineer based in Lahore, Pakistan. He builds end-to-end AI automation systems, autonomous agent workflows with Claude and n8n, and engineers full headless WooCommerce e-commerce stores with React & Next.js frontend architectures.',
  'He currently works full-time as an AI Automation Specialist at 360 Signum (Remote), engineering production-grade automation workflows, intelligent agent systems, and webhook integrations.',
  'Previously at Marham (Dec 2025 – Nov 2026), Pakistan’s largest healthcare platform, he built an in-house AI content platform in Python, Next.js, and Oracle Cloud, built an n8n + Claude API content pipeline saving 20+ hours per week, shipped a WhatsApp chatbot, and drove 70% organic traffic growth on a targeted segment within 3 months.',
  'His flagship projects include Almari PK (almaripk.com — a full headless WooCommerce store with a Next.js / React frontend prepared for a client), Cure Abroad Health Solutions (cureabroadhealthsolutions.com — an international medical tourism platform with custom child theme and dual-funnel architecture), and BlogBolt (a Python pipeline with a Next.js control panel that runs a 7-phase SEO content workflow with Claude and publishes straight into WordPress).',
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'What does Sameed do as an AI Automation Specialist?',
    a: 'As an AI Automation Specialist, Sameed designs and deploys autonomous AI workflows, multi-agent systems, and API pipelines using n8n, Claude API, Make, Zapier, and Python. He connects CRMs, web apps, and databases through automated webhook integrations and builds intelligent chatbots to eliminate manual operational bottlenecks.',
  },
  {
    q: 'What is his current role at 360 Signum?',
    a: 'Sameed works full-time as an AI Automation Specialist at 360 Signum in a remote capacity. He leads AI automation architecture, developing multi-step agent workflows, CRM and webhook integrations, and automated data pipelines.',
  },
  {
    q: 'What did he accomplish at Marham?',
    a: 'At Marham (Dec 2025 – Nov 2026), Sameed built an in-house AI content platform (Python, Next.js, Oracle Cloud) that researches, optimizes, and publishes blog posts in ~2 minutes with GSC, GA4, and Semrush connected. He also built an n8n + Claude API pipeline saving 20+ hours per week, shipped a WhatsApp chatbot, owned organic SEO strategy, and grew organic traffic 70% in 3 months.',
  },
  {
    q: 'What is Cure Abroad Health Solutions (cureabroadhealthsolutions.com)?',
    a: 'Cure Abroad Health Solutions (cureabroadhealthsolutions.com) is a live medical tourism platform engineered by Sameed. It connects international patients in the UK and Europe with accredited hospital networks in Asia for cardiac surgery, robotic joint replacement, precision oncology, and IVF. Sameed developed the custom WordPress child theme, dual-funnel lead architecture, WebP optimization pipeline, and SMTP deliverability setup.',
  },
  {
    q: 'What is Almari PK (almaripk.com)?',
    a: 'Almari PK (almaripk.com) is a full headless WooCommerce store prepared for a client. Sameed built it using a high-performance React / Next.js 14 frontend integrated with a headless WooCommerce & WordPress API backend, featuring instant faceted filtering, real-time cart state management, and optimized checkout flows.',
  },
  {
    q: 'Where can I find his GitHub and open-source code?',
    a: 'You can find his GitHub profile at ' + PROFILE.socials.github + ' and the source repository for this portfolio at ' + PROFILE.socials.githubRepo + '.',
  },
  {
    q: 'Is he available for work?',
    a: 'Yes — in addition to his role at 360 Signum, he is open to high-impact freelance projects (including AI automation pipelines, n8n workflows, headless e-commerce builds, and web engineering). The fastest route is email: ' + PROFILE.email + '.',
  },
  {
    q: 'Where is he based?',
    a: 'Lahore, Pakistan. He works remotely with global teams and clients across the UK, US, and Pakistan.',
  },
  {
    q: 'How much experience does he have?',
    a: '4+ years of professional experience across six companies/contracts, with 25+ projects delivered for 40+ clients.',
  },
];
