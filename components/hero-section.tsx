
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="text-center">
          {/* Main headline - Optimized for mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-5 sm:mb-6 leading-tight px-2"
          >
            Launch your new website in 72 hours from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">£49/month</span>
          </motion.h1>

          {/* Subheading - Better mobile sizing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mb-8 sm:mb-10 max-w-4xl mx-auto font-light leading-relaxed px-4 space-y-1"
          >
            <p>Hosting, domain and SSL included.</p>
            <p>Minimum 3-month commitment, then rolling monthly.</p>
          </motion.div>

          {/* Value propositions - Better mobile layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 px-4"
          >
            {[
              'Launch in 72 Hours',
              'Hosting & Domain Included',
              'Ongoing Support'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-white">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - Touch-friendly on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 max-w-2xl mx-auto"
          >
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg font-bold px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border-0 w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
            >
              <Link href="#pricing" className="flex items-center justify-center space-x-2 text-white">
                <span>View Packages</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 text-base sm:text-lg font-bold px-8 sm:px-10 py-6 sm:py-7 rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="#contact" className="flex items-center justify-center">
                Get Started
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 sm:mt-16 text-slate-300 text-xs sm:text-sm px-4"
          >
            <p>Trusted by businesses across the UK • 7+ years of experience</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 hidden sm:flex justify-center"
      >
        <Link href="#how-it-works" className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 group">
          <motion.span 
            className="text-xs font-medium mb-2 uppercase tracking-wider"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Scroll to learn more
          </motion.span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5 transform rotate-90" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
