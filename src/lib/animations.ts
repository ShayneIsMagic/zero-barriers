import { Variants } from 'framer-motion'

// Basic Animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.6, 0.05, 0.01, 0.9] 
    }
  }
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Scale Animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.34, 1.56, 0.64, 1] // Bounce ease
    }
  }
}

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
      type: 'spring',
      stiffness: 100
    }
  }
}

// Container Animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

// Expand/Collapse
export const expandHeight: Variants = {
  hidden: { 
    height: 0, 
    opacity: 0,
    overflow: 'hidden'
  },
  visible: {
    height: 'auto',
    opacity: 1,
    overflow: 'hidden',
    transition: { 
      duration: 0.4, 
      ease: 'easeOut' 
    }
  },
  exit: {
    height: 0,
    opacity: 0,
    overflow: 'hidden',
    transition: { 
      duration: 0.3, 
      ease: 'easeIn' 
    }
  }
}

// Continuous Animations (use with animate prop)
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

export const float = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

export const glow = {
  boxShadow: [
    '0 0 20px rgba(255, 213, 79, 0.3)',
    '0 0 40px rgba(255, 213, 79, 0.6)',
    '0 0 20px rgba(255, 213, 79, 0.3)'
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
}

// Viewport Options (for whileInView)
export const viewportOnce = {
  once: true,
  amount: 0.3 as const
}

export const viewportRepeat = {
  once: false,
  amount: 0.5 as const
}

// Helper function to create custom delays
export const createDelayedVariant = (
  baseVariant: Variants,
  delay: number
): Variants => {
  return {
    hidden: baseVariant.hidden,
    visible: {
      ...baseVariant.visible,
      transition: {
        ...(baseVariant.visible as any).transition,
        delay
      }
    }
  }
}