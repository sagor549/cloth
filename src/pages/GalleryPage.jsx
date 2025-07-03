import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  
  
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
    
  ];

  const openImage = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    setSelectedImage(prev => {
      if (direction === 'next') {
        return prev === galleryItems.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? galleryItems.length - 1 : prev - 1;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white font-alice">
      <Header />
      
      <main className="">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-coral/10 to-teal/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 italic">
                Our Gallery
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-alegreya">
                Explore our portfolio of custom merchandise, from corporate apparel to creative designs. 
                See the quality and craftsmanship that sets us apart.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openImage(index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white font-alice">{item.title}</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 italic">
                Ready to Create Your Custom Merchandise?
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-alegreya">
                Let's bring your vision to life with our premium printing and embroidery services.
              </p>
              <motion.button
                onClick={() => navigate('/contact')}
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

      {/* Image Lightbox */}
      {selectedImage !== null && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-6 right-6 text-white text-4xl z-50"
            onClick={closeImage}
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 text-white text-4xl z-50 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() => navigateImage('prev')}
          >
            &lt;
          </button>
          
          <div className="max-w-4xl w-full max-h-[80vh] relative">
            <img 
              src={galleryItems[selectedImage].image} 
              alt={galleryItems[selectedImage].title} 
              className="w-full h-full object-contain max-h-[80vh]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
              <h3 className="text-white text-xl font-bold">
                {galleryItems[selectedImage].title}
              </h3>
              <p className="text-gray-300 mt-1">
                {selectedImage + 1} of {galleryItems.length}
              </p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 text-white text-4xl z-50 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() => navigateImage('next')}
          >
            &gt;
          </button>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}

export default GalleryPage;