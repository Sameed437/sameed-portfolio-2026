import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Cursor from '@/components/Cursor';
import NoiseOverlay from '@/components/NoiseOverlay';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const SITE_URL = 'https://sameed-chaudhary.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sameed Chaudhary — Frontend & WordPress Developer | Growth Engineer',
    template: '%s · Sameed Chaudhary',
  },
  description:
    'I build modern, performance-driven websites and web applications with a focus on clean design, SEO optimization, and premium user experiences.',
  keywords: [
    'Sameed Chaudhary',
    'Frontend Developer',
    'WordPress Developer',
    'Growth Engineer',
    'Next.js',
    'React',
    'Tailwind',
    'SEO',
    'Lahore',
  ],
  authors: [{ name: 'Sameed Chaudhary' }],
  creator: 'Sameed Chaudhary',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Sameed Chaudhary',
    title: 'Sameed Chaudhary — Frontend & WordPress Developer | Growth Engineer',
    description:
      'Premium portfolio of Sameed Chaudhary — frontend, WordPress, and growth engineering.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Sameed Chaudhary — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sameed Chaudhary — Frontend & WordPress Developer',
    description:
      'I build modern, performance-driven websites with clean design and SEO at the core.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-ink-900 text-bone antialiased">
        <Cursor />
        <NoiseOverlay />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
