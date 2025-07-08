"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code2, MessageSquare, Download, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const CyberHero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/saravana-p-kec", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Saravana-31", label: "GitHub" },
    { icon: Code2, href: "https://leetcode.com/Saravana_P", label: "LeetCode" },
    { icon: MessageSquare, href: "#contact", label: "Contact" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="cyber-hexagon-1"></div>
        <div className="cyber-hexagon-2"></div>
        <div className="cyber-hexagon-3"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}  
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* <h1 className="text-2xl md:text-3xl font-orbitron text-gray-400 mb-2">
                {"<"}
                <span className="text-red-500">INITIALIZING</span>
                {" />"}
              </h1> */}
              <h2 className="text-5xl md:text-7xl font-bold font-orbitron text-white mb-4 leading-tight">
                SARAVANA
                <span className="block text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text">
                  PRASHANTH KUMAR
                </span>
              </h2>
              <div className="flex items-center space-x-2 text-xl md:text-2xl font-orbitron">
                <span className="text-gray-400">🎗️</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-red-400 font-bold"
                >
                  FULL STACK DEV & AI ARCHITECT
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed max-w-2xl"
            >
              I bridge the gap between <span className="text-red-400 font-semibold">software and intelligence</span>
              —making machines think, adapt, and respond like humans. Specialized in building cutting-edge applications
              from
              <span className="text-pink-400 font-semibold"> AI Chatbots</span> to
              <span className="text-purple-400 font-semibold"> Real-time Auction Platforms</span>.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                >
                  <Link
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative p-3 bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-lg hover:border-red-500/60 transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" />
                    <div className="absolute inset-0 bg-red-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button
                asChild
                className="group relative bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-orbitron font-bold px-8 py-6 text-lg rounded-lg border-0 overflow-hidden"
              >
                <Link href="/resume.pdf" target="_blank" download>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="absolute inset-0 bg-red-500/20 blur-xl group-hover:bg-red-400/30 transition-all"></div>
                  <Download className="w-5 h-5 mr-2" />
                  DOWNLOAD NEURAL_CV.exe
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Avatar/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer Rotating Ring */}
              <div className="absolute inset-0 border-2 border-red-500/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border border-pink-500/20 rounded-full animate-spin-reverse"></div>

              {/* Central Avatar Container */}
              <div className="absolute inset-8 bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-red-500/20 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  {/* Placeholder for profile image */}
                  <Image
  src="/Saravana.jpg" 
  alt="Saravana"
  width={200}
  height={200}
  className="rounded-full object-cover w-full h-full"
/>
                  <div className="w-full h-full bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-full flex items-center justify-center">
                    <Zap className="w-24 h-24 text-red-400" />
                  </div>
                 
    {/* Floating Particles */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-red-400 rounded-full animate-float"></div>
                  <div className="absolute top-12 right-8 w-1 h-1 bg-pink-400 rounded-full animate-float-delayed"></div>
                  <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-slow"></div>
                </div>
              </div>

              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm font-orbitron">SCROLL_DOWN</span>
          <div className="w-6 h-10 border-2 border-red-500/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CyberHero
