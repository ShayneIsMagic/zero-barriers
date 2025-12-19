'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import styles from './ValueProposition.module.css'

export default function ValueProposition() {
  return (
    <section className={styles.valueProposition}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 
            className={styles.headline}
            variants={fadeInUp}
          >
            Expert-Led Transformation.<br />
            Breakthrough Results.
          </motion.h2>
          
          <motion.p 
            className={styles.description}
            variants={fadeInUp}
          >
            We don't just consult—we transform. Our deep expertise combines innovative strategies with proven frameworks to eliminate revenue barriers and unleash your business potential. Every client is different—we tailor our approach to your unique industry, starting point, and goals.
          </motion.p>

          <motion.div 
            className={styles.proofBadges}
            variants={fadeInUp}
          >
            <motion.span 
              className={styles.badge}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-users"></i>
              <span>200+ Businesses Transformed</span>
            </motion.span>
            <motion.span 
              className={styles.badge}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-industry"></i>
              <span>15+ Industries Served</span>
            </motion.span>
            <motion.span 
              className={styles.badge}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-trophy"></i>
              <span>Expert-Led Results</span>
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}