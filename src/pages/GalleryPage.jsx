import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const GalleryPage = () => {
  const galleryItems = [
    {
      category: 'T-Shirts',
      image: 'https://images.pexels.com/photos/8532579/pexels-photo-8532579.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Custom Printed T-Shirts'
    },
    {
      category: 'Hoodies',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Embroidered Hoodies'
    },
    {
      category: 'Caps',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Branded Caps'
    },
    {
      category: 'Workwear',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Corporate Uniforms'
    },
    {
      category: 'Embroidery',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Premium Embroidery'
    },
    {
      category: 'Accessories',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Custom Accessories'
    },
    {
      category: 'Team Wear',
      image: 'https://images.pexels.com/photos/8532579/pexels-photo-8532579.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sports Team Apparel'
    },
    {
      category: 'Event Merch',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Event Merchandise'
    },
    {
      category: 'Promotional',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Promotional Items'
    }
  ]

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Caps', 'Workwear', 'Embroidery', 'Accessories']

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-coral/10 to-teal/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 font-display italic">
                Our Gallery
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of custom merchandise, from corporate apparel to creative designs. 
                See the quality and craftsmanship that sets us apart.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full border-2 border-coral text-coral hover:bg-coral hover:text-white transition-colors duration-300 font-medium"
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-coral text-white text-sm rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-coral/10 to-teal/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 font-display italic">
                Ready to Create Your Custom Merchandise?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's bring your vision to life with our premium printing and embroidery services.
              </p>
              <motion.button
                className="bg-coral hover:bg-coral/90 text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default GalleryPage