import type React from "react"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { FrequencyBanner } from "@/components/frequency-banner"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "West Coast Mesh - Decentralized Mesh Networking",
  description:
    "Reliable, decentralized, encrypted communications you can use today. No cell, internet, or power needed. Join our community-driven LoRa mesh network.",
  keywords: [
    "mesh networking",
    "LoRa",
    "decentralized communication",
    "off-grid messaging",
    "encrypted communications",
    "West Coast Mesh",
    "WCM",
    "MeshCore",
    "emergency communications",
    "peer-to-peer network",
  ],
  authors: [{ name: "West Coast Mesh Community" }],
  creator: "West Coast Mesh",
  publisher: "West Coast Mesh",
  metadataBase: new URL("https://wcmesh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wcmesh.com",
    title: "West Coast Mesh - Decentralized Mesh Networking",
    description:
      "Reliable, decentralized, encrypted communications you can use today. No cell, internet, or power needed. Join our community-driven LoRa mesh network.",
    siteName: "West Coast Mesh",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Coast Mesh - Decentralized Mesh Networking",
    description:
      "Reliable, decentralized, encrypted communications you can use today. No cell, internet, or power needed. Join our community-driven LoRa mesh network.",
    creator: "@wcmesh",
    site: "@wcmesh",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} font-mono antialiased`}>
        <FrequencyBanner />
        <div className="pt-12 sm:pt-14">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
