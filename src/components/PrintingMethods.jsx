import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrintingMethods = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  
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
  ];

  const handleCardClick = (index) => {
    if (window.innerWidth < 768) {
      setFlippedCard(flippedCard === index ? null : index);
    }
  };

  // Close card when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth >= 768) return;
      
      const isCard = e.target.closest('.flip-card');
      if (!isCard && flippedCard !== null) {
        setFlippedCard(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [flippedCard]);

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title font-bold text-gray-900 mb-4">
            Custom Printing & Embroidery Options
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <div
              key={method.name}
              className={`flip-card h-80 cursor-pointer ${flippedCard === index ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0"></div>
                  <img
                    src={method.frontImage}
                    alt={method.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 rounded-b-2xl transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 font-alice">{method.name}</h3>
                   
                  </div>
                  
                </div>

                {/* Back */}
                <div className="flip-card-back relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 z-0"></div>
                  <img
                    src={method.frontImage}
                    alt={method.name}
                    className="w-full h-full object-cover rounded-2xl opacity-30"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center z-10">
                    <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-alice">{method.name}</h3>
                    <p className="text-lg leading-relaxed font-alegreya">{method.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .flip-card {
          perspective: 1200px;
          height: 20rem;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          overflow: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        @media (min-width: 768px) {
          .flip-card .flip-card-inner {
            transform: none !important;
          }
          
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg) !important;
          }
          
          .flip-card.flipped .flip-card-inner {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PrintingMethods;