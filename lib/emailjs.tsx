"use client"

import { useEffect } from "react"

export function EmailJSScript() {
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement("script")
    script.src = "https://cdn.emailjs.com/dist/email.min.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize EmailJS
      // @ts-ignore - EmailJS is loaded via CDN
      window.emailjs.init("TWInNSvSJ0ojJRlQd")
    }

    return () => {
      // Clean up
      document.body.removeChild(script)
    }
  }, [])

  return null
}
