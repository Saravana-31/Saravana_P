'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Brain, ShoppingCart, Shield, Eye, TrendingUp } from 'lucide-react'
import GlassCard from '@/components/glass-card'
import GlowingButton from '@/components/glowing-button'

const projects = [
  {
    title: "SaviAI – AI Interview Assistant",
    description: "Real-time facial emotion detection + resume vs job description match scoring",
    technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    features: [
      "Real-time emotion analysis during interviews",
      "AI-powered resume matching with 92% accuracy",
      "Structured interview insights and feedback",
      "Computer vision and NLP integration"
    ],
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    demo: "#",
    github: "#"
  },
  {
    title: "Online Auction Platform",
    description: "Real-time full-stack bidding with payments & user authentication",
    technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
    features: [
      "Real-time bidding system with WebSockets",
      "Secure user authentication and authorization",
      "Integrated payment gateway",
      "Support for 150+ concurrent users"
    ],
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-500",
    demo: "https://auction-frontend-rose.vercel.app",
    github: "http://github.com/Saravana-31/auction-frontend"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "99.2% accuracy fraud detection model using advanced ML algorithms",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    features: [
      "99.2% accuracy in fraud detection",
      "Real-time transaction analysis",
      "Advanced feature engineering",
      "Scalable ML pipeline"
    ],
    icon: Shield,
    color: "from-red-500 to-pink-500",
    demo: "https://colab.research.google.com/drive/1DLbviVe2lVl7A_aFffDTbuRDCC0NBZTm#scrollTo=s4crElLmse-f",
    github: "https://github.com/Saravana-31/Credit-Card-Fraud-Detection"
  },
  {
    title: "Deception Detection System",
    description: "Detects lies from micro-expressions during interviews using CNN",
    technologies: ["Python", "CNN", "OpenCV", "TensorFlow"],
    features: [
      "87% accuracy in deception detection",
      "Micro-expression analysis",
      "Real-time video processing",
      "Advanced computer vision techniques"
    ],
    icon: Eye,
    color: "from-purple-500 to-violet-500",
    demo: "https://colab.research.google.com/drive/11lSiCOqWo-8lyaFj9BeJqFlqEQEdClwQ?usp=sharing",
    github: "https://github.com/Saravana-31/Deception-Detection"
  },
  {
    title: "Competency Score Evaluator",
    description: "AI resume matcher with 92% accuracy using NLP and machine learning",
    technologies: ["Python", "TensorFlow", "NLP", "Scikit-learn"],
    features: [
      "92% accuracy in resume matching",
      "Natural language processing",
      "Automated skill assessment",
      "Job description compatibility scoring"
    ],
    icon: TrendingUp,
    color: "from-orange-500 to-yellow-500",
    demo: "https://competency-score-calculator.onrender.com",
    github: "https://github.com/Saravana-31/competency-score-calculator"
  }
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge applications that showcase the intersection of AI, web development, and innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <GlassCard className="p-6 h-full hover:border-red-500/40 transition-all duration-300">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} bg-opacity-20`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-400 mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs text-red-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-400 mb-3">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-red-500 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <GlowingButton
                    onClick={() => window.open(project.demo, '_blank')}
                    className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </GlowingButton>
                  <GlowingButton
                    onClick={() => window.open(project.github, '_blank')}
                    variant="outline"
                    size="icon"
                  >
                    <Github className="w-4 h-4" />
                  </GlowingButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more projects?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub for more innovative solutions and open-source contributions
            </p>
            <GlowingButton
              onClick={() => window.open('https://github.com/Saravana-31', '_blank')}
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </GlowingButton>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
