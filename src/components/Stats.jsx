import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const stats = [
    { number: '80K+', label: 'Orders completed', target: 80000 },
    { number: '1000+', label: 'Brands Served', target: 1000 },
    { number: '7', label: 'years Industry Expertise', target: 7 },
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
    if (originalFormat.includes('K+')) {
      return `${Math.floor(num / 1000)}K+`
    } else if (originalFormat.includes('M+')) {
      return `${(num / 1000000).toFixed(0)}M+`
    } else if (originalFormat.includes('+')) {
      return `${num}+`
    } else if (originalFormat.includes('%')) {
      return `${num}%`
    }
    return num.toString()
  }

  return (
    <div>
      <div
        ref={ref}
        className="text-center pt-16 border-t border-gray-200"
      >
        <h3 className="font-bold text-dark mb-12 section-title">
        Proven Results. Exceptional Craft.
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-dark mb-2 font-alegreya">
                {formatNumber(animatedStats[index], stat.number)}
              </div>
              <div className="text-gray-600 font-medium font-alegreya text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats