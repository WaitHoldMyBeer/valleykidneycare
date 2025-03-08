import { useAnimation, useInView } from "framer-motion"
import { ReactNode, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function AnimatedSection({ children, className = "" }: { children: ReactNode, className?: string }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn} className={className}>
      {children}
    </motion.div>
  )
}