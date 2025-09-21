import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
  structuredData?: object
}

export function SEOHead({
  title = "Prathamesh Sanjay Pawar | Data Analyst & Data Scientist",
  description = "Portfolio of Prathamesh Sanjay Pawar - Data Analyst & Data Scientist specializing in machine learning, data visualization, and business intelligence.",
  keywords = ["Data Analyst", "Data Scientist", "Machine Learning", "Python", "SQL", "Tableau", "Power BI"],
  ogImage = "/og-image.jpg",
  canonicalUrl,
  structuredData,
}: SEOHeadProps) {
  const jsonLd = structuredData || {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prathamesh Sanjay Pawar",
    jobTitle: "Data Analyst & Data Scientist",
    description: description,
    url: canonicalUrl || "https://prathamesh-portfolio.vercel.app",
    sameAs: ["https://linkedin.com/in/prathamesh095", "https://github.com/prathamesh095"],
    knowsAbout: keywords,
    alumniOf: "Your University",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//vercel.live" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  )
}
