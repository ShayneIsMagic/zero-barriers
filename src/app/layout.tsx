import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results",
  description: "We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.",
  keywords: "revenue growth, rapid growth, substantial growth, sustainable growth, revenue generation, rev gen, business transformation, sales optimization, revenue acceleration, human transformation, technology enablement, business consulting, growth strategy, sales methodology, purpose-driven business, revenue growth consultancy, business breakthrough, sales process optimization, KPI management, continuous improvement, organizational development, leadership development, team alignment, strategic consulting, revenue operations, RevOps, sales training, customer success, business scaling, revenue systems, growth engineering, business barriers, transformation assessment, revenue growth methodology, rapid revenue growth, substantial revenue growth, sustainable revenue growth, revenue growth consulting, revenue growth services, SalesforceConsultants.io, DevPipeline, custom software development, Salesforce implementation, CRM optimization, workflow management, integration, automation, technology partnerships",
  authors: [{ name: "Zero Barriers" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    url: "https://zerobarriers.io",
    title: "Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results",
    description: "We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.",
    images: [
      {
        url: "https://zerobarriers.io/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zero Barriers - Revenue Growth Transformation",
      },
    ],
    siteName: "Zero Barriers",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zerobarriers",
    title: "Zero Barriers - Revenue Growth Transformation | Rapid, Substantial, Sustainable Results",
    description: "We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.",
    images: ["https://zerobarriers.io/images/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://zerobarriers.io",
    types: {
      "application/rss+xml": "https://zerobarriers.io/rss.xml",
      "application/json": "https://zerobarriers.io/feed.json",
    },
  },
  other: {
    "revisit-after": "7 days",
    distribution: "global",
    rating: "general",
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
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://analytics.google.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for additional performance */}
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YHS2Y7L3C9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YHS2Y7L3C9', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
            console.log('Google Analytics initialized with ID: G-YHS2Y7L3C9');
          `}
        </Script>

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zero Barriers",
              "url": "https://zerobarriers.io",
              "logo": "https://zerobarriers.io/zblogo.png",
              "description": "Zero Barriers - Revenue Growth Consultancy. We dominate revenue growth with proven methodologies that deliver rapid, substantial, and sustainable results. Expert revenue generation and business transformation services.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://zerobarriers.io/contact"
              },
              "sameAs": [
                "https://www.linkedin.com/company/zero-barriers",
                "https://twitter.com/zerobarriers"
              ],
              "serviceType": [
                "Revenue Growth Consulting",
                "Rapid Revenue Growth",
                "Substantial Revenue Growth",
                "Sustainable Revenue Growth",
                "Revenue Generation",
                "Business Transformation",
                "Sales Optimization",
                "Revenue Acceleration"
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
