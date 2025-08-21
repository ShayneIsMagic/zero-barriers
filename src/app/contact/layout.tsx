import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Zero Barriers | Start Your Revenue Growth Transformation',
  description: 'Ready to transform your revenue growth? Contact Zero Barriers for a free consultation. Our proven methodologies deliver rapid, substantial, and sustainable results. Schedule your transformation assessment today.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
