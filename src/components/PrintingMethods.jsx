import { useState, useRef } from 'react'
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
      frontImage: '/cloth/dif.jpg',
      details: 'Perfect for logos, text, and simple graphics. Long-lasting and cost-effective for small quantities.'
    },
    {
      name: 'DTF',
      description: 'A high-resolution printing method that allows for full color designs.',
      frontImage: '/cloth/vin.png',
      details: 'Direct to Film printing offers vibrant colors and fine detail reproduction on various fabric types.'
    },
    {
      name: 'Embroidery',
      description: 'A timeless and textured customization method to add premium look.',
      frontImage: '/cloth/embro.jpg',
      details: 'Professional embroidery adds texture and premium feel to your garments. Perfect for corporate branding.'
    },
    {
      name: 'Embossing',
      description: 'A high-end technique that creates a raised, 3D effect on fabric.',
      frontImage: '/cloth/embossed.jpg',
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
        <div className="text-center mb-16">
          <h2 className="section-title text-dark mb-4 ">
            Custom Printing & Embroidery Options
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <div
              key={method.name}
              className="flip-card h-80 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <div className={`flip-card-inner ${clickedCard === index ? 'md:transform-none' : ''}`}>
                {/* Front */}
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

                {/* Back */}
                <div className="flip-card-back relative">
                  <img
                    src={method.frontImage}
                    alt={method.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 text-white text-center rounded-2xl">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 font-alice text-coral">{method.name}</h3>
                      <p className="text-lg leading-relaxed font-alegreya">{method.details}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile overlay */}
              {clickedCard === index && (
                <div className="md:hidden absolute inset-0  backdrop-blur-sm flex items-center justify-center p-6 text-white text-center rounded-2xl z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 font-alice text-coral">{method.name}</h3>
                    <p className="text-lg leading-relaxed font-alegreya">{method.details}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PrintingMethods
