import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Assistant from '@/components/Assistant';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

const SITE_URL = 'https://sameed-chaudhary.vercel.app';
const TITLE = 'Sameed Chaudhary — Frontend & WordPress Developer';
const DESCRIPTION =
  'Frontend and WordPress developer in Lahore building fast, search-visible websites — React, Next.js, WooCommerce, and SEO-led growth engineering.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s · Sameed Chaudhary',
  },
  description: DESCRIPTION,
  keywords: [
    'Sameed Chaudhary',
    'Frontend Developer',
    'WordPress Developer',
    'Growth Engineer',
    'Next.js',
    'React',
    'WooCommerce',
    'SEO',
    'Lahore',
  ],
  authors: [{ name: 'Sameed Chaudhary' }],
  creator: 'Sameed Chaudhary',
  alternates: { canonical: '/' },
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
};

export const viewport: Viewport = {
  themeColor: '#FBFAF7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`no-js ${inter.variable} ${mono.variable}`}>
      <head>
        {/*
          Runs before first paint. If scripting is disabled the class stays
          and the CSS keeps every .reveal block visible, so the page still
          reads fine without JS.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
      </head>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Assistant />
      </body>
    </html>
  );
}
