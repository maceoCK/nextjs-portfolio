import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "./components/analytics";
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: "Maceo Cardinale Kwik",
    template: "%s | Maceo Cardinale Kwik",
  },
  description: "Computer Science student at Virginia Tech specializing in web development and AI",
  metadataBase: new URL('https://maceock.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Maceo Cardinale Kwik",
    description: "Computer Science student at Virginia Tech specializing in web development and AI",
    url: "https://maceock.me",
    siteName: "Maceo Cardinale Kwik",
    images: [
      {
        url: "https://maceock.me/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Maceo Cardinale Kwik",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Maceo Cardinale Kwik',
              url: 'https://maceock.me',
              sameAs: [
                'https://github.com/maceock',
                'https://www.linkedin.com/in/maceo-cardinale-kwik/',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
