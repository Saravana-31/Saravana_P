"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, Wrench, Palette } from "lucide-react"

const CyberSkills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "Java", "Python"],
      color: "from-red-500 to-pink-500",
      delay: 0.1,
    },
    {
      title: "Frontend",
      icon: Palette,
      skills: ["HTML", "CSS", "Bootstrap", "React"],
      color: "from-pink-500 to-purple-500",
      delay: 0.2,
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js"],
      color: "from-purple-500 to-blue-500",
      delay: 0.3,
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB"],
      color: "from-blue-500 to-cyan-500",
      delay: 0.4,
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: ["TensorFlow", "Scikit-learn", "OpenCV", "Deep Learning"],
      color: "from-cyan-500 to-green-500",
      delay: 0.5,
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "EmailJS", "Vercel"],
      color: "from-green-500 to-yellow-500",
      delay: 0.6,
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="text-red-500">NEURAL</span>
            {"_SKILLS />"}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: category.delay }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="cyber-card group h-full relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-orbitron text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: category.delay + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-300 text-sm font-medium">{skill}</span>
                          <span className="text-red-400 text-xs font-orbitron opacity-0 group-hover/skill:opacity-100 transition-opacity">
                            ACTIVE
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${85 + Math.random() * 15}%` }}
                            transition={{
                              duration: 1,
                              delay: category.delay + skillIndex * 0.1 + 0.5,
                            }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-delayed transition-opacity"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="cyber-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-orbitron text-white mb-6 text-center">
                {"<"}
                <span className="text-red-500">ADDITIONAL</span>
                {"_EXPERTISE />"}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "UI/UX Design",
                  "API Integration",
                  "Data Visualization",
                  "Machine Learning",
                  "Deep Learning",
                  "3D Animation",
                  "Cyber Security",
                  "Cloud Computing",
                  "DevOps",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-gray-300 text-sm font-orbitron hover:border-red-500/60 hover:text-red-400 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default CyberSkills
