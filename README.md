# Sameed Chaudhary — Portfolio

Premium personal portfolio site built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**. Dark, glassmorphic, fully animated, and Vercel-ready.

Live Link: https://sameed-portfolio-2026.vercel.app/

## Stack

- Next.js 14 · App Router
- React 18 · TypeScript
- Tailwind CSS 3 · custom design tokens
- Framer Motion 11 · scroll & enter animations
- Lucide Icons
- `next/font` · Inter + Playfair Display

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the page hot-reloads as you edit.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

The repo has zero build config — push to GitHub then import to Vercel, or:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

No environment variables required. Update `SITE_URL` inside `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` to your own domain after deploy.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, OG tags, global chrome
│   ├── page.tsx          # composition: hero → contact
│   ├── globals.css       # Tailwind + design tokens + cursor rules
│   ├── icon.svg          # auto-served favicon
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Cursor.tsx        # custom glowing cursor with spring lag
│   ├── Navbar.tsx        # scroll-aware, hide-on-scroll, mobile menu
│   ├── NoiseOverlay.tsx  # global SVG grain
│   ├── Particles.tsx     # canvas particle network for hero
│   ├── SectionReveal.tsx # reusable scroll-reveal motion wrapper
│   ├── SectionHeader.tsx
│   ├── Hero.tsx          # typewriter, availability badge, CTAs
│   ├── About.tsx         # bio + animated stats + glowing avatar
│   ├── Skills.tsx        # 4 grouped skill chips with hover glow
│   ├── Projects.tsx      # bento grid with 3D tilt + spotlight
│   ├── Experience.tsx    # vertical timeline with scroll-drawn line
│   ├── Education.tsx
│   ├── Contact.tsx       # glassmorphic form with floating labels
│   └── Footer.tsx
└── lib/
    └── data.ts           # all content lives here — edit freely
```

## Editing content

All copy, projects, experience, skills and links are in **`src/lib/data.ts`**. Change them there — no other file needs to be touched for content updates.

## Notes

- The custom cursor is automatically disabled on touch devices.
- All motion respects `prefers-reduced-motion`.
- The contact form is presentational — wire it to Resend / Formspree / your own API route before going live.

---

© Sameed Chaudhary
