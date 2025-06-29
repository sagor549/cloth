import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BrandSections = () => {
  const sectionRef = useRef(null)

  
  const sections = [
    {
      title: 'Corporate & Event Apparel',
      description: 'Unify your employees and stand out at trade shows or company events with custom hoodies, tees, polos, and more designed to boost team spirit and brand visibility.',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      reverse: false
    },
    {
      title: 'Creator & Personal Branding Gear',
      description: 'Build your community and make a lasting impression with custom apparel tailored for influencers, freelancers, coaches, and entrepreneurs who want to look and feel the part.',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      reverse: true
    },
    {
      title: 'Cause & Nonprofit Apparel',
      description: 'Wear your mission loud and proud. Create branded apparel that raises awareness, drives donations, and rallies support for your cause.',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      reverse: false
    },
    {
      title: 'Retail & Custom Collections',
      description: 'Launch your own clothing line or limited edition drops. We help brands and entrepreneurs create high-quality apparel ready for retail or online sales.',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      reverse: true
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-white parallax-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-dark mb-6 font-display">
            Wear Your Brand
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From limited-edition collections to everyday team wear, we handle small batch to bulk — no compromises. 
            Whether you need 25 or 2,500 units, your quality stays consistent.
          </p>
        </motion.div>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <motion.div
                  className="aspect-video rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-dark font-display">
                  {section.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandSections