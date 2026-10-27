export const PROFILE = {
  name: 'Sameed Chaudhary',
  firstName: 'Sameed',
  lastName: 'Chaudhary',
  title: 'AI Marketing & Web Engineer',
  tagline:
    'I build AI automation systems that research, write and publish marketing content at scale — and engineer full headless e-commerce stores with Next.js & WooCommerce that convert.',
  email: 'msameedch437@gmail.com',
  location: 'Lahore, Pakistan',
  socials: {
    linkedin: 'https://www.linkedin.com/in/sameed-chaudhary-740424278/',
    github: 'https://github.com/Sameed437',
    githubRepo: 'https://github.com/Sameed437/sameed-portfolio-2026',
    upwork: 'https://www.upwork.com/freelancers/',
  },
  availability: 'Available for opportunities',
  rotatingTitles: [
    'AI Marketing Engineer',
    'Headless E-Commerce Dev',
    'Full-Stack Web Engineer',
    'Automation Engineer',
    'Growth Engineer',
    'SEO Systems',
  ],
};

export const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '7', label: 'Phase AI Pipeline' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '40+', label: 'Clients Served' },
];

/** The four core areas Sameed delivers, in priority order. */
export const SERVICES = [
  {
    title: 'Headless E-Commerce Engineering',
    blurb:
      'High-performance client stores: Next.js and React front ends on headless WooCommerce and WordPress backends (such as almaripk.com and wonderlyf.co.uk). Built for speed, instant filtering, dynamic carts, and seamless checkout flows.',
    items: ['Next.js 14', 'React', 'Headless WooCommerce', 'WordPress REST / GraphQL', 'Tailwind CSS'],
  },
  {
    title: 'AI Content Automation',
    blurb:
      'End-to-end pipelines that take a topic and return a publish-ready post. Claude handles research, outlining, drafting, on-page SEO and image alt-text; n8n orchestrates it; WordPress receives the draft.',
    items: ['Claude AI', 'AI Agents', 'n8n', 'Python', 'WordPress API'],
  },
  {
    title: 'Growth Engineering',
    blurb:
      'UI experiments and A/B tests on high-impact pages, run with product and marketing teams to lift conversion, engagement, and retention rather than guesswork.',
    items: ['A/B Testing', 'UI Experimentation', 'Conversion Optimization', 'Funnel Analytics'],
  },
  {
    title: 'SEO Systems & Web Architecture',
    blurb:
      'Keyword research, search-intent strategy, full on-page execution — meta, internal linking, URL structure — plus systematic refreshes of existing content to compound rankings and organic CTR.',
    items: ['Keyword Research', 'On-Page SEO', 'Content Strategy', 'Site Performance'],
  },
];

export const SKILL_GROUPS = [
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
      'JavaScript',
      'PHP',
    ],
  },
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
      'OpenCV',
    ],
  },
  {
    title: 'Growth & Experimentation',
    items: [
      'A/B Testing',
      'UI Experimentation',
      'Conversion Optimization',
      'Analytics & Funnels',
      'User Flow Design',
    ],
  },
  {
    title: 'SEO & Performance',
    items: [
      'Keyword Research',
      'On-Page SEO',
      'Internal Linking',
      'Content Strategy',
      'Content Refreshes',
      'Core Web Vitals',
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
    snapshot: '/projects/cureabroad.svg',
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
    snapshot: '/projects/wonderlyf.png',
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
    snapshot: '/projects/azhar-school.jpg',
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
    snapshot: '/projects/seattle-accounting.svg',
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
    snapshot: '/projects/la-accounting.svg',
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
    company: 'Marham',
    role: 'SEO Content Specialist & Growth Engineer',
    date: 'Dec 2025 – Present',
    location: 'Lahore, On-site',
    blurb:
      'Working at the intersection of AI automation, SEO, and product growth — building AI solutions with Claude and APIs, the systems that produce content, and the experiments that make it convert.',
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
  'Sameed Chaudhary is an AI Marketing Engineer and Full-Stack Web Developer based in Lahore, Pakistan. He builds AI automation systems that produce and publish marketing content at scale, and engineers full headless WooCommerce e-commerce stores with React & Next.js frontend architectures.',
  'His flagship projects include Almari PK (almaripk.com — a full headless WooCommerce store with a Next.js / React frontend prepared for a client), Cure Abroad Health Solutions (cureabroadhealthsolutions.com — an international medical tourism platform with custom child theme and dual-funnel architecture), and BlogBolt (a Python pipeline with a Next.js control panel that runs a 7-phase SEO content workflow with Claude and publishes straight into WordPress). He has also engineered Wonderlyf (a headless UK wellness storefront).',
  'He is currently SEO Content Specialist & Growth Engineer at Marham, where he builds AI solutions with Claude and APIs including agent-based workflows, builds n8n automations, runs UI experiments and A/B tests, and ships SEO-led content systems. He has 3+ years of experience and a web engineering background in Next.js, React, WordPress, and WooCommerce.',
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is Cure Abroad Health Solutions (cureabroadhealthsolutions.com)?',
    a: 'Cure Abroad Health Solutions (cureabroadhealthsolutions.com) is a live medical tourism platform engineered by Sameed. It connects international patients in the UK and Europe with accredited hospital networks in Asia for cardiac surgery, robotic joint replacement, precision oncology, and IVF. Sameed developed the custom WordPress child theme, dual-funnel lead architecture, WebP optimization pipeline, and SMTP deliverability setup.',
  },
  {
    q: 'What is Almari PK (almaripk.com)?',
    a: 'Almari PK (almaripk.com) is a full headless WooCommerce store prepared for a client. Sameed built it using a high-performance React / Next.js 14 frontend integrated with a headless WooCommerce & WordPress API backend, featuring instant faceted filtering, real-time cart state management, and optimized checkout flows.',
  },
  {
    q: 'What does an AI Marketing Engineer do?',
    a: 'In his case: build the automation that produces marketing content — AI pipelines for research, drafting and on-page SEO, orchestrated in n8n — then run A/B tests and UI experiments on the pages that content lands on, and build headless web storefronts that convert visitors into paying clients.',
  },
  {
    q: 'Where can I find his GitHub and open-source code?',
    a: 'You can find his GitHub profile at ' + PROFILE.socials.github + ' and the source repository for this portfolio at ' + PROFILE.socials.githubRepo + '.',
  },
  {
    q: 'Is he available for work?',
    a: 'Yes — he is open to freelance projects (including headless e-commerce builds, healthcare portals, AI automation, and web engineering) as well as full-time roles. The fastest route is email: ' + PROFILE.email + '.',
  },
  {
    q: 'Where is he based?',
    a: 'Lahore, Pakistan. He has worked on-site, hybrid and fully remote — with international clients across the UK, US, and Pakistan.',
  },
  {
    q: 'How much experience does he have?',
    a: '3+ years of professional experience across five companies, with 25+ projects delivered for 40+ clients.',
  },
];
