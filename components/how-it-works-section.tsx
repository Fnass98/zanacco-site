

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { UserPlus, Sparkles, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Choose Your Package',
    description: 'Select the plan that fits your needs. Complete a quick onboarding call and share your content. Minimum 3-month commitment, then rolling monthly.',
    color: 'bg-violet-100',
    iconColor: 'text-violet-600'
  },
  {
    icon: Sparkles,
    title: 'We Build in 72 Hours',
    description: 'Our team designs and builds your professional website in just 72 hours. You get revision rounds during the build to ensure it\'s perfect.',
    color: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    icon: TrendingUp,
    title: 'Launch & Grow',
    description: 'Your website goes live with hosting, domain, and SSL included. We provide ongoing support and monthly updates to keep you growing.',
    color: 'bg-rose-100',
    iconColor: 'text-rose-600'
  }
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05, margin: '0px 0px -100px 0px' })

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide mb-4 sm:mb-6" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 px-4" style={{ color: '#0f172a' }}>
            How It Works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4" style={{ color: '#475569' }}>
            Getting your website online is as easy as 1, 2, 3. No hassle, no stress.
          </p>
        </motion.div>

        {/* Steps - Better mobile spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ y: 50 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative px-4 sm:px-0"
              >
                <div className="text-center">
                  {/* Step number */}
                  <div className="absolute top-0 left-4 sm:left-0 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-xl sm:text-2xl font-black" style={{ color: '#ffffff' }}>{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={`${step.color} w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-lg`}>
                    <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4" style={{ color: '#0f172a' }}>{step.title}</h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ color: '#475569' }}>{step.description}</p>
                </div>

                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-1 bg-gradient-to-r from-slate-200 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
