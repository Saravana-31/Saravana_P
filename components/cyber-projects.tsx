"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Brain, ShoppingCart, Shield, Eye } from "lucide-react"
import Link from "next/link"

const CyberProjects = () => {
  const projects = [
    {
      title: "SaviAI – AI Interview Assistant",
      description:
        "Real-time facial emotion detection combined with resume vs job description match scoring. Revolutionary AI-powered interview analysis system.",
      techStack: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
      icon: Brain,
      demoLink: "#",
      githubLink: "#",
      gradient: "from-red-500 to-pink-500",
      delay: 0.1,
    },
    {
      title: "Competency Score Evaluator",
      description:
        "AI-powered resume evaluator that intelligently ranks candidates based on job description matching with 92% accuracy rate.",
      techStack: ["Python", "TensorFlow", "NLP"],
      icon: Zap,
      demoLink: "https://competency-score-calculator.onrender.com",
      githubLink: "https://github.com/Saravana-31/competency-score-calculator",
      gradient: "from-pink-500 to-purple-500",
      delay: 0.2,
    },
    {
      title: "Online Auction Platform",
      description:
        "Real-time full-stack auction system with user authentication, payment integration, and live bid tracking supporting 150+ concurrent users.",
      techStack: ["React", "Node.js", "MongoDB"],
      icon: ShoppingCart,
      demoLink: "https://auction-frontend-rose.vercel.app",
      githubLink: "http://github.com/Saravana-31/auction-frontend",
      gradient: "from-purple-500 to-blue-500",
      delay: 0.3,
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "Advanced ML model utilizing anomaly detection algorithms to identify fraudulent transactions with 99.2% accuracy across 100K+ transactions.",
      techStack: ["Python", "Scikit-learn", "XGBoost"],
      icon: Shield,
      demoLink: "https://colab.research.google.com/drive/1DLbviVe2lVl7A_aFffDTbuRDCC0NBZTm#scrollTo=s4crElLmse-f",
      githubLink: "https://github.com/Saravana-31/Credit-Card-Fraud-Detection",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.4,
    },
    {
      title: "Deception Detection System",
      description:
        "CNN-based micro-expression analysis system that detects deception patterns in interview videos with 87% accuracy using computer vision.",
      techStack: ["Python", "CNN", "OpenCV"],
      icon: Eye,
      demoLink: "https://colab.research.google.com/drive/11lSiCOqWo-8lyaFj9BeJqFlqEQEdClwQ?usp=sharing",
      githubLink:  "https://github.com/Saravana-31/Deception-Detection",
      gradient: "from-cyan-500 to-green-500",
      delay: 0.5,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
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
            <span className="text-red-500">CYBER</span>
            {"_PROJECTS />"}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cutting-edge applications that bridge the gap between software and intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: project.delay }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <Card className="cyber-card group h-full relative overflow-hidden">
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                ></div>

                {/* Glowing border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                ></div>

                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}
                      >
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-orbitron text-white group-hover:text-red-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-300 font-orbitron"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 leading-relaxed mb-8 flex-grow">{project.description}</p>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button
                      asChild
                      variant="outline"
                      className="group/btn bg-transparent border-red-500/30 hover:border-red-500 hover:bg-red-500/10 text-gray-300 hover:text-red-400 font-orbitron"
                    >
                      <Link href={project.demoLink} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                        DEMO
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="group/btn bg-transparent border-pink-500/30 hover:border-pink-500 hover:bg-pink-500/10 text-gray-300 hover:text-pink-400 font-orbitron"
                    >
                      <Link href={project.githubLink} target="_blank">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                        CODE
                      </Link>
                    </Button>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity"></div>
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-delayed transition-opacity"></div>
                  <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-slow transition-opacity"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="cyber-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-orbitron text-white mb-4">
                {"<"}
                <span className="text-red-500">MORE</span>
                {"_PROJECTS />"}
              </h3>
              <p className="text-gray-400 mb-6">Explore more of my work and contributions on GitHub</p>
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-orbitron font-bold px-8 py-3 rounded-lg border-0"
              >
                <Link href="https://github.com/Saravana-31" target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  VIEW ALL PROJECTS
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default CyberProjects
