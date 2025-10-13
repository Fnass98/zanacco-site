

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MessageCircle, Send, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call us',
    description: 'Speak directly with our team',
    action: '07922109353',
    href: 'tel:07922109353'
  },
  {
    icon: Mail,
    title: 'Email us',
    description: 'Send us your project details',
    action: 'enquiries@zanaccodigital.com',
    href: 'mailto:enquiries@zanaccodigital.com'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick chat about your project',
    action: 'Message us',
    href: '#whatsapp'
  }
]

const services = [
  'Custom Web Development',
  'WordPress Solutions',
  'Design & User Experience',
  'Brand Identity',
  'Content Strategy'
]

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '0px 0px -100px 0px'
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in discussing a web development project.\n\nName: ${formData.name || 'Not provided'}\nCompany: ${formData.company || 'Not provided'}\nService: ${formData.service || 'Not provided'}\nMessage: ${formData.message || 'Not provided'}`
    )
    window.open(`https://wa.me/447922109353?text=${message}`, '_blank')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll be in touch within 24 hours.')
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        {/* Clean Header */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block bg-blue-50 text-blue-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-blue-100">
            Get in touch
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Let's discuss
            <br />
            <span className="font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              your next project
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to transform your digital presence? We'd love to hear about your project and explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ x: -20 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Get in touch
            </h3>
            
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ x: -20 }}
                  animate={inView ? { x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {method.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                      {method.description}
                    </p>
                    
                    <button
                      onClick={method.href === '#whatsapp' ? handleWhatsAppClick : undefined}
                      className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                    >
                      {method.href !== '#whatsapp' ? (
                        <a href={method.href}>{method.action}</a>
                      ) : (
                        method.action
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-blue-100">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  Response Time
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                We typically respond within 24 hours during business days.
              </p>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-sm sm:text-base text-gray-600">Based in the UK, serving globally</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 20 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5 sm:mb-6">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-xs sm:text-sm">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="rounded-xl border-gray-200 focus:border-blue-500 text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-xs sm:text-sm">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="rounded-xl border-gray-200 focus:border-blue-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-xs sm:text-sm">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="rounded-xl border-gray-200 focus:border-blue-500 text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-xs sm:text-sm">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none bg-white text-sm sm:text-base"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-xs sm:text-sm">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="rounded-xl border-gray-200 focus:border-blue-500 resize-none text-sm sm:text-base"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={handleWhatsAppClick}
                    variant="outline"
                    className="border-purple-500 bg-purple-50 hover:bg-purple-100 text-purple-600 py-5 sm:py-6 rounded-xl text-base sm:text-lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
