import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TrustSection = () => {
  const sectionRef = useRef(null)

 

  const clients = [
    { name: 'Nike', logo: 'N' },
    { name: 'Adidas', logo: 'A' },
    { name: 'Puma', logo: 'P' },
    { name: 'Under Armour', logo: 'UA' },
    { name: 'Champion', logo: 'C' },
    { name: 'Reebok', logo: 'R' },
    { name: 'Vans', logo: 'V' },
    { name: 'Converse', logo: 'C' },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-light overflow-hidden parallax-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-dark mb-8 font-display">
            Trusted by 1,000,000+
          </h2>
          
          {/* Infinite Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm mx-4 min-w-[120px]"
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-600 mb-2">
                    {client.logo}
                  </div>
                  <span className="text-gray-500 italic text-sm">Client Logo</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection