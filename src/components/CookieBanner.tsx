'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Check } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('gc_cookie_consent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage unavailable (SSR or private mode edge case)
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gc_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gc_cookie_consent', 'declined');
    setVisible(false);
  };

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
          We use cookies to improve your browsing experience and analyze site traffic. By clicking{' '}
          <strong className="text-white">Accept</strong>, you consent to our use of cookies as described in our{' '}
          <Link href="/privacy-policy" className="text-blue-bright hover:underline">
            Privacy Policy
          </Link>
          . You may decline non-essential cookies without affecting your ability to use the site.
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
            <Check size={14} /> Accept
          </button>
        </div>
      </div>
    </div>
  );
}
