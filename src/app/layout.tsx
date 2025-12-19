import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'
import '../styles/page-colors.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { Analytics } from '../components/Analytics'
import { GTM } from '../components/GTM'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zerobarriers.io'),
  title: 'Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
  description: 'We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
  keywords: 'revenue growth, profitable revenue growth, revenue generation, business transformation, revenue growth consulting, business consulting, revenue acceleration, sales optimization, revenue operations, RevOps, strategic consulting, growth strategy, revenue transformation, technology enablement, CRM optimization, revenue growth services, revenue growth methodology, business scaling, revenue systems, management consulting, business advisory, profit optimization, revenue profitability, growth consulting, revenue performance',
  authors: [{ name: 'Zero Barriers' }],
  creator: 'Zero Barriers',
  publisher: 'Zero Barriers',
  alternates: {
    canonical: 'https://zerobarriers.io',
  },
  icons: {
      icon: '/images/zero-barriers-logo.png',
  },
  openGraph: {
    title: 'Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
    description: 'We dominate profitable revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
    url: 'https://zerobarriers.io',
    siteName: 'Zero Barriers',
    images: [
      {
        url: 'https://zerobarriers.io/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zero Barriers Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zerobarriers',
    creator: '@zerobarriers',
    title: 'Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
    description: 'We dominate profitable revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
    images: ['https://zerobarriers.io/images/twitter-card.jpg'],
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Zero Barriers',
  },
}

export const viewport: Viewport = {
  themeColor: '#7cc347',
  width: 'device-width',
  initialScale: 1,
}

// Enhanced Structured Data for SEO (Web 3/Web 4 compatible)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zero Barriers",
  "url": "https://zerobarriers.io",
      "logo": "https://zerobarriers.io/images/zero-barriers-logo.png",
  "description": "Zero Barriers - Revenue Growth Consultancy specializing in profitable revenue growth. We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Utah",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "sk@zerobarriers.io",
    "telephone": "+1-801-997-0457",
    "url": "https://zerobarriers.io/contact",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/zerobarriers",
    "https://www.facebook.com/zerobarriers",
    "https://www.instagram.com/zerobarriersinc",
    "https://twitter.com/zerobarriers"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "6"
  }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zero Barriers",
  "url": "https://zerobarriers.io",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://zerobarriers.io/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Revenue Growth Consulting",
  "provider": {
    "@type": "Organization",
    "name": "Zero Barriers",
    "url": "https://zerobarriers.io"
  },
  "description": "Zero Barriers delivers profitable revenue growth through proven methodologies including human transformation, technology enablement, revenue acceleration, strategic consulting, and team training. We provide rapid, substantial, and sustainable revenue growth solutions for businesses.",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Revenue Growth Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Human Transformation",
          "description": "Purpose-driven revenue growth methodologies and proprietary frameworks"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technology Enablement",
          "description": "Salesforce CRM solutions and custom software development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Revenue Acceleration",
          "description": "Sales process optimization and KPI-driven performance management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Strategic Consulting",
          "description": "Growth strategy development and organizational design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Team Training",
          "description": "Sales training, leadership development, and process adoption"
        }
      }
    ]
  }
}

const structuredData = [organizationSchema, websiteSchema, serviceSchema]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={poppins.variable} suppressHydrationWarning>
        <GTM />
        <Analytics />
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
