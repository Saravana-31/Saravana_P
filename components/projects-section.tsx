"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Competency Score Evaluator",
      description:
        "AI-based resume evaluator that ranks candidates based on job description matching with 92% accuracy. Reduces HR screening time significantly.",
      techStack: ["Python", "TensorFlow", "NLP"],
      demoLink: "#",
      githubLink: "#",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Online Auction Platform",
      description:
        "Real-time full-stack auction system with user authentication, payment integration, and bid tracking. Supports over 150 concurrent users.",
      techStack: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Credit Card Fraud Detection",
      description: "ML model to detect fraud in over 100K transactions with 99.2% accuracy using anomaly detection.",
      techStack: ["Python", "Scikit-learn", "XGBoost"],
      demoLink: "#",
      githubLink: "#",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Deception Detection System",
      description:
        "CNN-based micro-expression analysis system that detects deception in interview videos with 87% accuracy.",
      techStack: ["Python", "OpenCV", "CNN"],
      demoLink: "#",
      githubLink: "#",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-colors h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-slate-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700 hover:border-cyan-500 hover:text-cyan-400 bg-transparent"
                  asChild
                >
                  <Link href={project.demoLink} target="_blank">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700 hover:border-cyan-500 hover:text-cyan-400 bg-transparent"
                  asChild
                >
                  <Link href={project.githubLink} target="_blank">
                    <Github size={16} className="mr-2" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
