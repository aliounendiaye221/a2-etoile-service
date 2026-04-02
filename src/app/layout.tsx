import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { company } from "@/lib/site-content";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: company.name,
    template: `%s | ${company.name}`,
  },
  description: "Découvrez A2 ÉTOILE SERVICE, votre nouveau partenaire de nettoyage premium à Dakar et Rufisque. Excellence, rigueur et professionnalisme dès le premier jour.",
  keywords: ["nettoyage dakar", "pressing dakar", "entretien villas dakar", "rufisque nettoyage", "pressing rufisque"],
  authors: [{ name: company.name }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: "https://a2etoileservice.sn",
    title: company.name,
    description: "L'excellence du nettoyage et de l'hygiène au Sénégal.",
    siteName: company.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-ocean-950 min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
        
        {/* Schema.org JSON-LD for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": company.name,
              "image": "https://a2etoileservice.sn/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Almadies",
                "addressLocality": "Dakar",
                "addressCountry": "SN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 14.7167,
                "longitude": -17.4677
              },
              "url": "https://a2etoileservice.sn",
              "telephone": company.phone,
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "07:30",
                  "closes": "19:00"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
