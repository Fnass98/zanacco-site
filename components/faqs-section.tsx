

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What\'s the minimum commitment?',
    answer: 'There\'s a minimum 3-month commitment to ensure we can deliver the best value and results. After the initial 3 months, your subscription rolls monthly and you may cancel with 30 days\' notice.'
  },
  {
    question: 'Can I really get a website live in 72 hours?',
    answer: 'Yes! Once we have your content and branding assets, we\'ll have your website live within 72 hours. This applies to all our packages: Starter, Growth, and Premium.'
  },
  {
    question: 'What happens if I cancel my subscription?',
    answer: 'You may cancel after the first 3 months by giving us 30 days\' notice. There are no penalties. If you\'d like to keep your website, we offer an affordable buyout option. We\'ll never hold your content hostage.'
  },
  {
    question: 'What exactly counts as a "change" or "revision"?',
    answer: 'Small changes include text updates, image swaps, colour adjustments, and minor layout tweaks. These are covered by your monthly allowance. New page additions, complete redesigns, structural changes, or new functionality are billed as separate projects or add-ons.'
  },
  {
    question: 'Can I add extra pages later?',
    answer: 'Absolutely. Extra pages can be added for a one-off fee starting from £30 per page, or you can upgrade to a higher package tier if you need more pages regularly.'
  },
  {
    question: 'What\'s included in hosting?',
    answer: 'Your monthly fee includes reliable shared hosting, domain registration (or connection if you already own one), and SSL certificate. Everything you need to stay online is covered.'
  },
  {
    question: 'Do you provide business email?',
    answer: 'Yes. We can set up professional Google Workspace email accounts for a one-off setup fee of £35. The Google Workspace licence fee (around £4.60/user/month) is billed directly to you by Google.'
  },
  {
    question: 'How quickly are changes made after launch?',
    answer: 'Starter (£49/month): within 72 hours. Growth (£99/month): within 24–48 hours. Premium (£149/month): same-day priority support.'
  },
  {
    question: 'Can I upgrade or downgrade my package?',
    answer: 'You can upgrade at any time with no hassle. Downgrades are possible but may require reducing your website to match the lower tier\'s page limits.'
  },
  {
    question: 'Is SEO included?',
    answer: 'Every website is built with SEO best practices: mobile-friendly, fast loading times, and clean meta tags. For ongoing SEO campaigns (keyword research, content optimisation, link building), we offer monthly plans starting from £99/month as an add-on.'
  },
  {
    question: 'Do you provide logos, branding, or content writing?',
    answer: 'We prefer you to provide these before development begins. However, we can create professional branding and content for an additional cost: logos from £75, content writing from £50 per page.'
  },
  {
    question: 'What if I need something outside the scope of my plan?',
    answer: 'No problem. We offer a range of add-ons including extra pages, e-commerce integration, advanced features, and more. Ask us, and we\'ll provide a clear quote upfront. No hidden surprises.'
  }
]

function FAQItem({ faq, index, inView }: { faq: typeof faqs[0], index: number, inView: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ y: 30 }}
      animate={inView ? { y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-slate-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 sm:py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base sm:text-lg font-extrabold text-slate-900 pr-6 sm:pr-8">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-900 flex-shrink-0 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function FAQsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05, margin: '0px 0px -100px 0px' })

  return (
    <section id="faqs" className="py-16 sm:py-20 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="inline-block bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide mb-4 sm:mb-6">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700">
            Everything you need to know about our subscription website service
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 lg:p-12 border border-slate-100">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <p className="text-base sm:text-lg text-slate-800 mb-2">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="text-indigo-600 hover:text-purple-600 font-bold text-base sm:text-lg underline"
          >
            Get in touch - we're happy to help!
          </a>
        </motion.div>
      </div>
    </section>
  )
}
