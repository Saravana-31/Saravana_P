'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Code } from 'lucide-react'
import TypewriterText from '@/components/typewriter-text'
import GlowingButton from '@/components/glowing-button'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Safety for window usage
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1080

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            initial={{
              x: Math.random() * windowWidth,
              y: Math.random() * windowHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Initializing Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-red-400 font-mono text-sm tracking-wider"
          >
            {'<INITIALIZING />'}
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl lg:text-8xl font-bold text-white tracking-tight flex items-center gap-2"
            >
              SARAVANA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500"> P</span>
            </motion.h1>

            <div className="font-mono text-2xl md:text-4xl bg-gradient-to-r from-red-400 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg py-2 flex items-center">
              <TypewriterText
                texts={[
                  "FULL STACK DEVELOPER",
                  "AI ENTHUSIAST",
                  "ASPIRING MACHINE LEARNING ENGINEER",
                  "TECH EXPLORER"
                ]}
                speed={100}
                deleteSpeed={50}
                delayBetweenTexts={2000}
              />
              <span className="animate-pulse ml-2 text-red-400">|</span>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-300 leading-relaxed max-w-2xl"
          >
            I bridge the gap between{' '}
            <span className="text-red-400 font-semibold">software and intelligence</span>
            —making machines think, adapt, and respond like humans. Specialized in building cutting-edge
            applications from{' '}
            <span className="text-pink-400 font-semibold">AI Chatbots</span> to{' '}
            <span className="text-pink-400 font-semibold">Real-time Auction Platforms</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <GlowingButton
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const link = document.createElement('a')
                  link.href = '/resume.pdf'
                  link.download = 'Saravana_P_Resume.pdf'
                  link.click()
                }
              }}
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
            >
              <Download className="w-5 h-5 mr-2" />
              DOWNLOAD NEURAL_CV.exe
            </GlowingButton>
            <div className="flex gap-3">
              <GlowingButton
                onClick={() => typeof window !== 'undefined' && window.open('https://github.com/Saravana-31', '_blank')}
                variant="outline"
                size="icon"
              >
                <Github className="w-5 h-5" />
              </GlowingButton>
              <GlowingButton
                onClick={() => typeof window !== 'undefined' && window.open('https://linkedin.com/in/saravana-p-kec', '_blank')}
                variant="outline"
                size="icon"
              >
                <Linkedin className="w-5 h-5" />
              </GlowingButton>
              <GlowingButton
                onClick={() => typeof window !== 'undefined' && window.open('https://leetcode.com/Saravana_P', '_blank')}
                variant="outline"
                size="icon"
              >
                <Code className="w-5 h-5" />
              </GlowingButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content: Profile Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glowing Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-red-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-black" />
            </motion.div>

            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-red-500/50 shadow-2xl shadow-red-500/25"
            >
              <img
                src="/Saravana.jpg"
                alt="Saravana P"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full blur-sm opacity-75"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full blur-sm opacity-75"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400"
        >
          <span className="text-sm font-mono">SCROLL_DOWN</span>
          <div className="w-6 h-10 border-2 border-red-500/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-red-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
