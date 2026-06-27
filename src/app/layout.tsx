import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Suspense } from 'react'
import '../styles/globals.css'
import '../styles/page-colors.css'
import '../assets/icons/fontawesome-webkit/css/all.min.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { Analytics } from '../components/Analytics'
import { UmamiScript } from '../components/UmamiScript'
import { ServiceWorkerCleanup } from '../components/ServiceWorkerCleanup'
import { CopyWatermark } from '../components/CopyWatermark'

const poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zerobarriers.io'),
  title:
    'Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
  description:
    'We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
  keywords:
    'revenue growth, profitable revenue growth, revenue generation, business transformation, revenue growth consulting, business consulting, revenue acceleration, sales optimization, revenue operations, RevOps, strategic consulting, growth strategy, revenue transformation, technology enablement, CRM optimization, revenue growth services, revenue growth methodology, business scaling, revenue systems, management consulting, business advisory, profit optimization, revenue profitability, growth consulting, revenue performance',
  authors: [{ name: 'Zero Barriers' }],
  creator: 'Zero Barriers',
  publisher: 'Zero Barriers',
  alternates: {
    canonical: 'https://zerobarriers.io',
  },
  icons: {
    icon: [{ url: '/images/zero-barriers-logo.png', type: 'image/png' }],
    shortcut: '/images/zero-barriers-logo.png',
    apple: '/images/zero-barriers-logo.png',
  },
  openGraph: {
    title:
      'Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
    description:
      'We dominate profitable revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
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
    title:
      'Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results',
    description:
      'We dominate profitable revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
    images: ['https://zerobarriers.io/images/twitter-card.jpg'],
  },
  robots:
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zero Barriers',
  url: 'https://zerobarriers.io',
  logo: 'https://zerobarriers.io/images/zero-barriers-logo.png',
  description:
    'Zero Barriers - Revenue Growth Consultancy specializing in profitable revenue growth. We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Utah',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'sk@zerobarriers.io',
    telephone: '+1-801-997-0457',
    url: 'https://zerobarriers.io/contact',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/zerobarriers',
    'https://www.facebook.com/zerobarriers',
    'https://www.instagram.com/zerobarriersinc',
    'https://twitter.com/zerobarriers',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '6',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zero Barriers',
  url: 'https://zerobarriers.io',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://zerobarriers.io/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Revenue Growth Consulting',
  provider: {
    '@type': 'Organization',
    name: 'Zero Barriers',
    url: 'https://zerobarriers.io',
  },
  description:
    'Zero Barriers delivers profitable revenue growth through proven methodologies including human transformation, technology enablement, revenue acceleration, strategic consulting, and team training. We provide rapid, substantial, and sustainable revenue growth solutions for businesses.',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Revenue Growth Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Human Transformation',
          description:
            'Purpose-driven revenue growth methodologies and proprietary frameworks',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technology Enablement',
          description:
            'Salesforce CRM solutions and custom software development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Revenue Acceleration',
          description:
            'Sales process optimization and KPI-driven performance management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strategic Consulting',
          description: 'Growth strategy development and organizational design',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Team Training',
          description:
            'Sales training, leadership development, and process adoption',
        },
      },
    ],
  },
}

const structuredData = [organizationSchema, websiteSchema, serviceSchema]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  const umamiConfigured =
    umamiScriptUrl &&
    umamiWebsiteId &&
    umamiWebsiteId !== 'your_umami_website_id_here'

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {umamiConfigured && (
          <UmamiScript scriptUrl={umamiScriptUrl} websiteId={umamiWebsiteId} />
        )}
      </head>
      <body className={`${poppins.variable} ${poppins.className}`} suppressHydrationWarning>
        <ServiceWorkerCleanup />
        <CopyWatermark />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
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
