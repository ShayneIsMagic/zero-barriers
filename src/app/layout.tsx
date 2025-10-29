import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zerobarriers.io'),
  title: 'Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
  description: 'We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
  keywords: 'revenue growth, rapid growth, substantial growth, sustainable growth, revenue generation, rev gen, business transformation, sales optimization, revenue acceleration, human transformation, technology enablement, business consulting, growth strategy, sales methodology, purpose-driven business, revenue growth consultancy, business breakthrough, sales process optimization, KPI management, continuous improvement, organizational development, leadership development, team alignment, strategic consulting, revenue operations, RevOps, sales training, customer success, business scaling, revenue systems, growth engineering, business barriers, transformation assessment, revenue growth methodology, rapid revenue growth, substantial revenue growth, sustainable revenue growth, revenue growth consulting, revenue growth services, SalesforceConsultants.io, DevPipeline, custom software development, Salesforce implementation, CRM optimization, workflow management, integration, automation, technology partnerships',
  authors: [{ name: 'Zero Barriers' }],
  creator: 'Zero Barriers',
  publisher: 'Zero Barriers',
  alternates: {
    canonical: 'https://zerobarriers.io',
  },
  icons: {
    icon: '/images/zblogo.png',
  },
  openGraph: {
    title: 'Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
    description: 'We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
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
    description: 'We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zero Barriers",
  "url": "https://zerobarriers.io",
  "logo": "/images/zblogo.png",
  "description": "Zero Barriers - Revenue Growth Consultancy. We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Utah",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://zerobarriers.io/contact"
  },
  "sameAs": [
    "https://www.linkedin.com/company/zero-barriers-io/",
    "https://twitter.com/zerobarriers"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={poppins.variable} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
