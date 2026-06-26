import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Results | Zero Barriers – Gap → Bridge → Results',
  description:
    'Real businesses. Real breakthroughs. Detailed case studies showcasing how purpose-driven transformation delivers rapid, substantial, and sustainable results.',
  alternates: { canonical: 'https://zerobarriers.io/results' },
  openGraph: {
    title: 'Results | Zero Barriers',
    description:
      'Gap → Bridge → Results: Detailed transformation stories from Zero Barriers clients showing measurable outcomes.',
    url: 'https://zerobarriers.io/results',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Results | Zero Barriers',
    description:
      'Gap → Bridge → Results: Detailed transformation stories from Zero Barriers clients showing measurable outcomes.',
  },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
