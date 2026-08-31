import { motion } from 'framer-motion'
import useReveal from '../hooks/useReveal'

// Wraps a section so it fades/slides in the first time it enters the
// viewport. Used once per section rather than per-card to keep motion
// deliberate instead of scattered.
export default function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
