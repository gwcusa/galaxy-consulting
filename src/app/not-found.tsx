import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Replaces Next's default "404: This page could not be found." page for every unmatched URL.
// Next serves this with HTTP 404 and injects its own noindex tag, but without this robots
// field the root layout's "index, follow" tag is also emitted, giving conflicting signals.
export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for does not exist or has moved.',
  robots: { index: false, follow: true },
};

const links = [
  { href: '/cmmc', label: 'CMMC Compliance' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About Us' },
];

export default function NotFound() {
  return (
    <section className="bg-galaxy py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-bright text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: 'var(--font-inter)' }}>
          Error 404
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-barlow)' }}>
          Page Not Found
        </h1>
        <p className="text-silver/70 text-base mb-10" style={{ fontFamily: 'var(--font-inter)' }}>
          The page you were looking for does not exist or has moved. Try one of these instead.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link href="/" className="px-6 py-3 bg-blue-accent hover:bg-blue-bright text-navy font-semibold rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2" style={{ fontFamily: 'var(--font-inter)' }}>
            Home <ArrowRight size={15} />
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-silver/30 text-silver hover:text-white hover:border-silver/60 rounded-lg transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
            Contact Us
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-blue-bright hover:text-white transition-colors">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
