import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const BASE_URL = "https://www.pipemonkeysnyc.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Pipe Monkeys",
  description:
    "Same-day drain cleaning, sewer line service, and camera inspection in Brooklyn, Queens & Nassau County.",
  url: BASE_URL,
  telephone: "+17187491830",
  priceRange: "$$",
  image: `${BASE_URL}/PipeMokeys-logo.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Brooklyn" },
    { "@type": "City", name: "Queens" },
    { "@type": "AdministrativeArea", name: "Nassau County" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Pipe Monkeys — NYC Drain Cleaning & Sewer Service | Brooklyn, Queens & Nassau",
  description:
    "Same-day drain cleaning, sewer line service, and camera inspection in Brooklyn, Queens & Nassau County. Upfront pricing, local NYC technicians, 100% cleanup guarantee.",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Pipe Monkeys",
    title: "Pipe Monkeys — NYC Drain Cleaning & Sewer Service",
    description:
      "Same-day drain cleaning, sewer line service, and camera inspection in Brooklyn, Queens & Nassau County. Upfront pricing, local NYC technicians, 100% cleanup guarantee.",
    images: [{ url: "/PipeMokeys-logo.webp", width: 180, height: 55, alt: "Pipe Monkeys" }],
  },
  twitter: {
    card: "summary",
    title: "Pipe Monkeys — NYC Drain Cleaning & Sewer Service",
    description:
      "Same-day drain cleaning, sewer line service, and camera inspection in Brooklyn, Queens & Nassau County.",
    images: ["/PipeMokeys-logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
