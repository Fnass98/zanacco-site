

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: '🌱 Starter',
    price: '49',
    description: 'Perfect for getting online quickly',
    features: [
      '2–3 page website live in 72 hours',
      'Hosting, domain & SSL included',
      '1 content/image update per month',
      '1 revision round during build',
      '72-hour turnaround on changes'
    ],
    popular: false,
    color: 'border-slate-200'
  },
  {
    name: '⚡ Growth',
    price: '99',
    description: 'Built for businesses ready to scale',
    features: [
      'Up to 5 pages live in 72 hours',
      'Hosting, domain & SSL included',
      'Basic SEO setup (meta tags, sitemap, schema)',
      '2 content/image updates per month',
      '24–48 hour turnaround on changes',
      '1–2 revision rounds during build'
    ],
    popular: true,
    color: 'border-purple-400'
  },
  {
    name: '🔥 Premium',
    price: '149',
    description: 'Maximum support and ongoing optimisation',
    features: [
      'Up to 7 pages live in 72 hours',
      'Hosting, domain & SSL included',
      'AI-polished copywriting for clarity & impact',
      'Quarterly optimisation (SEO, speed, conversions)',
      'Fair-use small edits (text, images, colours)',
      'Same-day priority support',
      'Multiple revision rounds during build'
    ],
    popular: false,
    color: 'border-slate-200'
  }
]

export default function PricingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05, margin: '0px 0px -100px 0px' })

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4 text-slate-900">
            🚀 Website Packages, Live in 72 Hours
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4 text-slate-700">
            No big upfront fees. Simple monthly plans with hosting, domain, and support included.
          </p>
        </motion.div>

        {/* Pricing cards - Better mobile stacking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide flex items-center space-x-1 shadow-lg shadow-purple-500/50">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 sm:border-4 ${plan.color} h-full flex flex-col ${plan.popular ? 'shadow-2xl lg:scale-105' : 'shadow-lg'}`}>
                {/* Plan name */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                <p className="text-sm sm:text-base mb-5 sm:mb-6 text-slate-700">{plan.description}</p>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900">£{plan.price}</span>
                    <span className="text-lg sm:text-xl ml-2 text-slate-700">/month</span>
                  </div>
                  <p className="text-xs sm:text-sm mt-2 font-bold text-slate-900">Minimum 3-month commitment, then rolling monthly</p>
                  <p className="text-xs sm:text-sm mt-1 text-slate-600">Launch in 72 hours • No setup fees</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA - Touch-friendly */}
                <Button
                  asChild
                  size="lg"
                  className={`w-full text-base sm:text-lg font-bold rounded-full py-5 sm:py-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <Link href="#contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What Counts as a Change Section */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-slate-200 mb-12 sm:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-slate-900">
              What Counts as a Change or Revision?
            </h3>
            <p className="text-base sm:text-lg text-slate-700">
              Clear scope, no surprises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-emerald-50 rounded-xl p-5 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-emerald-900">✅ Included Changes</h4>
              <ul className="space-y-2 text-sm sm:text-base text-emerald-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Text updates and edits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Image swaps</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Colour adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Minor layout tweaks</span>
                </li>
              </ul>
            </div>
            <div className="bg-rose-50 rounded-xl p-5 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-rose-900">❌ Billed Separately</h4>
              <ul className="space-y-2 text-sm sm:text-base text-rose-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>New page additions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Complete redesigns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Structural changes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>New functionality</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-6 text-sm sm:text-base text-slate-600">
            After your included changes, additional edits are billed as add-ons.
          </p>
        </motion.div>

        {/* Add-Ons Section */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-purple-200 mb-12 sm:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-slate-900">
              Optional Add-Ons
            </h3>
            <p className="text-base sm:text-lg text-slate-700">
              Extend your website with professional services
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { service: 'Extra Pages', price: 'from £30', unit: 'per page' },
              { service: 'Branding & Logo Design', price: 'from £75', unit: 'one-off' },
              { service: 'Content Writing', price: 'from £50', unit: 'per page' },
              { service: 'Google Workspace Setup', price: '£35', unit: 'one-off' },
              { service: 'Ongoing SEO Campaigns', price: 'from £99', unit: 'per month' },
              { service: 'E-commerce Integration', price: 'from £150', unit: 'one-off' }
            ].map((addon, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 sm:p-5 shadow-md border border-purple-100">
                <h4 className="font-bold text-base sm:text-lg mb-2 text-slate-900">{addon.service}</h4>
                <p className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{addon.price}</p>
                <p className="text-xs sm:text-sm text-slate-600">{addon.unit}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm sm:text-base italic text-slate-600">
            *Google Workspace licence fees billed directly by Google
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center px-4"
        >
          <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6">
            Not sure which plan is right for you?
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-base sm:text-lg font-bold px-8 sm:px-10 py-5 sm:py-6 rounded-full w-full sm:w-auto"
          >
            <Link href="#contact">
              Book a Free Consultation
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
