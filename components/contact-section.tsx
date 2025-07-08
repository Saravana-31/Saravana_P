"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<{
    message: string
    isError: boolean
  } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // @ts-ignore - EmailJS is loaded via CDN
      await window.emailjs.sendForm("service_fi9kzgj", "template_jz7iwje", e.currentTarget)

      setFormStatus({
        message: "✅ Message sent successfully!",
        isError: false,
      })
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error(error)
      setFormStatus({
        message: "❌ Failed to send message. Please try again.",
        isError: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-900/50 border-slate-800 h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-3 rounded-full text-cyan-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-300">saravanaprashanthkumar@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-3 rounded-full text-cyan-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-300">+91 7010086565</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-3 rounded-full text-cyan-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-300">Veppanapalli, Krishnagiri, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      required
                      className="bg-slate-800 border-slate-700 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="reply_to"
                      placeholder="Your Email"
                      required
                      className="bg-slate-800 border-slate-700 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="bg-slate-800 border-slate-700 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="bg-slate-800 border-slate-700 focus:border-cyan-500 min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {formStatus && (
                    <div
                      id="form-status"
                      className={`text-center ${formStatus.isError ? "text-red-500" : "text-green-500"}`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
