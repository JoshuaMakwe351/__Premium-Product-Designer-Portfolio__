import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";
import { BackToTop } from "@/components/back-to-top";
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: ["Product Designer", "UX Designer", "AI", "Fintech", "SaaS", "Design Systems", "Figma"],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1728, height: 1479, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    telephone: site.phone,
    url: site.url,
    address: { "@type": "PostalAddress", addressLocality: "Enugu", addressCountry: "NG" },
    sameAs: [site.linkedin, site.dribbble],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${manrope.variable} ${geistMono.variable}`}
    >
      <body> 
        <Providers>
          <CursorGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
