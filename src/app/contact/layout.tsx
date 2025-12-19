import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Zero Barriers – Start Your Transformation',
  description:
    'Contact Zero Barriers for a free consultation. Start eliminating barriers and achieving rapid, substantial, sustainable growth.',
  alternates: { canonical: 'https://zerobarriers.io/contact' },
  openGraph: {
    title: 'Contact | Zero Barriers',
    description:
      'Schedule your free consultation to start eliminating barriers to growth.',
    url: 'https://zerobarriers.io/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Zero Barriers',
    description:
      'Schedule your free consultation to start eliminating barriers to growth.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



