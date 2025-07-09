import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FeaturedProducts = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const diff = touchStartX.current - touchEndX.current
    const swipeThreshold = 50
    
    if (diff > swipeThreshold) {
      nextPage()
    } else if (diff < -swipeThreshold) {
      prevPage()
    }
    
    touchStartX.current = 0
    touchEndX.current = 0
  }

  const products = [
    {
      name: 'Hoodies & Zippers',
      price: '$23',
      image: '/cloth/hoodie.jpg'
    },
    {
      name: 'Embroidered Crewnecks',
      price: '$16',
      image: '/cloth/embossed.jpg'
    },
    {
      name: 'Printed T-Shirts',
      price: '$8',
      image: '/cloth/tshirt.jpg'
    },
    {
      name: 'Branded Caps & Toques',
      price: '$15',
      image: '/cloth/caps.jpg'
    },
    {
      name: 'Workwear / Uniform Sets',
      price: '$30',
      image: '/cloth/uni.jpg'
    },
    {
      name: 'Socks & Footwear',
      price: '$10',
      image: '/cloth/sock.jpg'
    },
    {
      name: 'Bags ',
      price: '$20',
      image: '/cloth/bag.jpg'
    },
    {
      name: ' Jackets',
      price: '$20',
      image: '/cloth/jacket.jpg'
    },
    {
      name: 'Custom Sweatpants',
      price: '$25',
      image: '/cloth/swim.jpg'
    },
    {
      name: 'Custom Aprons',
      price: '$22',
      image: '/cloth/apron.jpg'
    }
  ]

  const productsPerPage = isMobile ? 4 : products.length
  const totalPages = Math.ceil(products.length / (isMobile ? 4 : 1))

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentProducts = () => {
    if (!isMobile) return products
    const start = currentPage * 4
    return products.slice(start, start + 4)
  }

  return (
    <section 
      ref={sectionRef} 
      id="products" 
      className="py-12 md:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-10 md:mb-14">
          <h2 className=" font-bold text-gray-900 mb-4 section-title">
            Featured Products
          </h2>
        </motion.div>

        <div className="relative">
          {isMobile && totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={nextPage}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
                aria-label="Next products"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          <div 
            ref={containerRef}
            onTouchStart={isMobile ? handleTouchStart : undefined}
            onTouchMove={isMobile ? handleTouchMove : undefined}
            onTouchEnd={isMobile ? handleTouchEnd : undefined}
            className="px-2 sm:px-4"
          >
            <div className={`grid ${
              isMobile 
                ? 'grid-cols-2 gap-3' 
                : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5'
            }`}>
              {getCurrentProducts().map((product, index) => (
                <motion.div
                  key={isMobile ? `${currentPage}-${index}` : index}
                  className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-full pb-[125%] relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                    <div className="text-center text-white">
                      <h3 className="text-xs sm:text-sm font-medium mb-1">{product.name}</h3>
                      <p className="text-xs font-semibold text-orange-300">Starting at {product.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {isMobile && totalPages > 1 && (
            <div className="flex justify-center mt-6 overflow-x-auto py-2">
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentPage ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
