

'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  useEffect(() => {
    // Show button after scrolling down
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    // Show tooltip once after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setIsTooltipVisible(true)
      
      // Hide tooltip after 5 seconds
      setTimeout(() => {
        setIsTooltipVisible(false)
      }, 5000)
    }, 3000)

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about your subscription website services."
    )
    window.open(`https://wa.me/447922109353?text=${message}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isTooltipVisible && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-2 sm:mb-3"
              >
                <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 w-48 sm:w-56 relative">
                  <button
                    onClick={() => setIsTooltipVisible(false)}
                    className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                    aria-label="Close tooltip"
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium pr-4">
                    Need help? Chat with us on WhatsApp!
                  </p>
                  <div className="absolute bottom-0 right-4 sm:right-6 w-3 h-3 bg-white transform rotate-45 translate-y-1/2"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group touch-manipulation"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            
            {/* Pulse animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
