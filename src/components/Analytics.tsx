'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/**
 * Google Analytics 4, gated by the cookie banner.
 *
 * The property lives in the shared Galaxy analytics account
 * (arealtorinva@gmail.com). The measurement ID comes from the environment so
 * it can be changed in Vercel without a code change; with none set, nothing
 * loads at all.
 *
 * Consent Mode v2: gtag starts with every storage type DENIED, which is what
 * the banner's "Decline" means. "Accept" (now, or remembered from an earlier
 * visit) flips analytics_storage to granted. CookieBanner fires
 * `gc-cookie-consent` when the visitor chooses, so the update happens without
 * a reload.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';
export const CONSENT_KEY = 'gc_cookie_consent';
export const CONSENT_EVENT = 'gc-cookie-consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function applyConsent(value: string | null) {
  if (typeof window.gtag !== 'function') return;
  const granted = value === 'accepted' ? 'granted' : 'denied';
  window.gtag('consent', 'update', { analytics_storage: granted });
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const onChoice = (e: Event) => applyConsent((e as CustomEvent<string>).detail ?? null);
    window.addEventListener(CONSENT_EVENT, onChoice);
    return () => window.removeEventListener(CONSENT_EVENT, onChoice);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('${CONSENT_KEY}')==='accepted'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
