
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Image from 'next/image'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'Simba Property',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Minister_Mitchell_July_20_headshot_DSC6710a.jpg/250px-Minister_Mitchell_July_20_headshot_DSC6710a.jpg',
    content: "Zanacco Digital transformed our vision into reality with exceptional attention to detail. Their expertise and professional approach resulted in a platform that truly represents our brand.",
    rating: 5,
    project: 'Property Platform'
  },
  {
    name: 'David Thompson',
    role: 'Managing Director',
    company: 'Five Care Services',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: "Working with Zanacco Digital was seamless. They delivered a sophisticated platform that perfectly balances functionality with aesthetic appeal.",
    rating: 5,
    project: 'Healthcare Platform'
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder',
    company: 'VanCity Sports Club',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: "The team's technical expertise and creative vision brought our sports club into the digital age. The results exceeded our expectations.",
    rating: 5,
    project: 'Sports Platform'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Operations Manager',
    company: 'MCR London',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: "Zanacco Digital's professionalism and technical mastery are unmatched. They created a corporate platform that perfectly reflects our business values.",
    rating: 5,
    project: 'Business Platform'
  }
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Clean Header - Kota Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100">
            What our clients say
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Trusted by businesses
            <br />
            <span className="font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              across industries
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Featured Testimonial - Clean Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="border border-gray-100 shadow-sm bg-white">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Client Info */}
                <div className="text-center lg:text-left">
                  <div className="relative w-20 h-20 mx-auto lg:mx-0 mb-6">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-500 mb-4">
                    {currentTestimonial.company}
                  </p>
                  
                  <div className="flex justify-center lg:justify-start mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <Quote className="w-8 h-8 text-blue-600 mb-6 opacity-60" />
                  
                  <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-light">
                    "{currentTestimonial.content}"
                  </blockquote>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-blue-600 w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="w-8 h-8 p-0 border-gray-200 hover:border-gray-300 rounded-lg"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="w-8 h-8 p-0 border-gray-200 hover:border-gray-300 rounded-lg"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Other Testimonials Grid - Clean Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.filter((_, index) => index !== currentIndex).slice(0, 3).map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="hover:shadow-sm transition-all duration-300 cursor-pointer border border-gray-100 bg-white"
              onClick={() => setCurrentIndex(testimonials.findIndex(t => t.name === testimonial.name))}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-10 h-10 mr-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Clean CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 border border-blue-100"
        >
          <h3 className="text-3xl font-light text-gray-900 mb-6">
            Ready to join our happy clients?
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve similar results.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg border-0"
          >
            <a href="#contact" className="flex items-center space-x-2">
              <span>Start your project</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
