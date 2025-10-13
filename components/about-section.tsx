

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Clock, Heart } from 'lucide-react'

const stats = [
  {
    icon: Award,
    number: '7+',
    label: 'Years Experience',
    color: 'bg-violet-100 text-violet-600'
  },
  {
    icon: Users,
    number: '100+',
    label: 'Happy Clients',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Support Available',
    color: 'bg-rose-100 text-rose-600'
  },
  {
    icon: Heart,
    number: '100%',
    label: 'Client Satisfaction',
    color: 'bg-emerald-100 text-emerald-600'
  }
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05, margin: '0px 0px -100px 0px' })

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ x: -50 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide mb-4 sm:mb-6">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
              Your Partner in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Digital Success</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                At Zanacco Digital, we believe every business deserves a professional online presence without the hefty upfront costs. That's why we created our subscription website model, making quality web development accessible and affordable.
              </p>
              <p>
                With over 7 years of experience and hundreds of successful projects under our belt, we've perfected the art of delivering beautiful, high-performing websites in 72 hours that drive real results for our clients.
              </p>
              <p>
                We're not your typical website builders. We're your long-term digital partners. From the initial consultation to ongoing support and optimisation, we're here to help your business grow and succeed online.
              </p>
            </div>
          </motion.div>

          {/* Right column - Stats - Better mobile grid */}
          <motion.div
            initial={{ x: 50 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 text-center shadow-2xl border-2 border-slate-200"
                  >
                    <div className={`${stat.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black mb-1 sm:mb-2 text-slate-900">{stat.number}</div>
                    <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-900">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
