import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhyChooseUs = () => {
  const sectionRef = useRef(null)

  const features = [
    'High-Quality Printing & Embroidery',
    'No Minimum Orders',
    'Custom Embossing Available',
    'Fast Turnaround',
    'In-House Design Support',
    'Custom Packaging Available'
  ]

  const customerImages = [
    "cloth/satis1.jpg",
    "cloth/satis2.jpg",
    "cloth/satis3.jpg",
    "cloth/satis4.jpg",
    "cloth/satis5.jpg",
    "cloth/sati10.jpg",
    "cloth/sati7.jpg",
    "cloth/sati8.jpg",
    "cloth/sati9.jpg",
    "cloth/sati6.jpg"
  ]

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-16 bg-white overflow-hidden" // Added overflow-hidden here
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-dark mb-6">
            WHY CHOOSE US
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-medium text-gray-800 font-handwriting font-alegreya">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Large Featured Image - Fixed shadow overflow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl"> {/* Moved overflow-hidden here */}
              <div className="aspect-square">
                <img
                  src="/cloth/g5.jpg"
                  alt="Custom merchandise showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Over 1,000,000+ Satisfied Customers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="section-title text-dark mb-12 font-display">
            Over 1,000,000+ Satisfied Customers
          </h3>
          
          {/* Wrapped in overflow-hidden container */}
          <div className="overflow-hidden px-2"> {/* Added overflow-hidden and padding */}
            <div className="space-y-6">
              {/* First row - 5 images, hide last 2 on mobile */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 lg:gap-6"> {/* Reduced gap on mobile */}
                {customerImages.slice(0, 5).map((image, index) => (
                  <motion.div
                    key={index}
                    className={`${index >= 3 ? 'hidden md:block' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {/* Added overflow-hidden wrapper */}
                    <div className="overflow-hidden rounded-2xl shadow-lg aspect-square">
                      <img
                        src={image}
                        alt={`Customer showcase ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Second row - 5 images, hide last 2 on mobile */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 lg:gap-6"> {/* Reduced gap on mobile */}
                {customerImages.slice(5, 10).map((image, index) => (
                  <motion.div
                    key={index + 5}
                    className={`${index >= 3 ? 'hidden md:block' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ transitionDelay: `${(index + 5) * 0.1}s` }}
                  >
                    {/* Added overflow-hidden wrapper */}
                    <div className="overflow-hidden rounded-2xl shadow-lg aspect-square">
                      <img
                        src={image}
                        alt={`Customer showcase ${index + 6}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs