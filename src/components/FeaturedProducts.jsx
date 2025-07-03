import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FeaturedProducts = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const sectionRef = useRef(null)

  

  const products = [
    {
      name: 'Hoodies & Zippers',
      price: '$23',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Embroidered Crewnecks',
      price: '$16',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Printed T-Shirts',
      price: '$8',
      image: 'https://images.pexels.com/photos/8532579/pexels-photo-8532579.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Branded Caps & Toques',
      price: '$15',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Workwear / Uniform Sets',
      price: '$30',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Bags and Jackets',
      price: '$20',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Custom Sweatpants',
      price: '$25',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Branded Polo Shirts',
      price: '$18',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Custom Tank Tops',
      price: '$12',
      image: 'https://images.pexels.com/photos/8532579/pexels-photo-8532579.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Promotional Backpacks',
      price: '$28',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Logo Hooded Sweatshirts',
      price: '$32',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Custom Aprons',
      price: '$22',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const productsPerPage = 6
  const totalPages = Math.ceil(products.length / productsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentProducts = () => {
    const start = currentPage * productsPerPage
    return products.slice(start, start + productsPerPage)
  }

  return (
    <section ref={sectionRef} id="products" className="py-16 md:py-20 bg-white parallax-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title text-dark mb-4 ">
            Featured Products
          </h2>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200"
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Product Grid - 2x3 grid with reduced height */}
          <div className="px-10 sm:px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
              {getCurrentProducts().map((product, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  className="group relative overflow-hidden rounded-lg md:rounded-xl shadow-md md:shadow-lg cursor-pointer h-48 sm:h-56 md:h-64"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-2 sm:p-3 md:p-4">
                      <h3 className="text-xs sm:text-sm md:text-base font-bold mb-1 md:mb-2 font-alice">{product.name}</h3>
                      <p className="text-sm md:text-base font-semibold text-coral font-alegreya">Starting at {product.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Page Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                    index === currentPage ? 'bg-coral' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts