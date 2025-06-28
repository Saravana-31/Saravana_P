"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code2, MessageSquare } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Hello, it&apos;s Me</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Saravana P</h2>
          <h3 className="text-xl md:text-2xl font-medium mb-6">
            And I&apos;m a <span className="text-cyan-400">Full Stack Developer & AI Enthusiast</span>
          </h3>
          <p className="text-gray-300 mb-8 max-w-lg">
            I specialize in building intelligent applications like AI Chatbots, Resume Scoring Systems, and Full Stack
            Auction Platforms. Passionate about blending machine learning with robust software engineering.
          </p>

          <div className="flex space-x-4 mb-8">
            <Link
              href="https://linkedin.com/in/saravana-p-kec"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Saravana-31"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://leetcode.com/Saravana_P"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all"
            >
              <Code2 size={20} />
              <span className="sr-only">LeetCode</span>
            </Link>
            <Link
              href="#contact"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all"
            >
              <MessageSquare size={20} />
              <span className="sr-only">Contact</span>
            </Link>
          </div>

          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-8 py-6" asChild>
            <Link href="/Resume.pdf" target="_blank" download>
              Download CV
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full"></div>
            <div className="hexagon-container">
              <div className="hexagon">
                <img
                  src="/Saravana.jpg?height=400&width=400"
                  alt="Saravana P"
                  className="hexagon-image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
