import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newlookpaving.com"),
  title: {
    default: "New Look Paving & Masonry | Fredericksburg VA",
    template: "%s | New Look Paving & Masonry",
  },
  description:
    "Professional paving, masonry, roofing, and siding services in Fredericksburg, VA. Quality craftsmanship for driveways, patios, retaining walls, and more. Free estimates available!",
  keywords: [
    "paving",
    "masonry",
    "roofing",
    "siding",
    "driveways",
    "patios",
    "Fredericksburg VA",
    "retaining walls",
    "hardscaping",
  ],
  authors: [{ name: "New Look Paving & Masonry" }],
  creator: "New Look Paving & Masonry",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://newlookpaving.com",
    siteName: "New Look Paving & Masonry",
    title: "New Look Paving & Masonry | Quality Craftsmanship",
    description:
      "Transform your exterior with professional paving, masonry, roofing, and siding services. Serving Fredericksburg, VA and surrounding areas.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "New Look Paving & Masonry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Look Paving & Masonry",
    description:
      "Professional paving, masonry, roofing, and siding services in Fredericksburg, VA.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" href="/images/gallery/newlook-logo1.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "New Look Paving & Masonry",
              image: "https://newlookpaving.com/images/logo.png",
              "@id": "https://newlookpaving.com",
              url: "https://newlookpaving.com",
              telephone: "703-725-3110",
              email: "contact.newlookpavingandmasonry@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2215 Plank Rd",
                addressLocality: "Fredericksburg",
                addressRegion: "VA",
                postalCode: "22401",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.3032,
                longitude: -77.4605,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "16:00",
                },
              ],
              sameAs: [],
              priceRange: "$$",
              areaServed: [
                "Fredericksburg, VA",
                "Stafford, VA",
                "Spotsylvania, VA",
                "King George, VA",
                "Caroline County, VA",
              ],
              serviceType: [
                "Paving",
                "Masonry",
                "Roofing",
                "Siding",
                "Driveways",
                "Patios",
                "Retaining Walls",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
