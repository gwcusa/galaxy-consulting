import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: {
    template: "%s | Galaxy Consulting, LLC",
    default: "Galaxy Consulting, LLC — IT & Professional Services",
  },
  description:
    "Service-Disabled Veteran-Owned IT firm delivering cybersecurity, managed services, and program management to federal and state government agencies.",
  keywords: [
    "government IT contractor",
    "SDVOSB",
    "cybersecurity",
    "IT managed services",
    "program management",
    "Fort Washington Maryland",
    "federal contractor",
    "NIST 800-53",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-off-white">
        <Navbar />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
