'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import styles from './StatsSection.module.css'

const stats = [
  {
    value: '600%',
    label: 'Peak Growth Achieved',
    sublabel: 'Increase in average deal size - Strategic Sales & Marketing Company'
  },
  {
    value: '',
    label: 'Rapid, Substantial, Sustainable Growth',
    sublabel: ''
  },
  {
    value: '200+',
    label: 'Businesses Transformed',
    sublabel: 'Across 15+ industries'
  }
]

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.statsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className={styles.statCard}
              variants={fadeInUp}
            >
              {stat.value && (
                <div className={styles.statNumber}>{stat.value}</div>
              )}
              <div className={stat.value ? styles.statLabel : styles.statLabelProminent}>{stat.label}</div>
              {stat.sublabel && (
                <div className={styles.statSublabel}>{stat.sublabel}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}