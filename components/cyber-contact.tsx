"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Terminal } from "lucide-react"
import emailjs from "@emailjs/browser";

const CyberContact = () => {
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
    await emailjs.sendForm(
      "service_fi9kzgj",
      "template_jz7iwje",
      e.currentTarget,
      "TWInNSvSJ0ojJRlQd"
    )

    setFormStatus({
      message: "✅ MESSAGE_TRANSMITTED_SUCCESSFULLY",
      isError: false,
    })
    ;(e.target as HTMLFormElement).reset()
  } catch (error) {
      console.error(error)
      setFormStatus({
        message: "❌ TRANSMISSION_FAILED - RETRY_PROTOCOL_INITIATED",
        isError: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL_ADDRESS",
      value: "saravanaprashanthkumar@gmail.com",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "PHONE_NUMBER",
      value: "+91 7010086565",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Veppanapalli, Krishnagiri, Tamil Nadu, India",
      gradient: "from-purple-500 to-blue-500",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
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
            <span className="text-red-500">ESTABLISH</span>
            {"_CONNECTION />"}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on the next breakthrough? Let's connect and build something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="cyber-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-orbitron text-white mb-8 flex items-center">
                  <Terminal className="w-6 h-6 text-red-500 mr-3" />
                  CONTACT_PROTOCOLS
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800 group-hover:border-red-500/30 transition-all">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}
                        >
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-red-400 font-orbitron font-bold text-sm mb-1">{info.label}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{info.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-orbitron text-sm">STATUS: ONLINE & AVAILABLE</span>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="cyber-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-orbitron text-white mb-8 flex items-center">
                  <Send className="w-6 h-6 text-red-500 mr-3" />
                  TRANSMISSION_FORM
                </h3>

                <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-red-400 font-orbitron text-sm mb-2">SENDER_NAME</label>
                    <Input
                      type="text"
                      name="from_name"
                      placeholder="Enter your designation..."
                      required
                      className="cyber-input"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-red-400 font-orbitron text-sm mb-2">EMAIL_PROTOCOL</label>
                    <Input
                      type="email"
                      name="user_email"
                      placeholder="your.email@domain.com"
                      required
                      className="cyber-input"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-red-400 font-orbitron text-sm mb-2">MESSAGE_SUBJECT</label>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Project collaboration / Job opportunity / General inquiry"
                      required
                      className="cyber-input"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-red-400 font-orbitron text-sm mb-2">MESSAGE_PAYLOAD</label>
                    <Textarea
                      name="message"
                      placeholder="Describe your project, requirements, or inquiry in detail..."
                      required
                      className="cyber-input min-h-[120px] resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-orbitron font-bold py-6 text-lg rounded-lg border-0 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <div className="absolute inset-0 bg-red-500/20 blur-xl group-hover:bg-red-400/30 transition-all"></div>
                      <div className="relative flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            TRANSMITTING...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            INITIATE_TRANSMISSION
                          </>
                        )}
                      </div>
                    </Button>
                  </motion.div>

                  {formStatus && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-lg border font-orbitron text-sm ${
                        formStatus.isError
                          ? "bg-red-500/10 border-red-500/30 text-red-400"
                          : "bg-green-500/10 border-green-500/30 text-green-400"
                      }`}
                    >
                      {formStatus.message}
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CyberContact
