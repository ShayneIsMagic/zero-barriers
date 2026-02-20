// Animation Variants
import { Variants } from 'framer-motion'

export interface AnimationConfig {
  duration: number
  delay?: number
  ease?: string | number[]
}

// Stats
export interface Stat {
  value: number | string
  suffix?: string
  label: string
  sublabel?: string
}

// Methodology Phase
export interface Phase {
  id: number
  title: string
  description: string
  details: string[]
  outcome: string
  color: string
  imageSrc: string
}

// Testimonial
export interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  industry?: string
  result?: {
    value: string
    label: string
    timeline?: string
  }
  imageSrc: string
}

// Service Pillar
export interface ServicePillar {
  id: string
  title: string
  subtitle: string
  description: string
  frameworks: string[]
  stat: { value: string; label: string }
  link: string
  color: string
}

// Technology Division
export interface TechDivision {
  title: string
  subtitle: string
  description: string
  features: string[]
  stat: {
    value: string
    label: string
  }
  logoSrc: string
  ctaText: string
  ctaLink: string
  backgroundColor: string
  patternSrc?: string
}

// Credibility Item
export interface CredibilityItem {
  icon: string
  label: string
}

// Component Props
export interface ComponentWithChildren {
  children: React.ReactNode
  className?: string
}

export interface ComponentWithIndex {
  index: number
}