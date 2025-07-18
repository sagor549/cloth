
import {  useRef } from 'react'
import { Star } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const sectionRef = useRef(null)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup Co.',
      text: 'Amazing quality and fast turnaround! Our team hoodies look professional and the embroidery is perfect.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Local Nonprofit',
      text: 'They helped us create awareness apparel that really resonates with our cause. Highly recommend!',
      rating: 5
    },
    {
      name: 'Jessica Rodriguez',
      company: 'Fitness Influencer',
      text: 'The custom merchandise for my brand launch exceeded expectations. Quality is top-notch!',
      rating: 5
    }
  ]

  

  

  

  return (
    <section ref={sectionRef} className="py-16 bg-white parallax-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="section-title text-dark mb-12 ">
            What People Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-3xl shadow-lg border-4 border-transparent relative overflow-hidden transform transition-transform duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FF6B9D, #FFA500) border-box'
                }}
              >
                {/* Decorative corner sparkles */}
                <div className="absolute top-4 left-4">
                  <div className="flex space-x-1">
                    <Star className="w-3 h-3 text-coral animate-sparkle" style={{ animationDelay: '0s' }} />
                    <Star className="w-3 h-3 text-yellow-400 animate-sparkle" style={{ animationDelay: '0.5s' }} />
                    <Star className="w-3 h-3 text-teal animate-sparkle" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 font-handwriting text-lg font-alegreya">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-dark text-lg font-alice">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-alegreya">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Testimonials
