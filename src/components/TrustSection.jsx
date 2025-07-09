import { useRef } from 'react'

const TrustSection = () => {
  const sectionRef = useRef(null)

  const clients = [
    { name: 'Client 1', logo: '/cloth/logos/logo1.png' },
    { name: 'Client 5', logo: '/cloth/logo5.png' },
    { name: 'Client 7', logo: '/cloth/logo7.png' },
    { name: 'Client 8', logo: '/cloth/logo8.png' },
    { name: 'Client 9', logo: '/cloth/logo9.png' },
    { name: 'Client 10', logo: '/cloth/logo15.png' },
    { name: 'Client 11', logo: '/cloth/logo11.png' },
    { name: 'Client 12', logo: '/cloth/logo12.png' },
    { name: 'Client 14', logo: '/cloth/logo14.png' },
    { name: 'Client 15', logo: '/cloth/logo15.png' },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-light overflow-hidden parallax-section">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 text-center">
        <h2 className="section-title text-dark mb-8">
          Trusted by 1,000,000+
        </h2>

        {/* Updated Logo Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center"
              >
                <div className="
                  relative
                  w-[100px] h-[100px] 
                  md:w-[150px] md:h-[150px]
                  flex items-center justify-center
                ">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="
                      max-h-[85%] 
                      max-w-[85%]
                      w-auto h-auto
                      object-contain
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
