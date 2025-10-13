
'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Code2, 
  Palette, 
  Globe, 
  PenTool, 
  FileText, 
  ArrowRight,
  Sparkles,
  Zap,
  Rocket,
  Star
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Advanced animated background component
const AnimatedServiceBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-3xl"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full"
        animate={{ 
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        animate={{ 
          rotate: [0, 180, 360],
          borderRadius: ["0%", "50%", "0%"]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

// Interactive service card with advanced animations
const AdvancedServiceCard = ({ service, index, inView }: { service: any, index: number, inView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        y: 100,
        rotateX: -30,
        scale: 0.8
      }}
      animate={inView ? { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="group relative perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        animate={isHovered ? {
          rotateX: (mousePosition.y - 150) / 30,
          rotateY: -(mousePosition.x - 150) / 30,
          scale: 1.05,
          z: 50
        } : {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          z: 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <Card className={`border-0 bg-gradient-to-br from-white/30 via-white/20 to-white/15 backdrop-blur-xl hover:from-white/40 hover:via-white/30 hover:to-white/20 transition-all duration-700 h-full relative overflow-hidden shadow-2xl hover:shadow-3xl ${
          service.premium ? 'ring-2 ring-blue-500/60' : 'ring-1 ring-white/20'
        }`}>
          {/* Subtle Animated Background Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            animate={isHovered ? {
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 100%)",
                "linear-gradient(135deg, rgba(147, 51, 234, 0.08) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 100%)",
                "linear-gradient(225deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 100%)"
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Floating Particles on Hover */}
          {isHovered && (
            <>
              {Array.from({ length: 5 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  initial={{ 
                    x: mousePosition.x, 
                    y: mousePosition.y,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    x: mousePosition.x + (Math.random() - 0.5) * 100,
                    y: mousePosition.y + (Math.random() - 0.5) * 100,
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    delay: i * 0.1
                  }}
                />
              ))}
            </>
          )}

          {service.premium && (
            <motion.div 
              className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold"
              animate={isHovered ? {
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <Star className="w-3 h-3 inline mr-1" />
              Premium
            </motion.div>
          )}
          
          <CardContent className="p-6 sm:p-8 lg:p-10 relative z-10">
            {/* Advanced Icon Animation */}
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 mx-auto relative overflow-hidden"
              animate={isHovered ? {
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              } : {}}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={isHovered ? {
                  x: ["-100%", "200%"]
                } : {}}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
            </motion.div>
            
            {/* Animated Title */}
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center drop-shadow-lg"
              animate={isHovered ? {
                scale: 1.05,
                color: "#111827",
                textShadow: "0 2px 8px rgba(255, 255, 255, 0.3)"
              } : {}}
            >
              {service.title}
            </motion.h3>
            
            {/* Animated Description */}
            <motion.p 
              className="text-gray-800 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg text-center"
              animate={isHovered ? {
                color: "#1f2937"
              } : {}}
            >
              {service.description}
            </motion.p>
            
            {/* Advanced Features List */}
            <motion.div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {service.features.map((feature: string, idx: number) => (
                <motion.div
                  key={idx}
                  className="flex items-center space-x-4 justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: (index * 0.2) + (idx * 0.1) + 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    x: 10
                  }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={isHovered ? {
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    } : {}}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: idx * 0.2
                    }}
                  />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Advanced CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg font-bold rounded-2xl transition-all duration-300 border-0 relative overflow-hidden group"
              >
                <Link href="#contact" className="flex items-center justify-center space-x-3 relative z-10">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Enterprise-grade applications built with cutting-edge technologies and bulletproof architecture.',
    features: ['React & Next.js', 'Node.js & Python', 'Cloud Architecture', 'API Integration'],
    premium: true
  },
  {
    icon: Globe,
    title: 'WordPress Solutions',
    description: 'Premium WordPress experiences with custom themes and advanced functionality.',
    features: ['Custom Themes', 'Plugin Development', 'E-commerce', 'Performance Optimization'],
    premium: false
  },
  {
    icon: Palette,
    title: 'Design & UX',
    description: 'Award-winning design that combines aesthetic mastery with exceptional usability.',
    features: ['UI/UX Design', 'Brand Integration', 'Mobile-First', 'User Research'],
    premium: true
  },
  {
    icon: PenTool,
    title: 'Brand Identity',
    description: 'Complete brand ecosystems that establish market dominance and recognition.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Digital Assets'],
    premium: false
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Strategic content development that engages audiences and drives measurable results.',
    features: ['Content Planning', 'SEO Optimization', 'Technical Writing', 'Brand Voice'],
    premium: false
  },
  {
    icon: Rocket,
    title: 'Digital Innovation',
    description: 'Cutting-edge solutions that push the boundaries of what\'s possible in digital.',
    features: ['AI Integration', 'Blockchain', 'IoT Solutions', 'AR/VR Experiences'],
    premium: true
  }
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <AnimatedServiceBg />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10" ref={ref}>
        {/* Spectacular Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          {/* Advanced Badge */}
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-semibold mb-12 border border-white/20"
            animate={inView ? {
              boxShadow: [
                "0 0 30px rgba(59, 130, 246, 0.3)",
                "0 0 60px rgba(147, 51, 234, 0.3)",
                "0 0 30px rgba(59, 130, 246, 0.3)"
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{
              scale: 1.05,
              rotateY: 10
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
            </motion.div>
            What we do
          </motion.div>
          
          {/* Spectacular Title */}
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={inView ? { opacity: 1, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span
              className="block"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 40px rgba(59, 130, 246, 0.8)"
              }}
            >
              Services that
            </motion.span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-black"
              animate={inView ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              } : {}}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              define excellence
            </motion.span>
          </motion.h2>
          
          {/* Animated Subtitle */}
          <motion.p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            We deliver world-class digital solutions that transform businesses and set industry benchmarks.
          </motion.p>
        </motion.div>

        {/* Advanced Services Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-20">
          {services.map((service, index) => (
            <AdvancedServiceCard
              key={service.title}
              service={service}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Spectacular CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md rounded-3xl p-16 border border-white/20 relative overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 100px rgba(59, 130, 246, 0.3)"
            }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)",
                  "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)",
                  "linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <motion.h3 
              className="text-4xl font-bold text-white mb-8 relative z-10 drop-shadow-lg"
              style={{ textShadow: "0 3px 15px rgba(0, 0, 0, 0.8)" }}
              animate={{
                textShadow: [
                  "0 3px 15px rgba(0, 0, 0, 0.8), 0 0 20px rgba(59, 130, 246, 0.0)",
                  "0 3px 15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)",
                  "0 3px 15px rgba(0, 0, 0, 0.8), 0 0 20px rgba(59, 130, 246, 0.0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Ready to elevate your digital presence?
            </motion.h3>
            
            <motion.p 
              className="text-2xl text-gray-100 mb-12 max-w-3xl mx-auto font-light relative z-10 drop-shadow-md"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)" }}
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Let's discuss how we can transform your vision into a market-leading digital experience.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 sm:px-16 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 border-0 w-full sm:min-w-[280px] relative overflow-hidden group"
                >
                  <Link href="#contact" className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8 }}
                    />
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -10 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 sm:px-16 py-6 sm:py-8 text-lg sm:text-xl font-bold rounded-2xl transition-all duration-500 w-full sm:min-w-[280px]"
                >
                  <Link href="#portfolio" className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <span>View Our Work</span>
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
