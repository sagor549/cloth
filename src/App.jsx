import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import FeaturedProducts from './components/FeaturedProducts'
import PrintingMethods from './components/PrintingMethods'
import BrandSections from './components/BrandSections'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './index.css'
import CTASection from './components/CTASection'
import PreviewPage from './components/PreviewPage'
import Stats from './components/Stats'
import SatisfiedCustomers from './components/SatisfiedCustomers'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <Stats/>
<section className='relative '>
  <TrustSection />
</section>
        <FeaturedProducts />
        <PrintingMethods />
        <BrandSections />
        <PreviewPage/>
        <WhyChooseUs />
        <SatisfiedCustomers/>
        <Testimonials />
        <CTASection/>
      </main>
      <Footer />
    </div>
  )
}

export default App