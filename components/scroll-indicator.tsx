'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-red-500 to-pink-500 origin-left"
      style={{ width }}
    />
  )
}
