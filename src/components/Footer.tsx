import Link from 'next/link';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Logo from './Logo';

const serviceLinks = [
  { href: '/services/it-infrastructure', label: 'IT Infrastructure' },
  { href: '/services/cybersecurity', label: 'Cybersecurity' },
  { href: '/services/program-management', label: 'Program Management' },
  { href: '/services/ai-services', label: 'AI Services' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/past-performance', label: 'Past Performance' },
  { href: '/certifications', label: 'Certifications & Partners' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-silver">
      {/* Top divider */}
      <div className="divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo iconSize={38} />
            <p className="mt-5 text-sm text-silver/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              Bridging complex information technology with mission-critical government operations.
              Veteran-led. Mission-focused.
            </p>
            {/* Cert chips */}
            <div className="flex flex-wrap gap-2 mt-5">
              {['SDVOSB', 'SDB', 'MBE'].map((c) => (
                <span
                  key={c}
                  className="text-xs font-bold px-2.5 py-1 rounded border border-blue-accent/40 text-blue-bright tracking-wider"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-silver/70 hover:text-blue-bright transition-colors"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-silver/70 hover:text-blue-bright transition-colors"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-silver/70 hover:text-blue-bright transition-colors"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-silver/70" style={{ fontFamily: 'var(--font-inter)' }}>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-blue-accent flex-shrink-0 mt-0.5" />
                <span>8507 Oxon Hill Road, Suite 200<br />Fort Washington, MD 20744</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-blue-accent flex-shrink-0" />
                <a href="tel:2403247888" className="hover:text-blue-bright transition-colors">240-324-7888</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-blue-accent flex-shrink-0" />
                <a href="mailto:ccooks@galaxyconsultingllc.com" className="hover:text-blue-bright transition-colors break-all">
                  ccooks@galaxyconsultingllc.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={15} className="text-blue-accent flex-shrink-0" />
                <a href="https://www.GalaxyConsultingLLC.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-bright transition-colors">
                  GalaxyConsultingLLC.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-silver/50" style={{ fontFamily: 'var(--font-inter)' }}>
          <p>© {new Date().getFullYear()} Galaxy Consulting, LLC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <span>DUNS: 079255195</span>
            <span>CAGE: 71RT1</span>
            <span>UEI: DT7XMKSNJ5F3</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {['423420', '423430', '541519', '541512', '541712', '541990'].map((code) => (
              <span key={code}>NAICS {code}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
