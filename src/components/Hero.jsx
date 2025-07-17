import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const videoRowRef = useRef(null);
  const navigate = useNavigate();

  const videoSources = [
    '/cloth/vid1.mp4',
    '/cloth/vid2.mp4',
    '/cloth/vid3.mp4',
    '/cloth/vid4.mp4'
  ];

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    const videoRow = videoRowRef.current;

    // Content fade out on scroll
    gsap.to(content, {
      opacity: 0,
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Seamless video marquee animation
    const videos = videoRow.querySelectorAll('.video-item');
    const totalWidth = Array.from(videos).reduce((sum, video) => sum + video.offsetWidth, 0);
    
    gsap.to(videoRow, {
      x: () => `-=${totalWidth / 2}`,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => {
          const parsed = parseFloat(x);
          return parsed % (totalWidth / 2);
        })
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="relative h-[60vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Video Marquee Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-800 to-gray-900 overflow-hidden">
        {/* Video row container */}
        <div 
          ref={videoRowRef}
          className="absolute inset-y-0 left-0 h-full flex items-center nowrap"
        >
          {/* Double the videos for seamless looping */}
          {[...videoSources, ...videoSources].map((src, i) => (
            <div 
              key={i} 
              className="video-item relative h-full w-[50vw] sm:w-[25vw] flex-shrink-0"
            >
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="max-w-4xl mx-auto px-2">
          <h1 
            className="text-3xl font-alice sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-yellow-400 block mb-2">
              Custom print, press, stitch, and impress.
            </span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-alegreya"
          >
            We specialize in turning your brand into wearable art — with embossed details, 
            rich embroidery, and custom garments that speak louder than logos.
          </p>
          
          <div>
            <button
              className="bg-coral hover:bg-coral/90 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl transition-all duration-300"
              onClick={handleGetQuote}
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;