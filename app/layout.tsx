import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { PageLoader } from "@/components/loading-spinner"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Prathamesh Sanjay Pawar | Data Analyst & Data Scientist",
  description:
    "Portfolio of Prathamesh Sanjay Pawar - Data Analyst & Data Scientist specializing in machine learning, data visualization, and business intelligence.",
  keywords: ["Data Analyst", "Data Scientist", "Machine Learning", "Python", "SQL", "Tableau", "Power BI"],
  authors: [{ name: "Prathamesh Sanjay Pawar" }],
  creator: "Prathamesh Sanjay Pawar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prathamesh-portfolio.vercel.app",
    title: "Prathamesh Sanjay Pawar | Data Analyst & Data Scientist",
    description: "Portfolio showcasing data science projects, machine learning models, and interactive dashboards.",
    siteName: "Prathamesh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathamesh Sanjay Pawar | Data Analyst & Data Scientist",
    description: "Portfolio showcasing data science projects, machine learning models, and interactive dashboards.",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//vercel.live" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<PageLoader />}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
