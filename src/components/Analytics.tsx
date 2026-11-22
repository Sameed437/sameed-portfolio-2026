import Script from 'next/script';

/*
 * Google Analytics 4. Renders nothing until NEXT_PUBLIC_GA_ID is set, so the
 * site stays script-free (and keeps its Lighthouse score) until you opt in.
 *
 * lazyOnload keeps gtag off the critical path: it loads after the page is idle.
 * IP anonymisation is on by default in GA4; no ad features are enabled.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  if (!GA_ID || !/^G-[A-Z0-9]{6,}$/.test(GA_ID)) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      <Script id="ga4-init" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{allow_google_signals:false,allow_ad_personalization_signals:false});`}
      </Script>
    </>
  );
}
