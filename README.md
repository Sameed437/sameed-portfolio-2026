# Sameed Chaudhary — Portfolio

Premium personal portfolio site built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**. Dark, glassmorphic, fully animated, and Vercel-ready.

Live Link: https://sameed-portfolio-2026.vercel.app/

## Stack

- Next.js 14 · App Router
- React 18 · TypeScript
- Tailwind CSS 3 · custom design tokens
- ScrollCraft (vendored in `src/scrollcraft/`) · scroll-driven animation
- Lucide Icons
- `next/font` · Inter, Archivo, JetBrains Mono

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

Optionally set `NEXT_PUBLIC_SITE_URL` (see `.env.production` and `src/lib/site.ts`) to your custom domain; it feeds metadata, `robots.ts` and `sitemap.ts`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, OG tags, global chrome
│   ├── page.tsx          # hero → services → sandbox → pipeline → work → about → experience → education → contact
│   ├── studio/page.tsx   # AI Studio: workflow inspector + ROI calculator
│   ├── globals.css       # Tailwind + design tokens
│   ├── robots.ts
│   └── sitemap.ts
├── components/           # Hero, Services, AutomationSandbox, Pipeline, Projects, ProjectCover,
│                         # About, Experience, Education, Contact, Navbar, Footer,
│                         # Assistant (on-site chatbot), WorkflowStudio, VideoBriefing, ...
├── scrollcraft/          # vendored scroll engine
└── lib/
    ├── data.ts           # all content lives here
    ├── assistant.ts      # rule-based assistant; answers derive from data.ts
    └── site.ts           # SITE_URL resolution
```

## Editing content

All copy, projects, experience, skills and links are in **`src/lib/data.ts`**. Change them there — no other file needs to be touched for content updates.

## Notes

- The assistant has no LLM behind it: it matches rules and facts from `data.ts`, so keep that file accurate.
- The contact form is presentational — wire it to Resend / Formspree / your own API route before going live.

---

© Sameed Chaudhary
