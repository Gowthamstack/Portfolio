import { motion } from 'framer-motion'

// Small react-bits-style primitive: fades + rises content into view once,
// staggered by `delay`. Respects prefers-reduced-motion via CSS override.
export default function ScrollReveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
