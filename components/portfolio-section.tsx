
'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

// Simple portfolio card
const PortfolioCard = ({ item, index, inView }: { item: any, index: number, inView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={inView ? { y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image Container - Better mobile height */}
        <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-slate-100">
          <Image
            src={item.image}
            alt={`${item.title} - ${item.category}`}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-slate-900/80 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center space-x-2 transition-all duration-300 shadow-lg shadow-purple-500/50 text-sm sm:text-base"
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Content - Better mobile padding */}
        <div className="p-5 sm:p-6" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{item.title}</h3>
          </div>
          
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold border-2 bg-purple-100 text-purple-900 border-purple-900">
            {item.category}
          </Badge>
          
          <p className="text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed text-slate-700">
            {item.description}
          </p>
          
          {/* Technologies - Better mobile wrapping */}
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-slate-200 text-slate-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const portfolioItems = [
  {
    title: 'Simba Property',
    url: 'https://simbaproperty.com',
    category: 'Property & Real Estate',
    description: 'Premium property platform with advanced search capabilities and luxury user experience.',
    technologies: ['WordPress', 'Custom Development', 'Property Management'],
    image: 'https://cdn.abacus.ai/images/4a2309f5-ca1e-415b-a654-83f81a985897.png',
    type: 'property',
    featured: true
  },
  {
    title: 'Caring Crew',
    url: 'https://caringcrew.co.uk/',
    category: 'Healthcare Services',
    description: 'Compassionate care service platform with comprehensive care management and booking systems.',
    technologies: ['WordPress', 'Care Management', 'Booking System'],
    image: 'https://cdn.abacus.ai/images/c3119206-a9b6-43c8-b277-71125369f04c.png',
    type: 'healthcare',
    featured: true
  },
  {
    title: 'MCR London',
    url: 'https://www.mcrlondon.com/',
    category: 'Professional Services',
    description: 'Modern professional services platform with sleek design and powerful functionality.',
    technologies: ['Custom Development', 'Modern Design', 'Service Management'],
    image: 'https://cdn.abacus.ai/images/79cbc1de-6192-442a-80ae-9b235edf14a6.png',
    type: 'service',
    featured: true
  },
  {
    title: 'Simba Resi Care',
    url: 'https://simbaresicare.com',
    category: 'Healthcare Services',
    description: 'Residential care platform with integrated management systems and client portals.',
    technologies: ['WordPress', 'Care Solutions', 'Client Portal'],
    image: 'https://cdn.abacus.ai/images/59f0e889-9d3e-4cfd-8b7a-330bb1f1992a.png',
    type: 'healthcare',
    featured: false
  },
  {
    title: 'Five Care',
    url: 'https://fivecare.co.uk',
    category: 'Healthcare Services',
    description: 'Enterprise care agency platform with integrated management systems and client portals.',
    technologies: ['WordPress', 'Booking System', 'Care Management'],
    image: 'https://cdn.abacus.ai/images/a4624768-5755-4b99-8411-c9dfc3c79ec1.png',
    type: 'healthcare'
  },
  {
    title: 'VanCity Sports Club',
    url: 'https://vancitysportsclub.com',
    category: 'Sports & Recreation',
    description: 'Dynamic sports club platform with membership management and event coordination.',
    technologies: ['Custom Development', 'React', 'Membership System'],
    image: 'https://cdn.abacus.ai/images/404be0e3-1c63-44be-b00d-43595462bf9c.png',
    type: 'sports',
    featured: false
  },
  {
    title: 'MCS Cleaning',
    url: 'https://mcscleaning.uk',
    category: 'Professional Services',
    description: 'Comprehensive cleaning service platform with automated booking and service management.',
    technologies: ['WordPress', 'Booking System', 'Service Management'],
    image: 'https://cdn.abacus.ai/images/d2003ea8-d42a-449f-95cf-93fd1df60162.png',
    type: 'service'
  },
  {
    title: 'Sabr Remedies',
    url: 'https://sabrremedies.com',
    category: 'Health & Wellness',
    description: 'Specialized health and wellness platform offering natural remedies and wellness solutions with modern e-commerce integration.',
    technologies: ['WordPress', 'E-commerce', 'Health Solutions', 'Custom Design'],
    image: 'https://cdn.abacus.ai/images/8842243e-a8c1-486e-bf24-46e2583d61a5.png',
    type: 'health',
    featured: false
  }
]

const categories = ['All', 'Property', 'Healthcare', 'Sports', 'Service', 'Health']

export default function PortfolioSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05, margin: '0px 0px -100px 0px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = portfolioItems.filter(item => {
    if (activeCategory === 'All') return true
    return item.type === activeCategory.toLowerCase()
  })

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="inline-block px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide mb-4 sm:mb-6" style={{ backgroundColor: '#7c3aed', color: '#ffffff' }}>
            Our Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4 text-slate-900">
            Recent Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 text-slate-700">
            Explore some of the websites we've built for businesses like yours
          </p>
        </motion.div>

        {/* Category Filter - Touch-friendly on mobile */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 px-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white text-slate-700 hover:text-slate-900 border-2 border-slate-300 hover:border-slate-400'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Better mobile spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.title}
              item={item}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
