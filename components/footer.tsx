

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    services: [
      { name: 'Starter Plan', href: '#pricing' },
      { name: 'Professional Plan', href: '#pricing' },
      { name: 'Enterprise Plan', href: '#pricing' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'FAQs', href: '#faqs' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand Column */}
          <div>
            <Link href="#home" className="flex items-center group mb-5 sm:mb-6">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 mr-3">
                <Image
                  src="/zanacco-logo.png"
                  alt="Zanacco Digital"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="text-lg sm:text-xl font-bold">
                Zanacco<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Digital</span>
              </div>
            </Link>
            <p className="text-sm sm:text-base text-slate-400 mb-5 sm:mb-6 leading-relaxed">
              Professional websites delivered in 72 hours. Minimum 3-month commitment, then rolling monthly.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="tel:07922109353" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-slate-900 rounded-full flex items-center justify-center transition-all duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:enquiries@zanaccodigital.com" className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-slate-900 rounded-full flex items-center justify-center transition-all duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm sm:text-base text-slate-400 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm sm:text-base text-slate-400 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mt-0.5 flex-shrink-0" />
                <a href="tel:07922109353" className="text-sm sm:text-base text-slate-400 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 transition-colors">
                  07922 109353
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:enquiries@zanaccodigital.com" className="text-sm sm:text-base text-slate-400 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 transition-colors break-all">
                  enquiries@zanaccodigital.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-slate-400">
                  UK Based, Serving Globally
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Zanacco Digital. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {links.legal.map((link) => (
                <Link key={link.name} href={link.href} className="text-slate-400 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 text-xs sm:text-sm transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
