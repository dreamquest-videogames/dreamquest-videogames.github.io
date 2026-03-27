import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

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
  title: "Dream Quest Video Games | Buy & Sell Retro & Modern Games",
  description:
    "Dream Quest Video Games — your destination for retro and modern video games, accessories, anime collectibles, console reconditioning, and disc resurfacing. Keeping Score Since '24.",
  keywords:
    "retro games, buy sell video games, used games, PS5, Xbox, Nintendo Switch, Atari, NES, SNES, N64, PS1, PS2, anime collectibles, console repair, disc resurfacing",
  openGraph: {
    title: "Dream Quest Video Games",
    description:
      "Retro & modern games, accessories, anime collectibles, and console reconditioning. Keeping Score Since '24.",
    url: "https://dreamquestvideogames.com",
    siteName: "Dream Quest Video Games",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Dream Quest Video Games — Valerie the Viking",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Quest Video Games",
    description: "Retro & modern games. Keeping Score Since '24.",
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
  name: "Dream Quest Video Games",
  description:
    "Retro and modern video game store offering buy/sell services, accessories, anime collectibles, console reconditioning, and disc resurfacing.",
  image: "/logo.jpg",
  priceRange: "$$",
  telephone: "+13606202354",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19425 7th Ave. NE Suite 117",
    addressLocality: "Poulsbo",
    addressRegion: "WA",
    addressCountry: "US",
  },
  openingHours: ["Mo-Tu 11:00-19:00", "Th-Su 11:00-19:00"],
  sameAs: [
    "https://www.facebook.com/dreamquestpoulsbo/",
    "https://www.instagram.com/dreamquestgames/",
    "https://bsky.app/profile/dreamquestgames.bsky.social",
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
        className={`${inter.variable} ${pressStart2P.variable} antialiased bg-[#0A0E14] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
