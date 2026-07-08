import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function AnimatedCounter({ to, suffix = '', prefix = '', duration = 1.4 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 })
  const rounded = useTransform(spring, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) motionVal.set(to)
  }, [isInView, to, motionVal])

  return (
    <span ref={ref} className="mono">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
