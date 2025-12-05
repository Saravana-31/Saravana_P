'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react'
import GlassCard from '@/components/glass-card'

const education = [
  {
    degree: "B.Tech Artificial Intelligence and Machine Learning",
    school: "Kongu Engineering College",
    period: "2023-2027",
    grade: "CGPA: 8.35/10"
  },
  {
    degree: "Higher Secondary Education",
    school: "Shri Maruthi Matric School",
    period: "2022-2023",
    grade: "94%"
  }
]

const experience = [
  {
    role: "Generative AI Internship",
    company: "Generative AI Consortium",
    period: "Mar 2025 – Apr 2025",
    achievements: [
      "Created and optimized Python scripts, enhancing data processing speed by 10%",
      "Collaborated on debugging critical features, minimizing errors pre-launch"
    ]
  },
  {
    role: "Software Development Intern",
    company: "Codtech IT Solutions",
    period: "Dec 2024 – Jan 2025",
    achievements: [
      "Assisted in training and evaluating machine learning models",
      "Prepared and optimized datasets with over 10,000 records"
    ]
  }
]

const certifications = [
  "MongoDB Associate Developer - MongoDB Inc. (2025)",
  "Oracle APEX Cloud Developer - Oracle University (2025)",
  "MS Word Expert - Udemy (2024)"
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">ME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Full Stack Developer and AI Engineer from Kongu Engineering College, 
            specialized in creating intelligent, end-to-end web solutions.
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <GlassCard className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-red-500 mr-3" />
                  Personal Information
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <span className="text-red-400 font-semibold">Location:</span> Veppanapalli, Krishnagiri, Tamil Nadu, India
                  </div>
                  <div>
                    <span className="text-red-400 font-semibold">Email:</span> saravanaprashanthkumar@gmail.com
                  </div>
                  <div>
                    <span className="text-red-400 font-semibold">Phone:</span> +91 7010086565
                  </div>
                  <div>
                    <span className="text-red-400 font-semibold">Languages:</span> English, Tamil, Kannada
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Career Objective</h3>
                <p className="text-gray-300 leading-relaxed">
                   Skilled in full-stack development and machine learning, creating
 intelligent web solutions like chatbots, detection systems, and auction
 platforms to drive innovation and efficiency.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 text-red-500 mr-4" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-red-400 font-semibold mb-2">{edu.school}</p>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>{edu.period}</span>
                    <span className="text-green-400 font-semibold">{edu.grade}</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="w-8 h-8 text-red-500 mr-4" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <p className="text-red-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-300 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="w-8 h-8 text-red-500 mr-4" />
            Certifications
          </h3>
          <GlassCard className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-4"
                >
                  <p className="text-gray-300 text-sm">{cert}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
