import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.galaxyconsultingllc.com'),
  title: {
    template: '%s | Galaxy Consulting, LLC',
    default: 'Galaxy Consulting, LLC — CMMC RPO | IT & Cybersecurity Services',
  },
  description:
    'Galaxy Consulting is a Cyber-AB authorized CMMC RPO and CMMC RP staffing provider helping DoD contractors achieve CMMC Level 1 and Level 2 certification. Gap assessments, remediation, SSP documentation, and C3PAO preparation. SDVOSB · Fort Washington, MD.',
  keywords: [
    'CMMC RPO',
    'CMMC Registered Provider Organization',
    'CMMC RP',
    'CMMC Registered Practitioner',
    'CMMC RPA',
    'CMMC Level 1',
    'CMMC Level 2',
    'CMMC Level 1 certification',
    'CMMC Level 2 certification',
    'CMMC compliance',
    'CMMC certification',
    'CMMC gap assessment',
    'CMMC assessment',
    'CMMC readiness assessment',
    'CMMC consulting',
    'CMMC consultant',
    'CMMC compliance services',
    'CMMC preparation',
    'CMMC advisory services',
    'CMMC marketplace',
    'Cyber-AB authorized',
    'Cyber-AB RPO',
    'C3PAO preparation',
    'CMMC third party assessment',
    'DoD contractor cybersecurity',
    'defense industrial base',
    'DIB cybersecurity',
    'DFARS 252.204-7012',
    'NIST SP 800-171',
    'NIST 800-171 compliance',
    'Federal Contract Information',
    'FCI compliance',
    'Controlled Unclassified Information',
    'CUI compliance',
    'SPRS score',
    'System Security Plan',
    'SSP development',
    'DoD supply chain security',
    'small business CMMC',
    'CMMC small business',
    'SDVOSB cybersecurity',
    'SDVOSB',
    'government IT contractor',
    'federal IT contractor',
    'cybersecurity maturity model certification',
    'Fort Washington Maryland cybersecurity',
    'Maryland CMMC',
    'Virginia CMMC',
    'Washington DC CMMC',
    'IT managed services',
    'program management',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.galaxyconsultingllc.com',
    siteName: 'Galaxy Consulting, LLC',
    title: 'Galaxy Consulting, LLC — CMMC RPO | IT & Cybersecurity Services',
    description:
      'Galaxy Consulting is a Cyber-AB authorized CMMC RPO helping DoD contractors achieve CMMC Level 1 certification. SDVOSB · Fort Washington, MD.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Galaxy Consulting — CMMC RPO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galaxy Consulting, LLC — CMMC RPO',
    description:
      'Cyber-AB authorized CMMC RPO helping small DoD contractors achieve CMMC Level 1 certification.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  name: 'Galaxy Consulting, LLC',
  url: 'https://www.galaxyconsultingllc.com',
  logo: 'https://www.galaxyconsultingllc.com/og-image.png',
  image: 'https://www.galaxyconsultingllc.com/og-image.png',
  description:
    'Cyber-AB authorized CMMC RPO and Service-Disabled Veteran-Owned IT firm providing CMMC Level 1 certification support, cybersecurity, IT infrastructure, and professional services to DoD contractors and government agencies.',
  telephone: '+1-240-324-7888',
  email: 'info@galaxyconsultingllc.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8507 Oxon Hill Road, Suite 200',
    addressLocality: 'Fort Washington',
    addressRegion: 'MD',
    postalCode: '20744',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.7434,
    longitude: -76.9961,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'State', name: 'Maryland' },
    { '@type': 'State', name: 'Virginia' },
    { '@type': 'State', name: 'Washington DC' },
  ],
  knowsAbout: [
    'CMMC Level 1 Compliance',
    'CMMC Level 2 Compliance',
    'CMMC RPO Services',
    'CMMC Registered Practitioner Staffing',
    'CMMC Gap Assessment',
    'CMMC Readiness Assessment',
    'CMMC Advisory Services',
    'NIST SP 800-171',
    'NIST SP 800-53',
    'Cybersecurity Maturity Model Certification',
    'DoD Contractor Compliance',
    'DFARS 252.204-7012',
    'Federal Contract Information (FCI) Protection',
    'Controlled Unclassified Information (CUI) Protection',
    'System Security Plan (SSP) Development',
    'C3PAO Assessment Preparation',
    'SPRS Score Submission',
    'Defense Industrial Base (DIB) Cybersecurity',
    'IT Infrastructure',
    'Federal Cybersecurity',
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'CMMC Registered Provider Organization (RPO) — Cyber-AB Authorized' },
    { '@type': 'EducationalOccupationalCredential', name: 'CMMC Level 1 Certified (17 Practices)' },
    { '@type': 'EducationalOccupationalCredential', name: 'CMMC Level 2 Certified (110 NIST SP 800-171 r2 Practices)' },
    { '@type': 'EducationalOccupationalCredential', name: 'Cyber-AB Registered Practitioners (RPs) on Staff' },
    { '@type': 'EducationalOccupationalCredential', name: 'Service-Disabled Veteran-Owned Small Business (SDVOSB)' },
    { '@type': 'EducationalOccupationalCredential', name: 'Small Disadvantaged Business (SDB)' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CMMC Advisory & IT Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMMC Level 1 Gap Assessment', description: 'Practice-by-practice evaluation against all 17 CMMC Level 1 requirements with SPRS score estimate and remediation roadmap.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMMC Level 2 Gap Assessment', description: 'Comprehensive evaluation against all 110 NIST SP 800-171 r2 practices with prioritized remediation roadmap and SPRS score calculation.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMMC Remediation & Preparation', description: 'Hands-on implementation support for security controls required under CMMC Level 1 and Level 2.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMMC Documentation — SSP & POA&M', description: 'System Security Plan (SSP), Policies, Procedures, and Plan of Action & Milestones (POA&M) drafting for CMMC assessments.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMMC RP Staffing', description: 'On-demand Cyber-AB Registered Practitioner (RP) staffing for CMMC Level 1 self-assessment and Level 2 C3PAO assessment preparation.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'C3PAO Assessment Coordination', description: 'End-to-end coordination with accredited C3PAOs for CMMC Level 2 certification assessments.' } },
    ],
  },
  sameAs: ['https://galaxy-consulting.vercel.app'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics />
      </head>
      <body className="min-h-full flex flex-col bg-off-white">
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
