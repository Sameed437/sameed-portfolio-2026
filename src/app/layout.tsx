import type { Metadata, Viewport } from 'next';
import { Instrument_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import '@/scrollcraft/engine/scrollcraft.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Assistant from '@/components/Assistant';
import BackToTop from '@/components/BackToTop';
import ScrollCraftMount from '@/components/scroll/ScrollCraftMount';
import Analytics from '@/components/Analytics';
import ScrollProgress from '@/components/ScrollProgress';
import PointerSpotlight from '@/components/PointerSpotlight';
import { SITE_URL } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

const TITLE = 'Sameed Chaudhary — Automation Engineer & AI Systems';
const DESCRIPTION =
  'Automation Engineer based in Lahore. I build autonomous AI workflows, multi-agent systems, and intelligent pipelines with Claude, n8n, Make, and Python, alongside high-performance web and e-commerce platforms.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s · Sameed Chaudhary',
  },
  description: DESCRIPTION,
  keywords: [
    'Sameed Chaudhary',
    'Automation Engineer',
    'AI Automation Engineer',
    'AI Automation',
    '360 Signum',
    'AI Agents',
    'n8n',
    'Claude API',
    'Make',
    'Zapier',
    'Chatbot Development',
    'Headless WooCommerce',
    'Wonderlyf',
    'Next.js 14',
    'React',
    'Growth Engineer',
    'SEO',
    'WordPress',
    'Lahore',
  ],
  authors: [{ name: 'Sameed Chaudhary' }],
  creator: 'Sameed Chaudhary',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Sameed Chaudhary',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  // Google Search Console HTML-tag verification. Set NEXT_PUBLIC_GSC_VERIFICATION
  // to the `content` value of the meta tag Search Console gives you.
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: '#06080F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`no-js ${inter.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
      </head>
      <body className="bg-base text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-base"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <PointerSpotlight />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Assistant />
        <BackToTop />
        <ScrollCraftMount />
        <Analytics />
      </body>
    </html>
  );
}
