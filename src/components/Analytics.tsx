'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { contactClickEvent, trackEvent } from '@/lib/analytics';

/**
 * Google Analytics 4, opt-OUT (owner decision 2026-10-18).
 *
 * The property lives in the shared Galaxy analytics account
 * (arealtorinva@gmail.com). The measurement ID comes from the environment so
 * it can be changed in Vercel without a code change; with none set, nothing
 * loads at all.
 *
 * Consent Mode v2: analytics_storage defaults to GRANTED so every visitor is
 * counted from the first page_view; ad storage stays denied. The banner's
 * "Decline" (now, or remembered from an earlier visit) sets analytics_storage
 * to denied. CookieBanner fires `gc-cookie-consent` when the visitor chooses,
 * so the update happens without a reload.
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

type GcWindow = Window & { __gcGaConfigured?: boolean; __gcAnalyticsDenied?: boolean };

/**
 * Expire the GA cookies (_ga, _ga_<stream>) on every domain gtag may have
 * written them to: host-only, the exact host, and the root domain.
 */
function clearGaCookies() {
  const host = window.location.hostname;
  const parts = host.split('.');
  const domains = new Set(['', host, '.' + host]);
  if (parts.length > 2) {
    const root = parts.slice(-2).join('.');
    domains.add(root);
    domains.add('.' + root);
  }
  for (const c of document.cookie.split(';')) {
    const name = c.split('=')[0].trim();
    if (!/^_ga($|_)/.test(name)) continue;
    for (const d of domains) {
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
    }
  }
}

// Set once the re-grant page_view has been sent, so it can never repeat.
let consentPageViewSent = false;

function applyConsent(value: string | null) {
  if (typeof window.gtag !== 'function') return;
  const w = window as GcWindow;
  const granted = value !== 'declined';
  const wasDenied = w.__gcAnalyticsDenied === true;
  w.__gcAnalyticsDenied = !granted;
  // Consent is updated first so no further hit can carry or rewrite a cookie.
  window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
  if (!granted) clearGaCookies();

  // Only when a stored decline is reversed: this page's page_view went out
  // while analytics_storage was denied, and gtag does not resend it when
  // consent changes. Send exactly one for the current page. Only needed once
  // config has run; before that, config's own page_view carries the new state.
  // Later route changes are counted by GA4's history-change page_views.
  if (granted && wasDenied && w.__gcGaConfigured && !consentPageViewSent) {
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
var gcDenied=false;try{gcDenied=localStorage.getItem('${CONSENT_KEY}')==='declined';}catch(e){}window.__gcAnalyticsDenied=gcDenied;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:gcDenied?'denied':'granted'});`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});window.__gcGaConfigured=true;`}
      </Script>
    </>
  );
}
