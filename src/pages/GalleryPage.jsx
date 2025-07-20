import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const galleryItems = [
    { type: 'image', category: 'Apron', image: '/cloth/apron1.jpg', title: 'Custom Aprons' },
    { type: 'image', category: 'Bag', image: '/cloth/bag.jpg', title: 'Branded Bags' },
    { type: 'image', category: 'Caps', image: '/cloth/caps.jpg', title: 'Custom Caps' },
    { type: 'image', category: 'Corporate Event', image: '/cloth/s1.jpg', title: 'Product' },
    { type: 'image', category: 'Embossed', image: '/cloth/embossed.jpg', title: 'Embossed Design' },
    { type: 'image', category: 'Hoodie', image: '/cloth/hoodie.jpg', title: 'Stylish Hoodies' },
    { type: 'image', category: 'Jacket', image: '/cloth/jacket.jpg', title: 'Custom Jackets' },
    { type: 'image', category: 'Personal Branding', image: '/cloth/personal_branding.jpg', title: 'Personal Branding Apparel' },
    
    { type: 'image', category: 'Embroidered', image: '/cloth/embro.jpg', title: 'Premium Embroidery' },
    { type: 'image', category: 'Special g1', image: '/cloth/g1.jpg', title: 'Special Design ' },
    { type: 'image', category: 'Special g2', image: '/cloth/g2.jpg', title: 'Special Design ' },
    { type: 'image', category: 'Special g3', image: '/cloth/g3.jpg', title: 'Special Design' },
    
    { type: 'image', category: 'Special g5', image: '/cloth/s2.jpg', title: 'Special Design' },
    
    // Video items with thumbnails
    { type: 'video', category: 'Process', video: '/cloth/vid1.mp4', thumbnail: '/cloth/vid1.png', title: 'Production Process' },
    { type: 'video', category: 'Showcase', video: '/cloth/vid2.mp4', thumbnail: '/cloth/vid2.png', title: 'Product Showcase' },
    { type: 'video', category: 'Behind Scenes', video: '/cloth/vid3.mp4', thumbnail: '/cloth/vid3.png', title: 'Behind the Scenes' },
    { type: 'video', category: 'Behind Scenes', video: '/cloth/vid4.mp4', thumbnail: '/cloth/vid4.png', title: 'Behind the Scenes' },
    { type: 'video', category: 'Behind Scenes', video: '/cloth/vid5.mp4', thumbnail: '/cloth/vid5.png', title: 'Behind the Scenes' }
  ];

  const openItem = (index) => {
    setSelectedItem(index);
    setIsPlaying(galleryItems[index].type === 'video');
    document.body.style.overflow = 'hidden';
  };

  const closeItem = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current = null;
    }
    setSelectedItem(null);
    setIsPlaying(false);
    document.body.style.overflow = 'auto';
  };

  const navigateItem = (direction) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current = null;
    }
    
    const newIndex = direction === 'next'
      ? (selectedItem === galleryItems.length - 1 ? 0 : selectedItem + 1)
      : (selectedItem === 0 ? galleryItems.length - 1 : selectedItem - 1);
    
    setSelectedItem(newIndex);
    setIsPlaying(galleryItems[newIndex].type === 'video');
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
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
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        if (galleryItems[selectedItem].type === 'video') {
          togglePlay();
        }
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
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6  section-title">
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
                  className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer bg-black"
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
                      {/* Use thumbnail for videos */}
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
            onClick={(e) => {
              e.stopPropagation();
              navigateItem('prev');
            }}
          >
            &lt;
          </button>

          <div 
            className="max-w-4xl w-full max-h-[80vh] relative"
            onClick={() => {
              if (galleryItems[selectedItem].type === 'video') {
                togglePlay();
              }
            }}
          >
            {galleryItems[selectedItem].type === 'image' ? (
              <img 
                src={galleryItems[selectedItem].image}
                alt={galleryItems[selectedItem].title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
            ) : (
              <div className="relative w-full h-full">
                <video 
                  ref={videoRef}
                  key={selectedItem} // Force re-render when video changes
                  className="w-full h-full object-contain max-h-[80vh]"
                  autoPlay
                  muted
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source 
                    src={galleryItems[selectedItem].video} 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
                
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/30 rounded-full p-6 cursor-pointer">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="white" 
                        className="w-16 h-16"
                      >
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <button 
            className="absolute right-4 text-white text-4xl z-50 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              navigateItem('next');
            }}
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