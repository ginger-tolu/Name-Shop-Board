import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shopnameboards.com'),
  title: "Shop Name Board Marketing Agency India | Acrylic, LED, ACP Signage Advertisement | Best Price ₹299+",
  description: "Leading marketing agency for shop name board advertisement across India. Acrylic boards ₹999+, LED glow sign boards ₹2999+, ACP 3D letters ₹1499+. Free installation & design. GSB, flex, vinyl, neon, wooden name boards for shops, restaurants, offices, hospitals. 15+ years experience, 5000+ happy customers.",
  keywords: "shop name board, name board manufacturers Delhi, acrylic name board price, LED glow sign board, ACP name board, GSB glow sign board, flex board printing, vinyl name board, 3D letter board, neon sign board, wooden name board, shop signage Delhi, business name plate, front lit back lit signage, channel letters, digital display board, shop board design, name board installation, signage manufacturers Gurgaon, name board Delhi NCR, shop name plate designs, acrylic board price Delhi, LED board manufacturers, signage company near me, custom name boards, shop branding solutions, name board for shop design, signage board price, glow sign board manufacturers, name board printing, shop sign makers Delhi, commercial signage Delhi, retail signage solutions, name board suppliers Delhi, acrylic signage manufacturers, LED signage Delhi, ACP board manufacturers, flex printing Delhi, vinyl signage, 3D acrylic letters, metal name plates, SS name board, brass name plate, aluminium signage, shop name board ideas, name board designs for shops, signage for restaurants, hospital name boards, office signage, clinic name board, pharmacy signage, mall signage, showroom name boards, name board with logo, illuminated name boards, non lit name boards, edge lit acrylic boards, halo lit letters, front lit channel letters, back lit signage, digital LED boards, neon flex boards, wooden signage for cafes, MDF name boards, flanges signage, arch gate branding, inshop branding, pylon signs, totem signs, backlit clip frames, name board installation Delhi, signage repair services, name board maintenance, custom signage design, professional signage solutions, name board quotation, signage price list, name board cost Delhi, affordable name boards, premium signage, luxury name boards, budget signage solutions, name board materials, signage types, name board options, best signage company Delhi, top name board manufacturers, signage experts Delhi, name board specialists, custom shop signs, business signage Delhi, corporate name boards, retail name boards, commercial name plates",
  authors: [{ name: "Shop Name Boards" }],
  creator: "Shop Name Boards",
  publisher: "Shop Name Boards",
  category: "Business Services",
  classification: "Signage and Name Board Manufacturing",
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "13.1084;77.5505",
    "ICBM": "13.1084, 77.5505"
  },
  openGraph: {
    title: "Best Shop Name Board Marketing Agency India | Acrylic LED ACP Signage Advertisement ₹299+",
    description: "Top rated marketing agency for name board advertisement across India. Acrylic, LED, ACP, GSB, flex, vinyl signage. Free design & installation. 15+ years experience.",
    url: "https://www.shopnameboards.com",
    siteName: "Shop Name Boards",
    images: [
      {
        url: "/og-shop-name-boards-delhi.svg",
        width: 1200,
        height: 630,
        alt: "Shop Name Board Marketing Agency India - Acrylic LED ACP Signage Advertisement Solutions",
        type: "image/svg+xml",
      },
    ],
    locale: "en_IN",
    type: "website",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Name Boards | Acrylic LED ACP Signage Marketing Agency",
    description: "Best marketing agency for name board advertisement in India. Acrylic ₹999+, LED ₹2999+, ACP ₹1499+. Free installation.",
    images: ["/twitter-shop-name-boards.svg"],
    creator: "@shopnameboards"
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
  alternates: {
    canonical: "https://www.shopnameboards.com",
    languages: {
      'en-IN': 'https://www.shopnameboards.com',
      'hi-IN': 'https://www.shopnameboards.com/hi'
    }
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      'msvalidate.01': 'your-bing-verification-code'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shop Name Boards" />
        <link rel="apple-touch-icon" href="/apple-icon-180x180.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/icon-192x192.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/icon-192x192.svg" />
        <link type="text/plain" rel="author" href="/humans.txt" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
