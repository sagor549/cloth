import { Check } from 'lucide-react'
import { useRef } from 'react'

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

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-dark mb-6">
            WHY CHOOSE US
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-medium text-gray-800 font-handwriting font-alegreya">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Large Featured Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div className="aspect-square">
                <img
                  src="/cloth/g5.jpg"
                  alt="Custom merchandise showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs