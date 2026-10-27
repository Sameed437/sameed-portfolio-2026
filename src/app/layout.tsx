import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Assistant from '@/components/Assistant';
import BackToTop from '@/components/BackToTop';
import { SITE_URL } from '@/lib/site';

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

const TITLE = 'Sameed Chaudhary — AI Marketing & Web Engineer';
const DESCRIPTION =
  'AI Marketing & Web Engineer based in Lahore. I build headless WooCommerce stores (like Almari PK) with React & Next.js frontends, and AI automation systems with Claude, Python, and n8n.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s · Sameed Chaudhary',
  },
  description: DESCRIPTION,
  keywords: [
    'Sameed Chaudhary',
    'AI Marketing Engineer',
    'Headless WooCommerce',
    'Almari PK',
    'Next.js 14',
    'React',
    'Marketing Automation',
    'AI Content Automation',
    'n8n',
    'Claude AI',
    'Growth Engineer',
    'SEO',
    'WordPress',
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
  themeColor: '#08090B',
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
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Assistant />
        <BackToTop />
      </body>
    </html>
  );
}
