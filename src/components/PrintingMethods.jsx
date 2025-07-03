import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PrintingMethods = () => {
  const [clickedCard, setClickedCard] = useState(null)
  const sectionRef = useRef(null)

 

  const methods = [
    {
      name: 'Vinyl',
      description: 'A durable and vibrant option for simple, bold designs.',
      frontImage: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      details: 'Perfect for logos, text, and simple graphics. Long-lasting and cost-effective for small quantities.'
    },
    {
      name: 'DTF',
      description: 'A high-resolution printing method that allows for full color designs.',
      frontImage: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      details: 'Direct to Film printing offers vibrant colors and fine detail reproduction on various fabric types.'
    },
    {
      name: 'Embroidery',
      description: 'A timeless and textured customization method to add premium look.',
      frontImage: 'https://images.pexels.com/photos/8532579/pexels-photo-8532579.jpeg?auto=compress&cs=tinysrgb&w=400',
      details: 'Professional embroidery adds texture and premium feel to your garments. Perfect for corporate branding.'
    },
    {
      name: 'Embossing',
      description: 'A high-end technique that creates a raised, 3D effect on fabric.',
      frontImage: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      details: 'Creates elegant raised designs that add sophistication and tactile appeal to your merchandise.'
    }
  ]

  const handleCardClick = (index) => {
    if (window.innerWidth < 768) {
      setClickedCard(clickedCard === index ? null : index)
    }
  }

  return (
    <section ref={sectionRef} id="services" className="py-10 bg-light parallax-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-dark mb-4 ">
            Custom Printing & Embroidery Options
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={method.name}
              className="flip-card h-80 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(index)}
            >
              <div className={`flip-card-inner ${clickedCard === index ? 'md:transform-none' : ''}`}>
                {/* Front of Card */}
                <div className="flip-card-front relative">
                  <img
                    src={method.frontImage}
                    alt={method.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 rounded-b-2xl">
                    <h3 className="text-xl font-bold text-dark font-alice">{method.name}</h3>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back relative">
                  <img
                    src={method.frontImage}
                    alt={method.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Overlay on top of image so image is still visible */}
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 text-white text-center rounded-2xl">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 font-alice text-coral">{method.name}</h3>
                      <p className="text-lg leading-relaxed font-alegreya">{method.details}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Click Overlay */}
              {clickedCard === index && (
                <div className="md:hidden absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 text-white text-center rounded-2xl z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 font-alice text-coral">{method.name}</h3>
                    <p className="text-lg leading-relaxed font-alegreya">{method.details}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrintingMethods