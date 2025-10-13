
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import HowItWorksSection from '@/components/how-it-works-section'
import PricingSection from '@/components/pricing-section'
import PortfolioSection from '@/components/portfolio-section'
import AboutSection from '@/components/about-section'
import FAQsSection from '@/components/faqs-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section id="home">
          <HeroSection />
        </section>
        <HowItWorksSection />
        <PricingSection />
        <PortfolioSection />
        <AboutSection />
        <FAQsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
