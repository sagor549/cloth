import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { category: 'Apron', image: '/cloth/apron.jpg', title: 'Custom Aprons' },
    { category: 'Bag', image: '/cloth/bag.jpg', title: 'Branded Bags' },
    { category: 'Caps', image: '/cloth/caps.jpg', title: 'Custom Caps' },
    { category: 'Corporate Event', image: '/cloth/corporate_event.jpg', title: 'Corporate Event Wear' },
    { category: 'Embossed', image: '/cloth/embossed.jpg', title: 'Embossed Design' },
    { category: 'Hoodie', image: '/cloth/hoodie.jpg', title: 'Stylish Hoodies' },
    { category: 'Jacket', image: '/cloth/jacket.jpg', title: 'Custom Jackets' },
    { category: 'Personal Branding', image: '/cloth/personal_branding.jpg', title: 'Personal Branding Apparel' },
    { category: 'Personal', image: '/cloth/personal.jpg', title: 'Personalized Products' },
    { category: 'Embroidered', image: '/cloth/embro.jpg', title: 'Premium Embroidery' },
    { category: 'Special g1', image: '/cloth/g1.jpg', title: 'Special Design g1' },
    { category: 'Special g2', image: '/cloth/g2.jpg', title: 'Special Design g2' },
    { category: 'Special g3', image: '/cloth/g3.jpg', title: 'Special Design g3' },
    { category: 'Special g4', image: '/cloth/g4.jpg', title: 'Special Design g4' },
    { category: 'Special g5', image: '/cloth/g5.jpg', title: 'Special Design g5' }
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
    <div className="min-h-screen bg-white">
      <Header />

      <main className="font-alice">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-coral/10 to-teal/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 italic">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-alegreya">
              Explore our portfolio of custom merchandise, from corporate apparel to creative designs.
              See the quality and craftsmanship that sets us apart.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer"
                  onClick={() => openImage(index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white font-alice">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-coral/10 to-teal/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 italic">
              Ready to Create Your Custom Merchandise?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-alegreya">
              Let's bring your vision to life with our premium printing and embroidery services.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-coral hover:bg-coral/90 text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      {/* Image Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
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
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
