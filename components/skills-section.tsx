'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Text3D } from '@react-three/drei'
import { Suspense } from 'react'
import GlassCard from '@/components/glass-card'

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90, color: "#3776ab" },
      { name: "JavaScript", level: 85, color: "#f7df1e" },
      { name: "Java", level: 80, color: "#ed8b00" },
      { name: "C", level: 75, color: "#a8b9cc" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90, color: "#61dafb" },
      { name: "HTML/CSS", level: 95, color: "#e34f26" },
      { name: "Bootstrap", level: 85, color: "#7952b3" },
      { name: "Tailwind CSS", level: 88, color: "#06b6d4" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express.js", level: 80, color: "#000000" },
      { name: "MongoDB", level: 85, color: "#47a248" },
      { name: "SQL", level: 75, color: "#336791" }
    ]
  },
  {
    title: "AI/ML & Tools",
    skills: [
      { name: "TensorFlow", level: 85, color: "#ff6f00" },
      { name: "Scikit-learn", level: 80, color: "#f7931e" },
      { name: "OpenCV", level: 75, color: "#5c3ee8" },
      { name: "Git", level: 90, color: "#f05032" }
    ]
  }
]

function FloatingSkill({ skill, index }: { skill: any, index: number }) {
  return (
    <Float speed={1 + index * 0.2} rotationIntensity={0.5} floatIntensity={1}>
      <Text3D
        font="/fonts/Geist_Bold.json"
        size={0.3}
        height={0.05}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        position={[
          (index % 3 - 1) * 3,
          Math.floor(index / 3) * 2 - 2,
          0
        ]}
      >
        {skill.name}
        <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.2} />
      </Text3D>
    </Float>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const allSkills = skillCategories.flatMap(category => category.skills)

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      {/* 3D Skills Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {allSkills.slice(0, 12).map((skill, index) => (
              <FloatingSkill key={skill.name} skill={skill} index={index} />
            ))}
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">SKILLS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable, and modern applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <GlassCard className="p-6 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full relative"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                          }}
                        >
                          {/* Glow effect */}
                          <div 
                            className="absolute inset-0 rounded-full blur-sm opacity-50"
                            style={{ backgroundColor: skill.color }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Soft Skills & Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Decision Making",
                "Critical Thinking", 
                "Problem Solving",
                "Team Collaboration",
                "UI/UX Design",
                "API Integration",
                "Data Visualization",
                "Deep Learning"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-4 text-center hover:border-red-500/40 transition-colors"
                >
                  <span className="text-white font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
