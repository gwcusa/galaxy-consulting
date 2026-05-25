import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

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
    'Galaxy Consulting is a Cyber-AB authorized CMMC RPO helping DoD contractors achieve CMMC Level 1 certification. SDVOSB · CMMC L1 & L2 Certified · Fort Washington, MD.',
  keywords: [
    'CMMC RPO',
    'CMMC Level 1',
    'CMMC compliance',
    'CMMC certification',
    'CMMC gap assessment',
    'DoD contractor cybersecurity',
    'registered provider organization',
    'CMMC small business',
    'government IT contractor',
    'SDVOSB',
    'cybersecurity',
    'NIST 800-171',
    'IT managed services',
    'program management',
    'Fort Washington Maryland',
    'federal contractor',
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
  alternates: {
    canonical: 'https://www.galaxyconsultingllc.com',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Galaxy Consulting, LLC',
  url: 'https://www.galaxyconsultingllc.com',
  logo: 'https://www.galaxyconsultingllc.com/og-image.png',
  description:
    'Cyber-AB authorized CMMC RPO and Service-Disabled Veteran-Owned IT firm providing CMMC Level 1 certification support, cybersecurity, IT infrastructure, and professional services to DoD contractors and government agencies.',
  telephone: '240-324-7888',
  email: 'info@galaxyconsultingllc.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8507 Oxon Hill Road, Suite 200',
    addressLocality: 'Fort Washington',
    addressRegion: 'MD',
    postalCode: '20744',
    addressCountry: 'US',
  },
  areaServed: 'US',
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'CMMC Registered Provider Organization (RPO) — Cyber-AB Authorized' },
    { '@type': 'EducationalOccupationalCredential', name: 'CMMC Level 1 Certified' },
    { '@type': 'EducationalOccupationalCredential', name: 'CMMC Level 2 Certified' },
    { '@type': 'EducationalOccupationalCredential', name: 'Service-Disabled Veteran-Owned Small Business (SDVOSB)' },
  ],
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
