"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Full Stack Developer & AI Enthusiast</h3>
              <p className="text-gray-300 mb-6">
                I am Saravana P, a dynamic AI Engineer with a proven track record at Kongu Engineering College. I
                specialize in building intelligent applications like AI Chatbots, Resume Scoring Systems, and Full Stack
                Auction Platforms. Passionate about blending machine learning with robust software engineering, I create
                scalable and engaging web solutions that deliver impact.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Mail size={18} className="text-cyan-400" />
                  <span className="text-gray-300">saravanaprashanthkumar@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={18} className="text-cyan-400" />
                  <span className="text-gray-300">+91 7010086565</span>
                </div>
                <div className="flex items-center space-x-2 md:col-span-2">
                  <MapPin size={18} className="text-cyan-400" />
                  <span className="text-gray-300">Veppanapalli, Krishnagiri, Tamil Nadu, India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-900/50 border-slate-800 h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Languages Known</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">English</span>
                    <span className="text-cyan-400">Fluent</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Tamil</span>
                    <span className="text-cyan-400">Native</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">MS Word Expert – Udemy, 2024</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">MongoDB Associate Developer – MongoDB Inc., 2025</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
