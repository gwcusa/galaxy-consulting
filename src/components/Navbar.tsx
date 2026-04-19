'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const servicesLinks = [
  { href: '/services/it-infrastructure', label: 'IT Infrastructure' },
  { href: '/services/cybersecurity', label: 'Cybersecurity' },
  { href: '/services/program-management', label: 'Program Management' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', children: servicesLinks },
  { href: '/past-performance', label: 'Past Performance' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy shadow-2xl shadow-navy/40 py-3'
          : 'bg-navy/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo iconSize={36} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                      isActive('/services')
                        ? 'text-blue-bright'
                        : 'text-silver hover:text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {link.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-1 w-52 bg-navy-mid border border-blue-accent/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                    <div className="py-1">
                      <Link
                        href="/services"
                        className="block px-4 py-2.5 text-sm text-silver hover:text-white hover:bg-navy-light transition-colors"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        All Services
                      </Link>
                      <div className="divider my-1" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(child.href)
                              ? 'text-blue-bright bg-navy-light'
                              : 'text-silver hover:text-white hover:bg-navy-light'
                          }`}
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive(link.href)
                      ? 'text-blue-bright'
                      : 'text-silver hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-5 py-2 bg-blue-accent hover:bg-blue-bright text-white text-sm font-semibold rounded-lg transition-colors duration-200"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-silver hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-blue-accent/20">
            <div className="pt-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-silver hover:text-white"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 flex flex-col gap-0.5">
                        <Link
                          href="/services"
                          className="px-3 py-2 text-sm text-silver/70 hover:text-white"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          All Services
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`px-3 py-2 text-sm transition-colors ${
                              isActive(child.href) ? 'text-blue-bright' : 'text-silver/70 hover:text-white'
                            }`}
                            style={{ fontFamily: 'var(--font-inter)' }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2.5 text-sm font-medium rounded transition-colors ${
                      isActive(link.href) ? 'text-blue-bright' : 'text-silver hover:text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="mt-3 px-4 py-2.5 bg-blue-accent text-white text-sm font-semibold rounded-lg text-center"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
