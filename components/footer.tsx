import Link from "next/link"
import { Github, Linkedin, Code2 } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Saravana P. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://linkedin.com/in/saravana-p-kec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Saravana-31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://leetcode.com/Saravana_P"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Code2 size={20} />
              <span className="sr-only">LeetCode</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
