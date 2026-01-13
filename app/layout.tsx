import { Toaster } from "@/components/ui/sonner";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ryukyukan India | Traditional Okinawan Karate",
    template: "%s | Ryukyukan India",
  },
  description:
    "Ryukyukan India is a traditional Okinawan Karate organization promoting authentic martial arts training, discipline, and self-defense across India.",
  icons: {
    icon: "/logo.png",
  },
  keywords: [
    "Ryukyukan India",
    "Ryukyukan Karate",
    "Shorinryu Karate India",
    "Okinawan Karate India",
    "Traditional Karate India",
    "Martial Arts India",
  ],
  authors: [{ name: "Ryukyukan India" }],
  metadataBase: new URL("https://ryukyukan-india.com"),
  openGraph: {
    title: "Ryukyukan India | Traditional Okinawan Karate",
    description:
      "Official Ryukyukan India website – preserving authentic Okinawan Karate traditions.",
    url: "https://ryukyukan-india.com",
    siteName: "Ryukyukan India",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Oswald:wght@400;500;600&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz@0,14..32;1,14..32&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-scroll`}
      >
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
