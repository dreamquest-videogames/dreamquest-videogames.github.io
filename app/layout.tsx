import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import content from "../public/content.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords:
    "retro games, buy sell video games, used games, PS5, Xbox, Nintendo Switch, Atari, NES, SNES, N64, PS1, PS2, console repair, disc resurfacing",
  openGraph: {
    title: content.businessName,
    description: content.seo.ogDescription,
    url: "https://dreamquestvideogames.com",
    siteName: content.businessName,
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: `${content.businessName} — ${content.mascot}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.businessName,
    description: content.seo.ogDescription,
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: content.businessName,
  description:
    "Retro and modern video game store offering buy/sell services, accessories, console reconditioning, and disc resurfacing.",
  image: "/logo.jpg",
  priceRange: "$$",
  telephone: content.phoneLink,
  address: {
    "@type": "PostalAddress",
    streetAddress: content.address.street,
    addressLocality: content.address.city,
    addressRegion: content.address.state,
    addressCountry: "US",
  },
  openingHours: ["Mo-Tu 11:00-19:00", "Th-Su 11:00-19:00"],
  sameAs: [
    content.social.facebook.url,
    content.social.instagram.url,
    content.social.bluesky.url,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${pressStart2P.variable} antialiased`}
        style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
