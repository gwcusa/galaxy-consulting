import type { Metadata } from 'next';
import Link from 'next/link';
import { Server, Wifi, HardDrive, Headphones, Package, Monitor, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Infrastructure & Managed Services',
  description:
    'Galaxy Consulting delivers end-to-end IT infrastructure solutions including hardware/software sales, server deployment, network design, and 24/7 help desk services for government agencies.',
};

const offerings = [
  {
    icon: Package,
    title: 'Multi-Vendor Hardware & Software Sales',
    desc: 'Authorized reseller for Dell Technologies, HP, and Lenovo. We provide commercial-off-the-shelf (COTS) and customized hardware solutions tailored to your agency\'s requirements, including warranty support.',
    items: ['Desktop & laptop procurement', 'Server & rack hardware', 'Networking equipment', 'Peripheral devices', 'Licensed software suites'],
  },
  {
    icon: Server,
    title: 'Server & Infrastructure Deployment',
    desc: 'Full lifecycle support from planning through production deployment. We handle physical installation, OS configuration, and ongoing maintenance for on-premise and hybrid environments.',
    items: ['Server rack installation & cabling', 'OS deployment & hardening', 'Virtualization (VMware/Hyper-V)', 'Storage arrays & SAN/NAS', 'Backup & disaster recovery'],
  },
  {
    icon: Wifi,
    title: 'Network Design & Integration',
    desc: 'Designing and implementing secure, high-performance networks that meet federal standards and support mission-critical operations.',
    items: ['LAN/WAN architecture', 'Firewall & perimeter security', 'Switching & routing', 'VPN & remote access', 'Wireless infrastructure'],
  },
  {
    icon: HardDrive,
    title: 'Cloud & Storage Solutions',
    desc: 'Flexible storage strategies encompassing cloud, on-premise, and hybrid deployments to ensure data availability, security, and compliance.',
    items: ['Cloud migration planning', 'Hybrid cloud architectures', 'On-premise NAS/SAN systems', 'Data backup solutions', 'Storage capacity planning'],
  },
  {
    icon: Headphones,
    title: '24/7 Help Desk Services',
    desc: 'Around-the-clock technical support to keep your agency operational. Our help desk team provides Tier 1–3 support for hardware, software, and network issues.',
    items: ['Tier 1–3 technical support', 'Incident tracking & resolution', 'Remote & onsite support', 'Service Level Agreement (SLA) compliance', 'User training & documentation'],
  },
  {
    icon: Monitor,
    title: 'IT Quote Tracking & Management',
    desc: 'Custom IT procurement management systems that streamline the acquisition process, track quotes, and provide full visibility into hardware and software purchasing cycles.',
    items: ['Procurement workflow automation', 'Multi-vendor quote comparison', 'Inventory lifecycle tracking', 'Budget forecasting tools', 'Acquisition reporting dashboards'],
  },
];

const vendors = [
  { name: 'Dell Technologies', role: 'Federal Solutions Partner & Authorized Reseller' },
  { name: 'HP', role: 'Partner & Authorized H/W Reseller' },
  { name: 'Lenovo', role: 'Authorized Hardware Reseller' },
  { name: 'NinjaOne', role: 'RMM & Patch Management Partner' },
  { name: 'SMART Technologies', role: 'Authorized Reseller' },
  { name: 'Cyber Manufacturing', role: 'Authorized Reseller' },
];

export default function ITInfrastructurePage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="bg-galaxy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-silver/50 mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
            <Link href="/services" className="hover:text-blue-bright transition-colors">Services</Link>
            <span>/</span>
            <span className="text-silver">IT Infrastructure</span>
          </nav>
          <div className="inline-flex p-3 rounded-xl bg-blue-accent/15 text-blue-bright mb-5">
            <Server size={26} />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            IT Infrastructure &amp;<br />Managed Services
          </h1>
          <p
            className="text-silver/70 text-base max-w-2xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            End-to-end hardware procurement, infrastructure deployment, network integration, and managed support
            services — purpose-built for federal and state government agencies.
          </p>
        </div>
      </section>

      {/* ── SERVICE OFFERINGS ── */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-navy section-heading mb-10"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Service Offerings
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="card-hover bg-white rounded-xl p-6 border border-silver-light flex flex-col">
                <div className="inline-flex p-2.5 rounded-lg bg-blue-accent/10 text-blue-accent mb-4 w-fit">
                  <o.icon size={20} />
                </div>
                <h3
                  className="text-base font-semibold text-navy mb-2.5"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {o.title}
                </h3>
                <p
                  className="text-sm text-silver leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {o.desc}
                </p>
                <ul className="space-y-1.5">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-silver/70" style={{ fontFamily: 'var(--font-inter)' }}>
                      <CheckCircle2 size={13} className="text-blue-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENDOR PARTNERSHIPS ── */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-white section-heading mb-8"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Authorized Technology Partners
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vendors.map((v) => (
              <div key={v.name} className="cert-badge rounded-lg p-4">
                <div
                  className="text-white font-semibold text-sm mb-1"
                  style={{ fontFamily: 'var(--font-barlow)' }}
                >
                  {v.name}
                </div>
                <div
                  className="text-silver/50 text-xs"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {v.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-galaxy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-silver/70 text-sm mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
            Let&apos;s build a solution tailored to your agency&apos;s mission requirements and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-accent hover:bg-blue-bright text-white font-semibold rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Get a Quote <ArrowRight size={15} />
            </Link>
            <Link
              href="/past-performance"
              className="px-6 py-3 border border-silver/30 text-silver hover:text-white hover:border-silver/60 rounded-lg transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              View Past Performance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
