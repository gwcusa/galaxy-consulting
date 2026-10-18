'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Check } from 'lucide-react';
import { COOKIE_PREFS_EVENT } from './CookiePreferencesLink';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('gc_cookie_consent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage unavailable (SSR or private mode edge case)
    }
    // The footer's "Cookie preferences" link reopens the banner.
    const reopen = () => setVisible(true);
    window.addEventListener(COOKIE_PREFS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_PREFS_EVENT, reopen);
  }, []);

  // Tell Analytics (Consent Mode) about the choice without a reload.
  // Analytics is on by default; OK keeps it on, Decline turns it off.
  const choose = (value: 'accepted' | 'declined') => {
    localStorage.setItem('gc_cookie_consent', value);
    window.dispatchEvent(new CustomEvent('gc-cookie-consent', { detail: value }));
    setVisible(false);
  };
  const handleAccept = () => choose('accepted');
  const handleDecline = () => choose('declined');

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5"
    >
      <div className="max-w-4xl mx-auto bg-navy-mid border border-blue-accent/30 rounded-xl shadow-2xl shadow-navy/60 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 p-2.5 rounded-lg bg-blue-accent/10 border border-blue-accent/20">
          <Cookie size={20} className="text-blue-bright" />
        </div>

        {/* Text */}
        <p className="flex-1 text-sm text-silver/80 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
          We use analytics cookies to understand site use. You can decline without affecting your use of the site; see our{' '}
          <Link href="/privacy-policy" className="text-blue-bright hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-silver/20 text-silver hover:text-white hover:border-silver/40 rounded-lg text-sm font-medium transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <X size={14} /> Decline
          </button>
          <button
            onClick={handleAccept}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-accent hover:bg-blue-bright text-navy rounded-lg text-sm font-semibold transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <Check size={14} /> OK
          </button>
        </div>
      </div>
    </div>
  );
}
