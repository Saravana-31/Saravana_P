"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Award, Globe } from "lucide-react"

const CyberAbout = () => {
  const stats = [
    { label: "Projects Completed", value: "10+", icon: "🚀" },
    { label: "AI Models Trained", value: "8+", icon: "🧠" },
    { label: "Code Commits", value: "500+", icon: "💻" },
    { label: "Coffee Consumed", value: "∞", icon: "☕" },
  ]

  const certifications = [
    "MS Word Expert – Udemy (2024)",
    "MongoDB Associate Developer – MongoDB Inc. (2025)",
    "Oracle APEX Cloud Developer – Oracle University (2025)",
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-4">
            {"<"}
            <span className="text-red-500">ABOUT</span>
            {"_ME />"}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="cyber-card h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-orbitron text-white mb-6 flex items-center">
                  <span className="text-red-500 mr-2">{">"}</span>
                  NEURAL_PROFILE.exe
                </h3>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    I am <span className="text-red-400 font-semibold">Saravana P</span>, a passionate Full Stack
                    Developer and AI Engineer from <span className="text-pink-400">Kongu Engineering College</span>,
                    specialized in creating intelligent, end-to-end web solutions.
                  </p>

                  <p>
                    With a unique blend of <span className="text-purple-400">frontend design</span>,
                    <span className="text-blue-400"> backend logic</span>, and
                    <span className="text-green-400"> machine learning expertise</span>, I build cutting-edge
                    applications that range from AI Chatbots and Deception Detection Systems to Resume Scorers and
                    Real-time Auction Platforms.
                  </p>

                  <p>
                    My mission is to{" "}
                    <span className="text-red-400 font-semibold">bridge the gap between software and intelligence</span>
                    —making machines think, adapt, and respond like humans. Whether it's building 3D animated UIs,
                    implementing deep learning models, or integrating APIs and scalable systems, I thrive on turning
                    ideas into
                    <span className="text-pink-400 font-semibold"> impactful digital experiences</span>.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300 text-sm">saravanaprashanthkumar@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300 text-sm">+91 7010086565</span>
                  </div>
                  <div className="flex items-center space-x-3 md:col-span-2">
                    <MapPin className="w-5 h-5 text-red-400" />
                    <span className="text-gray-300 text-sm">Veppanapalli, Krishnagiri, Tamil Nadu, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats */}
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-orbitron text-white mb-6 flex items-center">
                  <span className="text-red-500 mr-2">{">"}</span>
                  SYSTEM_STATS
                </h3>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{stat.icon}</span>
                        <span className="text-gray-300 text-sm">{stat.label}</span>
                      </div>
                      <span className="text-red-400 font-bold font-orbitron">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-orbitron text-white mb-6 flex items-center">
                  <Award className="w-5 h-5 text-red-500 mr-2" />
                  CERTIFICATIONS
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-orbitron text-white mb-6 flex items-center">
                  <Globe className="w-5 h-5 text-red-500 mr-2" />
                  LANGUAGES
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">English</span>
                      <span className="text-red-400 text-sm font-orbitron">FLUENT</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">Tamil</span>
                      <span className="text-red-400 text-sm font-orbitron">NATIVE</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CyberAbout
