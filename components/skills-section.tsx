"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "Java", "Python"],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Bootstrap", "React"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["MongoDB"],
    },
    {
      title: "AI & ML",
      skills: ["TensorFlow", "Scikit-learn", "OpenCV", "Machine Learning", "Deep Learning"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "EmailJS", "Vercel"],
    },
    {
      title: "Others",
      skills: ["UI/UX Design", "API Integration", "Data Visualization"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 border-slate-800 h-full hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
