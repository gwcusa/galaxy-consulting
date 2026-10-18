'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { contactClickEvent, trackEvent } from '@/lib/analytics';

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

// Set once the Accept-time page_view has been sent, so it can never repeat.
let consentPageViewSent = false;

function applyConsent(value: string | null) {
  if (typeof window.gtag !== 'function') return;
  const granted = value === 'accepted';
  window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });

  // The page_view sent by gtag('config') went out while analytics_storage was
  // denied, and gtag does not resend it when consent changes. Without this, a
  // visitor who accepts and then leaves without a second page is never counted.
  // Only needed once config has run: if the visitor accepts before that,
  // config's own page_view already goes out with consent granted. Later route
  // changes are counted by GA4's history-change page_views, not by this.
  const w = window as Window & { __gcGaConfigured?: boolean };
  if (granted && w.__gcGaConfigured && !consentPageViewSent) {
    consentPageViewSent = true;
    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const onChoice = (e: Event) => applyConsent((e as CustomEvent<string>).detail ?? null);
    window.addEventListener(CONSENT_EVENT, onChoice);

    // One delegated listener reports phone_click / email_click for every
    // tel:/mailto: link on the site (footer, contact page, privacy policy, and
    // any added later) without wrapping each server-rendered anchor.
    const onClick = (e: MouseEvent) => {
      const link = e.target instanceof Element ? e.target.closest('a[href]') : null;
      if (!link) return;
      const ev = contactClickEvent(link.getAttribute('href') ?? '', window.location.pathname);
      if (ev) trackEvent(ev.name, ev.params);
    };
    document.addEventListener('click', onClick, { capture: true });

    return () => {
      window.removeEventListener(CONSENT_EVENT, onChoice);
      document.removeEventListener('click', onClick, { capture: true });
    };
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
        {`gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});window.__gcGaConfigured=true;`}
      </Script>
    </>
  );
}
