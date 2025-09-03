import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Ridhi Bhatia - Portfolio",
  description: "Computer Science Engineer | Web Developer | AI Enthusiast",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${spaceGrotesk.variable};
  --font-serif: ${dmSans.variable};
}
        `}</style>
      </head>
      <Analytics />
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
