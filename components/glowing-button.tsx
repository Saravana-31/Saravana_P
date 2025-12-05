'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface GlowingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export default function GlowingButton({
  children,
  onClick,
  className,
  variant = 'default',
  size = 'default'
}: GlowingButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-300" />
      
      {/* Button */}
      <Button
        onClick={onClick}
        variant={variant}
        size={size}
        className={cn(
          "relative bg-black border-red-500/50 text-white hover:bg-red-950/50 transition-all duration-300",
          variant === 'outline' && "border-2 hover:border-red-400",
          className
        )}
      >
        {children}
      </Button>
    </motion.div>
  )
}
