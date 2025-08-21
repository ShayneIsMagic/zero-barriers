import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Zero Barriers - Human Transformation, Technology Enablement & Revenue Acceleration',
  description: 'Zero Barriers Services: Human Transformation methodologies, Technology Enablement solutions, and Revenue Acceleration systems. Achieve rapid, substantial, sustainable growth through our proven four-phase methodology.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
