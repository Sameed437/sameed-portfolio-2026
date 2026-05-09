export const PROFILE = {
  name: 'Sameed Chaudhary',
  firstName: 'Sameed',
  lastName: 'Chaudhary',
  title: 'Frontend & WordPress Developer | Growth Engineer',
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

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  href?: string;
  badge?: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'AI Blog Automation Engine',
    description:
      'End-to-end content pipeline I built in Python with a Next.js control panel. Picks a topic, runs the 7-phase SEO content workflow with Claude (research → outline → draft → on-page SEO → image selection with auto alt-text → format → publish), and pushes the finished post into WordPress as a draft — ready for editorial review.',
    tags: ['Python', 'Next.js', 'Claude AI', 'SEO Automation', 'WordPress API'],
    accent: 'from-indigo-500 via-violet-600 to-fuchsia-600',
    badge: 'Flagship',
  },
  {
    title: 'Wonderlyf — Headless E-commerce',
    description:
      'Live client site at wonderlyf.co.uk. A fully animated React storefront on top of a headless WooCommerce + WordPress backend — product catalog, cart, checkout, payments, and editorial content all driven through the WP REST/Store API.',
    tags: ['React', 'Headless WordPress', 'WooCommerce', 'E-commerce', 'Animations'],
    accent: 'from-rose-500 via-pink-500 to-orange-500',
    href: 'https://wonderlyf.co.uk',
    badge: 'Live',
  },
  {
    title: 'AI Attendance & Parental Control',
    description:
      'Final-year project combining AI-based facial recognition with a parental control dashboard for monitoring and policy enforcement.',
    tags: ['Python', 'OpenCV', 'AI', 'Machine Learning'],
    accent: 'from-violet-600 to-fuchsia-500',
  },
  {
    title: 'Seattle City Accounting',
    description:
      'Corporate accounting WordPress site built in Elementor with a refined responsive layout and fast load profile.',
    tags: ['WordPress', 'Elementor', 'Responsive Design'],
    accent: 'from-indigo-600 to-violet-500',
  },
  {
    title: 'LA Accounting Pro',
    description:
      'Professional accounting and financial-services site with a service-led IA, lead capture, and trust-building UI.',
    tags: ['WordPress', 'Elementor', 'Web Design'],
    accent: 'from-violet-700 to-purple-500',
  },
  {
    title: 'Golden Gate Accounting',
    description:
      'Business website with a clean editorial layout, optimized images, and excellent Lighthouse performance.',
    tags: ['WordPress', 'Elementor'],
    accent: 'from-purple-600 to-pink-500',
  },
  {
    title: 'Personal React Portfolio',
    description:
      'A previous portfolio iteration built in React with modern animations, project showcase, and skill matrix.',
    tags: ['React', 'JavaScript', 'CSS'],
    accent: 'from-violet-500 to-blue-500',
  },
  {
    title: 'Azhar Foundation Site',
    description:
      'Clean, functional React-based foundation website UI emphasizing clarity, donations, and program transparency.',
    tags: ['React', 'JavaScript', 'Frontend'],
    accent: 'from-fuchsia-500 to-violet-600',
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
