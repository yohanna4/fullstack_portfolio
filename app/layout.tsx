import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yohanna Yimer - Full-Stack Developer",
  description:
    "Experienced Full-Stack Software Developer specializing in React, Next.js, Node.js, and modern web technologies. Building high-performance, SEO-optimized applications.",
  keywords: "Full-Stack Developer, React, Next.js, Node.js, TypeScript, Web Development, Software Engineer",
  authors: [{ name: "Yohanna Yimer" }],
  openGraph: {
    title: "Yohanna Yimer - Full-Stack Developer",
    description: "Experienced Full-Stack Software Developer specializing in modern web technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yohanna Yimer - Full-Stack Developer",
    description: "Experienced Full-Stack Software Developer specializing in modern web technologies",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
