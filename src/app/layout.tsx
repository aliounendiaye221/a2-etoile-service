import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { company, services } from "@/lib/site-content";
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
    default: `${company.name} | Entreprise de Nettoyage Professionnel à Dakar`,
    template: `%s | ${company.name}`,
  },
  description: "A2 ÉTOILE SERVICE, l'expert du nettoyage B2B et B2C au Sénégal. Nettoyage de bureaux, dératisation, traitement de sols et hygiène résidentielle de prestige à Dakar et Rufisque.",
  keywords: [
    "entreprise de nettoyage dakar", "société de nettoyage sénégal", "nettoyage industriel dakar",
    "pressing de luxe sénégal", "nettoyage bureaux rufisque", "entretien locaux dakar",
    "nettoyage après travaux", "dératisation dakar", "désinsectisation sénégal", "shampouinage moquette dakar"
  ],
  authors: [{ name: company.name }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    url: "https://a2etoileservice.sn",
    title: `${company.name} | Spécialiste du Nettoyage Premium Dakar`,
    description: "La référence du nettoyage pour les entreprises et résidences au Sénégal.",
    siteName: company.name,
    images: [{ url: '/hero-villa.webp', width: 1200, height: 630, alt: "A2 Etoile Service - Nettoyage Premium Dakar" }],
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
        
        {/* Schema.org JSON-LD for Local Business & B2B Ranking */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": company.name,
              "image": "https://a2etoileservice.sn/logo.png",
              "description": "Entreprise de nettoyage de référence au Sénégal, spécialisée dans l'hygiène B2B (bureaux, industrie) et l'entretien de villas d'exception (B2C) à Dakar et Rufisque.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Grand Dakar",
                "addressLocality": "Dakar",
                "addressRegion": "Dakar",
                "postalCode": "10000",
                "addressCountry": "SN"
              },
              "areaServed": [
                { "@type": "City", "name": "Dakar" },
                { "@type": "City", "name": "Rufisque" },
                { "@type": "City", "name": "Diamniadio" }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 14.7167,
                "longitude": -17.4677
              },
              "url": "https://a2etoileservice.sn",
              "telephone": company.phone,
              "email": company.email,
              "priceRange": "$$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "07:30",
                  "closes": "19:00"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services Premium",
                "itemListElement": services.map((s, index) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": s.title,
                    "description": s.description
                  },
                  "position": index + 1
                }))
              }
            })
          }}
        />
      </body>
    </html>
  );
}
