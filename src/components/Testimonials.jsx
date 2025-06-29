import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState, useRef } from 'react'
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

  const stats = [
    { number: '8M+', label: 'Orders completed', target: 8000000 },
    { number: '1000+', label: 'Brands Served', target: 1000 },
    { number: '7 Day', label: 'Turnaround available', target: 7 },
    { number: '100%', label: 'Customer Satisfaction', target: 100 }
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.target
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setAnimatedStats(prev => {
            const newStats = [...prev]
            newStats[index] = Math.floor(start)
            return newStats
          })
        }, 16)
      })
    }
  }, [inView])

  const formatNumber = (num, originalFormat) => {
    if (originalFormat.includes('M+')) {
      return `${(num / 1000000).toFixed(0)}M+`
    } else if (originalFormat.includes('+')) {
      return `${num}+`
    } else if (originalFormat.includes('%')) {
      return `${num}%`
    } else if (originalFormat.includes('Day')) {
      return `${num} Day`
    }
    return num.toString()
  }

  return (
    <section ref={sectionRef} className="py-16 bg-white parallax-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-dark mb-12 font-display">
            What People Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-8 rounded-3xl shadow-lg border-4 border-transparent relative overflow-hidden"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FF6B9D, #FFA500) border-box'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
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
                <p className="text-gray-600 mb-6 font-handwriting text-lg">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-dark text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-16 border-t border-gray-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-12 font-display">
            Proven. Trusted. Delivered.
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-dark mb-2 font-display">
                  {formatNumber(animatedStats[index], stat.number)}
                </div>
                <div className="text-gray-600 font-medium font-handwriting text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials