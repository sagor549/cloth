import { motion } from 'framer-motion'
import { useRef } from 'react'

const BrandSections = () => {
  const sectionRef = useRef(null)

  const sections = [
    {
      title: 'Corporate & Event Apparel',
      description: 'Unify your employees and stand out at trade shows or company events with custom hoodies, tees, polos, and more designed to boost team spirit and brand visibility.',
      image: '/cloth/ca.jpg',
      reverse: false
    },
    {
      title: 'Creator & Personal Branding Gear',
      description: 'Build your community and make a lasting impression with custom apparel tailored for influencers, freelancers, coaches, and entrepreneurs who want to look and feel the part.',
      image: '/cloth/pe.jpg',
      reverse: true
    },
    {
      title: 'Cause & Nonprofit Apparel',
      description: 'Wear your mission loud and proud. Create branded apparel that raises awareness, drives donations, and rallies support for your cause.',
      image: 'cloth/cause.jpg',
      reverse: false
    },
    {
      title: 'Retail & Custom Collections',
      description: 'Launch your own clothing line or limited edition drops. We help brands and entrepreneurs create high-quality apparel ready for retail or online sales.',
      image: '/cloth/real.png',
      reverse: true
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-white parallax-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16">
          <h2 className="section-title text-dark mb-6 ">
            Wear Your Brand
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-alegreya">
            From limited-edition collections to everyday team wear, we handle small batch to bulk — no compromises. 
            Whether you need 25 or 2,500 units, your quality stays consistent.
          </p>
        </motion.div>

        <div className="space-y-20">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
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
                <h3 className="text-3xl md:text-4xl font-bold text-dark font-alice">
                  {section.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed font-alegreya">
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
