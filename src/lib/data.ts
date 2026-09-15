export const PROFILE = {
  name: 'Sameed Chaudhary',
  firstName: 'Sameed',
  lastName: 'Chaudhary',
  title: 'Frontend & WordPress Developer | AI Marketing Engineer',
  tagline:
    'I build modern, performance-driven websites and web applications with a focus on clean design, SEO optimization, and premium user experiences.',
  email: 'msameedch437@gmail.com',
  location: 'Lahore, Pakistan',
  socials: {
    linkedin: 'https://www.linkedin.com/in/sameed-chaudhary-740424278/',
    github: 'https://github.com/Sameed437',
    upwork: 'https://www.upwork.com/freelancers/',
  },
  availability: 'Available for opportunities',
  rotatingTitles: [
    'WordPress Developer',
    'AI Marketing Engineer',
    'Growth Engineer',
    'Frontend Developer',
    'SEO Specialist',
  ],
};

export const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '40+', label: 'Happy Clients' },
  { value: '10+', label: 'Technologies' },
];

export const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Tools',
    items: ['WordPress', 'PHP', 'REST APIs', 'Git', 'Node.js (Basics)'],
  },
  {
    title: 'Growth & Automation',
    items: [
      'n8n',
      'Blog Automation',
      'UI Experimentation',
      'A/B Testing',
      'Conversion Optimization',
    ],
  },
  {
    title: 'Other',
    items: [
      'SEO Optimization',
      'Website Performance',
      'Responsive Design',
    ],
  },
];

/** Which generated vector cover a project uses. */
export type ProjectArt =
  | 'pipeline'
  | 'storefront'
  | 'care'
  | 'scan'
  | 'ledger'
  | 'columns'
  | 'grid'
  | 'layout'
  | 'community';

export type Project = {
  title: string;
  art: ProjectArt;
  description: string;
  tags: string[];
  href?: string;
  badge?: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'AI Blog Automation Engine',
    art: 'pipeline',
    description:
      'End-to-end content pipeline I built in Python with a Next.js control panel. Picks a topic, runs the 7-phase SEO content workflow with Claude (research → outline → draft → on-page SEO → image selection with auto alt-text → format → publish), and pushes the finished post into WordPress as a draft — ready for editorial review.',
    tags: ['Python', 'Next.js', 'Claude AI', 'SEO Automation', 'WordPress API'],
    badge: 'Flagship',
  },
  {
    title: 'Wonderlyf — Headless E-commerce',
    art: 'storefront',
    description:
      'Live client site at wonderlyf.co.uk. A fully animated React storefront on top of a headless WooCommerce + WordPress backend — product catalog, cart, checkout, payments, and editorial content all driven through the WP REST/Store API.',
    tags: ['React', 'Headless WordPress', 'WooCommerce', 'E-commerce', 'Animations'],
    href: 'https://wonderlyf.co.uk',
    badge: 'Live',
  },
  {
    title: 'Cure Abroad Health Solutions',
    art: 'care',
    description:
      'Live medical-tourism platform at cureabroadhealthsolutions.com. Cure Abroad coordinates cross-border healthcare — international consultations, visa and travel guidance, accommodation, translation, and post-treatment follow-up. Built in WordPress with a service-led IA spanning Our Model, Partnerships, and For Patients, plus separate patient and partnership enquiry funnels.',
    tags: ['WordPress', 'Healthcare', 'SEO', 'Lead Generation', 'Web Design'],
    href: 'https://cureabroadhealthsolutions.com/',
    badge: 'Live',
  },
  {
    title: 'AI Attendance & Parental Control',
    art: 'scan',
    description:
      'Final-year project combining AI-based facial recognition with a parental control dashboard for monitoring and policy enforcement.',
    tags: ['Python', 'OpenCV', 'AI', 'Machine Learning'],
  },
  {
    title: 'Seattle City Accounting',
    art: 'ledger',
    description:
      'Corporate accounting WordPress site built in Elementor with a refined responsive layout and fast load profile.',
    tags: ['WordPress', 'Elementor', 'Responsive Design'],
  },
  {
    title: 'LA Accounting Pro',
    art: 'columns',
    description:
      'Professional accounting and financial-services site with a service-led IA, lead capture, and trust-building UI.',
    tags: ['WordPress', 'Elementor', 'Web Design'],
  },
  {
    title: 'Golden Gate Accounting',
    art: 'grid',
    description:
      'Business website with a clean editorial layout, optimized images, and excellent Lighthouse performance.',
    tags: ['WordPress', 'Elementor'],
  },
  {
    title: 'Personal React Portfolio',
    art: 'layout',
    description:
      'A previous portfolio iteration built in React with modern animations, project showcase, and skill matrix.',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Azhar Foundation Site',
    art: 'community',
    description:
      'Clean, functional React-based foundation website UI emphasizing clarity, donations, and program transparency.',
    tags: ['React', 'JavaScript', 'Frontend'],
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
      'Dual role: content + growth — working at the intersection of SEO, automation, and product growth.',
    bullets: [
      'Create and optimize SEO-focused healthcare content to drive organic traffic and search visibility.',
      'Manage and publish WordPress blogs with full on-page SEO — meta tags, internal linking, URL structure, formatting.',
      'Built blog-automation workflows in n8n to streamline publishing and improve operational efficiency.',
      'Run UI experiments and A/B tests on key product pages to lift conversion and engagement.',
      'Partner with product and marketing to identify, prioritize, and ship data-driven UI improvements.',
      'Conduct keyword research and develop content strategies aligned with search intent and acquisition.',
      'Optimize and refresh existing content to improve rankings, CTR, and organic reach.',
    ],
  },
  {
    company: 'Rocket Bookkeeper',
    role: 'WordPress Developer',
    date: 'Oct 2025 – Jan 2026',
    location: 'On-site',
    bullets: [
      'Develop and customize WordPress themes, templates, and page layouts.',
      'Build new landing pages and improve existing site structure for better UX.',
      'Optimize website performance, speed, and mobile responsiveness.',
      'Integrate lead forms, CRM tools, and third-party plugins.',
      'Implement SEO best practices and on-page enhancements.',
      'Maintain brand consistency and high visual standards across all pages.',
    ],
  },
  {
    company: 'Kynbix',
    role: 'Junior WordPress Developer',
    date: 'Feb 2025 – Nov 2025',
    location: 'Lahore, Remote',
    blurb: 'Also: WordPress & UI/UX Intern — Dec 2024 – Feb 2025.',
    bullets: [
      'Developed and maintained WordPress sites with custom themes, plugins, and Elementor.',
      'Optimized speed, SEO, and responsive design for better UX and rankings.',
      'Implemented WooCommerce — product pages, checkout flows, and payment gateways.',
      'Handled PHP, CSS, HTML, and JavaScript customizations for client-specific requirements.',
      'Ensured website security, performance, and cross-browser compatibility.',
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
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

/*
 * Plain-text knowledge used by the on-site assistant.
 * Everything the assistant can say is derived from this file, so it can
 * quote real facts and never invent anything.
 */
export const BIO: string[] = [
  'Sameed Chaudhary is a frontend and WordPress developer based in Lahore, Pakistan, working at the intersection of design, SEO, and growth engineering.',
  'Over 3+ years he has shipped marketing sites, e-commerce flows, automation workflows, and conversion-focused landing pages for accounting firms, healthcare platforms, and independent brands.',
  'He is currently a SEO Content Specialist & Growth Engineer at Marham, where he builds n8n automations, runs UI experiments, and ships SEO-led content systems.',
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'Is he available for work?',
    a: 'Yes — he is open to both freelance projects and full-time roles, and usually replies within 24 hours. The fastest route is email: ' + PROFILE.email + '.',
  },
  {
    q: 'Where is he based?',
    a: 'Lahore, Pakistan. He has worked on-site, hybrid, and fully remote — the Kynbix and Intersoft roles were both remote.',
  },
  {
    q: 'How much experience does he have?',
    a: '3+ years of professional experience across five companies, with 20+ projects delivered for 40+ clients.',
  },
  {
    q: 'What is he strongest at?',
    a: 'WordPress development and frontend work with React/Next.js, paired with SEO and growth engineering — that combination of building the site and then making it rank and convert is the through-line in his work.',
  },
];
