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
    "Off-line and Off-grid messaging platform for a new era of secure communications. Connect people and things without using the internet.",
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
