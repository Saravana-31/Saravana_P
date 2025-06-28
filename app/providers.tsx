"use client"

import type React from "react"

import { EmailJSScript } from "@/lib/emailjs"
import { motion, AnimatePresence } from "framer-motion"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EmailJSScript />
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
