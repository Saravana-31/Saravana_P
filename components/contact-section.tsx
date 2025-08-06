// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import GlassCard from '@/components/glass-card'
// import GlowingButton from '@/components/glowing-button'

// export default function ContactSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       // EmailJS integration
//       const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           service_id: 'service_fi9kzgj',
//           template_id: 'template_jz7iwje',
//           user_id: 'TWInNSvSJ0ojJRlQd',
//           template_params: {
//             from_name: formData.name,
//             user_email: formData.email,
//             subject: formData.subject,
//             message: formData.message,
//             to_name: 'Saravana P'
//           }
//         })
//       })

//       if (response.ok) {
//         alert('Message sent successfully!')
//         setFormData({ name: '', email: '', subject: '', message: '' })
//       } else {
//         throw new Error('Failed to send message')
//       }
//     } catch (error) {
//       alert('Failed to send message. Please try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "saravanaprashanthkumar@gmail.com",
//       href: "mailto:saravanaprashanthkumar@gmail.com"
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "+91 7010086565",
//       href: "tel:+917010086565"
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Veppanapalli, Krishnagiri, Tamil Nadu, India",
//       href: "#"
//     }
//   ]

//   const socialLinks = [
//     {
//       icon: Github,
//       label: "GitHub",
//       href: "https://github.com/Saravana-31",
//       color: "hover:text-gray-400"
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       href: "https://linkedin.com/in/saravana-p-kec",
//       color: "hover:text-blue-400"
//     },
//     {
//       icon: Code,
//       label: "LeetCode",
//       href: "https://leetcode.com/Saravana_P",
//       color: "hover:text-yellow-400"
//     }
//   ]

//   return (
//     <section id="contact" ref={ref} className="py-20 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
//             GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">TOUCH</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8" />
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Ready to collaborate on your next project? Let's build something amazing together!
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <GlassCard className="p-8">
//               <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <motion.div
//                     key={info.label}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
//                     className="flex items-center space-x-4"
//                   >
//                     <div className="p-3 bg-red-500/20 rounded-lg">
//                       <info.icon className="w-6 h-6 text-red-400" />
//                     </div>
//                     <div>
//                       <p className="text-gray-400 text-sm">{info.label}</p>
//                       <a
//                         href={info.href}
//                         className="text-white hover:text-red-400 transition-colors"
//                       >
//                         {info.value}
//                       </a>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </GlassCard>

//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <GlassCard className="p-8">
//                 <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
//                 <div className="flex space-x-4">
//                   {socialLinks.map((social, index) => (
//                     <motion.a
//                       key={social.label}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                       transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                       className={`p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-gray-300 ${social.color} transition-all duration-300 hover:border-red-500/40`}
//                     >
//                       <social.icon className="w-6 h-6" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </GlassCard>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <GlassCard className="p-8">
//               <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-300 text-sm font-medium mb-2">
//                       Name
//                     </label>
//                     <Input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="bg-black/50 border-red-500/30 text-white placeholder-gray-400 focus:border-red-500"
//                       placeholder="Your Name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-300 text-sm font-medium mb-2">
//                       Email
//                     </label>
//                     <Input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="bg-black/50 border-red-500/30 text-white placeholder-gray-400 focus:border-red-500"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-300 text-sm font-medium mb-2">
//                     Subject
//                   </label>
//                   <Input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="bg-black/50 border-red-500/30 text-white placeholder-gray-400 focus:border-red-500"
//                     placeholder="Project Collaboration"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-300 text-sm font-medium mb-2">
//                     Message
//                   </label>
//                   <Textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="bg-black/50 border-red-500/30 text-white placeholder-gray-400 focus:border-red-500 resize-none"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>

//                 <GlowingButton
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </GlowingButton>
//               </form>
//             </GlassCard>
//           </motion.div>
//         </div>

//         {/* Footer */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="text-center mt-16 pt-8 border-t border-red-500/20"
//         >
//           <p className="text-gray-400">
//             © 2025 Saravana P. Built with passion using React, Next.js, and cutting-edge web technologies.
//           </p>
//           <p className="text-red-400 mt-2 font-mono text-sm">
//             {'<NEURAL_NETWORK_INITIALIZED />'}
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import GlassCard from '@/components/glass-card'
import GlowingButton from '@/components/glowing-button'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // 1. Send message to you
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_fi9kzgj',
          template_id: 'template_jz7iwje',   // Your main contact template ID
          user_id: 'TWInNSvSJ0ojJRlQd',
          template_params: {
            from_name: formData.name,
            user_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Saravana P'
          }
        })
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully! Thank you for reaching out.');
        setIsError(false);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // 2. Send auto-reply to the user
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: 'service_fi9kzgj',
            template_id: 'template_06d3tn6',   // Your auto-reply template ID
            user_id: 'TWInNSvSJ0ojJRlQd',
            template_params: {
              user_email: formData.email,
              from_name: formData.name
              // Add/rename keys as expected in your EmailJS auto-reply template, e.g. from_name, to_name, etc.
            }
          })
        }).catch(() => {});
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.')
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Edit contactInfo/socialLinks as you like. (Omitted here for brevity.)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saravanaprashanthkumar@gmail.com",
      href: "mailto:saravanaprashanthkumar@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7010086565",
      href: "tel:+917010086565"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Veppanapalli, Krishnagiri, Tamil Nadu, India",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Saravana-31",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/saravana-p-kec",
      color: "hover:text-blue-400"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/Saravana_P",
      color: "hover:text-yellow-400"
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-red-500/20 rounded-lg">
                      <info.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <a href={info.href} className="text-white hover:text-red-400 transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-gray-300 ${social.color} transition-all duration-300 hover:border-red-500/40`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-red-500/30 text-white placeholder-gray-400 focus:border-red-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-red-500/30 text-white placeholder-gray-400 focus:border-red-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-red-500/30 text-white placeholder-gray-400 focus:border-red-500"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-black/50 border-red-500/30 text-white placeholder-gray-400 focus:border-red-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <GlowingButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </GlowingButton>

                {/* Success/Error Message */}
                {submitMessage && (
                  <div className={`mt-4 text-center text-lg ${isError ? "text-red-400" : "text-green-400"}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-red-500/20"
        >
          <p className="text-gray-400">
            © 2025 Saravana P. Built with passion using React, Next.js, and cutting-edge web technologies.
          </p>
          <p className="text-red-400 mt-2 font-mono text-sm">
            {'<NEURAL_NETWORK_INITIALIZED />'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
