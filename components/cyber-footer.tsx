"use client"

import Link from "next/link"
import { Github, Linkedin, Code2, Zap } from "lucide-react"
import { motion } from "framer-motion"

const CyberFooter = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/saravana-p-kec", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Saravana-31", label: "GitHub" },
    { icon: Code2, href: "https://leetcode.com/Saravana_P", label: "LeetCode" },
  ]

  return (
    <footer className="py-12 border-t border-red-500/20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <Zap className="w-8 h-8 text-red-500" />
              <div className="absolute inset-0 bg-red-500/20 blur-xl"></div>
            </div>
            <div>
              <span className="text-2xl font-bold font-orbitron text-white">
                SARAVANA<span className="text-red-500">.</span>
              </span>
              <p className="text-gray-400 text-sm font-orbitron">CYBER_DEVELOPER.exe</p>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 font-orbitron text-sm">© {new Date().getFullYear()} SARAVANA_P.exe</p>
            <p className="text-gray-500 text-xs mt-1">ALL_RIGHTS_RESERVED | NEURAL_NETWORK_ACTIVE</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-lg hover:border-red-500/60 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  <div className="absolute inset-0 bg-red-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="sr-only">{social.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-red-500/10"
        >
          <p className="text-center text-gray-500 text-xs font-orbitron">
            {"<"}
            <span className="text-red-500">SYSTEM_STATUS</span>: ONLINE |
            <span className="text-green-400"> NEURAL_NETWORKS</span>: ACTIVE |
            <span className="text-blue-400"> CREATIVITY_LEVEL</span>: MAXIMUM{" />"}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default CyberFooter
