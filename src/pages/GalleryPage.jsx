import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const videoRef = useRef(null);

  const galleryItems = [
    { type: 'image', category: 'Apron', image: '/cloth/apron.jpg', title: 'Custom Aprons' },
    { type: 'image', category: 'Bag', image: '/cloth/bag.jpg', title: 'Branded Bags' },
    { type: 'image', category: 'Caps', image: '/cloth/caps.jpg', title: 'Custom Caps' },
    { type: 'image', category: 'Corporate Event', image: '/cloth/corporate_event.jpg', title: 'Corporate Event Wear' },
    { type: 'image', category: 'Embossed', image: '/cloth/embossed.jpg', title: 'Embossed Design' },
    { type: 'image', category: 'Hoodie', image: '/cloth/hoodie.jpg', title: 'Stylish Hoodies' },
    { type: 'image', category: 'Jacket', image: '/cloth/jacket.jpg', title: 'Custom Jackets' },
    { type: 'image', category: 'Personal Branding', image: '/cloth/personal_branding.jpg', title: 'Personal Branding Apparel' },
    { type: 'image', category: 'Personal', image: '/cloth/personal.jpg', title: 'Personalized Products' },
    { type: 'image', category: 'Embroidered', image: '/cloth/embro.jpg', title: 'Premium Embroidery' },
    { type: 'image', category: 'Special g1', image: '/cloth/g1.jpg', title: 'Special Design g1' },
    { type: 'image', category: 'Special g2', image: '/cloth/g2.jpg', title: 'Special Design g2' },
    { type: 'image', category: 'Special g3', image: '/cloth/g3.jpg', title: 'Special Design g3' },
    { type: 'image', category: 'Special g4', image: '/cloth/g4.jpg', title: 'Special Design g4' },
    { type: 'image', category: 'Special g5', image: '/cloth/g5.jpg', title: 'Special Design g5' },
    // Video items
    { type: 'video', category: 'Process', video: '/cloth/production_process.mp4', thumbnail: '/cloth/video_thumb1.jpg', title: 'Production Process' },
    { type: 'video', category: 'Showcase', video: '/cloth/product_showcase.mp4', thumbnail: '/cloth/video_thumb2.jpg', title: 'Product Showcase' },
    { type: 'video', category: 'Behind Scenes', video: '/cloth/behind_scenes.mp4', thumbnail: '/cloth/video_thumb3.jpg', title: 'Behind the Scenes' }
  ];

  const openItem = (index) => {
    setSelectedItem(index);
    document.body.style.overflow = 'hidden';
  };

  const closeItem = () => {
    // Pause video if playing
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current = null;
    }
    
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const navigateItem = (direction) => {
    // Pause current video if playing
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current = null;
    }
    
    setSelectedItem(prev => {
      if (direction === 'next') {
        return prev === galleryItems.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? galleryItems.length - 1 : prev - 1;
      }
    });
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedItem === null) return;
      
      if (e.key === 'Escape') {
        closeItem();
      } else if (e.key === 'ArrowRight') {
        navigateItem('next');
      } else if (e.key === 'ArrowLeft') {
        navigateItem('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

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
                  onClick={() => openItem(index)}
                >
                  {/* Thumbnail display */}
                  {item.type === 'image' ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/30 rounded-full p-4">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="white" 
                            className="w-12 h-12"
                          >
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white font-alice">{item.title}</h3>
                      {item.type === 'video' && (
                        <p className="text-gray-200 mt-1 flex items-center">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-4 h-4 mr-1"
                          >
                            <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                          </svg>
                          Video
                        </p>
                      )}
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

      {/* Lightbox */}
      {selectedItem !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white text-4xl z-50"
            onClick={closeItem}
          >
            &times;
          </button>

          <button 
            className="absolute left-4 text-white text-4xl z-50 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() => navigateItem('prev')}
          >
            &lt;
          </button>

          <div className="max-w-4xl w-full max-h-[80vh] relative">
            {galleryItems[selectedItem].type === 'image' ? (
              <img 
                src={galleryItems[selectedItem].image}
                alt={galleryItems[selectedItem].title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
            ) : (
              <video 
                ref={videoRef}
                controls
                autoPlay
                className="w-full h-full object-contain max-h-[80vh]"
              >
                <source 
                  src={galleryItems[selectedItem].video} 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
              <h3 className="text-white text-xl font-bold">
                {galleryItems[selectedItem].title}
              </h3>
              <p className="text-gray-300 mt-1">
                {selectedItem + 1} of {galleryItems.length}
                {galleryItems[selectedItem].type === 'video' && (
                  <span className="ml-2 inline-flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-4 h-4 ml-2 mr-1"
                    >
                      <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                    </svg>
                    Video
                  </span>
                )}
              </p>
            </div>
          </div>

          <button 
            className="absolute right-4 text-white text-4xl z-50 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() => navigateItem('next')}
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