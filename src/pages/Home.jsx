import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import ImageFade from '../components/ImageFade';
import heroImage from '../assets/images/bgpage1_copy.jpg';
import homepageImage from '../assets/images/homepage1full.jpg';
import cardImg1 from '../assets/images/homepage3.jpg';
import cardImg2 from '../assets/images/homepage1.jpg';
import cardImg3 from '../assets/images/homepage2.jpg';
import icon1 from '../assets/images/icon1.jpg';
import icon2 from '../assets/images/icon2.jpg';
import icon3 from '../assets/images/icon3.jpg';
import icon4 from '../assets/images/icon4.jpg';
import book1 from '../assets/images/page5-1.webp';
import book2 from '../assets/images/page5-2.webp';
import book3 from '../assets/images/page5-3.webp';

const Home = () => {
  const [showImageFade, setShowImageFade] = useState(false);
  const [blockObjects, setBlockObjects] = useState([
    { id: 1, image: cardImg1 },
    { id: 2, image: cardImg2 },
    { id: 3, image: cardImg3 },
  ]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);
  
  // Create refs for sections that will have scroll effects
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const iconicRef = useRef(null);
  const booksRef = useRef(null);
  
  // Carousel state: index of center image
  const [centerIndex, setCenterIndex] = useState(0);
  const images = [cardImg1, cardImg2, cardImg3];

  // Helper to get indices for left, center, right
  const getCarouselIndices = () => {
    const left = (centerIndex + images.length - 1) % images.length;
    const center = centerIndex;
    const right = (centerIndex + 1) % images.length;
    return [left, center, right];
  };

  // Animation state
  const [direction, setDirection] = useState(null); // 'next' or 'prev'
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      checkVisibility();
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check after component mounts
    setTimeout(checkVisibility, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Function to check if elements are visible and add animation classes
  const checkVisibility = () => {
    const elements = [
      { ref: page1Ref, className: 'fade-in-up' },
      { ref: page2Ref, className: 'fade-in-up' },
      { ref: page3Ref, className: 'fade-in-up' },
      { ref: iconicRef, className: 'fade-in-up' },
      { ref: booksRef, className: 'fade-in-up' }
    ];
    
    elements.forEach(({ ref, className }) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          ref.current.classList.add('visible', className);
        }
      }
    });
  };

  const displayImgFade = () => {
    document.body.style.overflow = 'hidden';
    setShowImageFade(true);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCenterIndex((prev) => (prev + 1) % images.length);
      setIsAnimating(false);
    }, 400); // match CSS transition duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCenterIndex((prev) => (prev + images.length - 1) % images.length);
      setIsAnimating(false);
    }, 400);
  };

  const getCardClass = (id) => {
    if (id === 1) return '';
    if (id === 2) return 'center-card';
    if (id === 3) return '';
    return '';
  };

  const getCardStyle = (id) => {
    if (id === 1) return { left: 0 };
    if (id === 3) return { right: 0 };
    return {};
  };

  // Get responsive classes based on screen width
  const getResponsiveClass = () => {
    if (windowWidth <= 767) {
      return 'mobile-view';
    } else if (windowWidth <= 991) {
      return 'tablet-view';
    } else {
      return '';
    }
  };
  
  // Calculate parallax effect for hero image based on scroll position
  const getHeroParallaxStyle = () => {
    const translateY = scrollY * 0.3; // Adjust the multiplier for more or less effect
    return {
      transform: `translateY(${translateY}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <>
      {showImageFade && <ImageFade onClose={() => setShowImageFade(false)} />}
      <div className={`mainwrapper ${showImageFade ? 'hide' : ''} ${getResponsiveClass()}`}>
        <div className="page-1 container scroll-section" ref={page1Ref}>    
          <div className="image-wrapper1" style={getHeroParallaxStyle()}>
            <img src={heroImage} alt="Portrait" />
          </div>
        </div>
        <div className="page-2 container scroll-section" ref={page2Ref}>    
          <blockquote className="page-2_content">
            <i className='bx bxs-quote-alt-left'></i>
            <p>
              I'm inspired by humanity
              <span id="text-center">in all its forms. </span>
              <span>Photography is an excuse</span>
              <span>to get closer to people and</span>
              <span>to hear their stories. That's</span>
              <span id="text-center">how I got started as a</span>
              <span id="text-center">photographer, simply </span>
              <span>meeting people and taking </span>
              <span id="text-center">the time to talk to them.</span>
            </p>
            <i className='bx bxs-quote-alt-right'></i>
          </blockquote>

          <div className="page-2_image">
            <img src={homepageImage} alt="Portrait" />
          </div>
        </div>
        
        <div className="page-3 container scroll-section" ref={page3Ref}>    
          <header>
            <p className="title">LATEST RELEASES</p>
          </header>

          <section className="latest-body">
            <button 
              id="lastestBodyLeft" 
              onClick={handlePrev}
              className="nav-button"
              style={{ 
                zIndex: 2,
                top: '50%'
              }}
            >
              <i className='bx bx-chevron-left'></i>
            </button>
            <div className="list-card">
              {getCarouselIndices().map((imgIdx, pos) => {
                // pos: 0=left, 1=center, 2=right
                let positionClass = '';
                if (pos === 0) positionClass = 'carousel-left';
                if (pos === 1) positionClass = 'carousel-center';
                if (pos === 2) positionClass = 'carousel-right';
                let animClass = '';
                if (isAnimating && direction === 'next') {
                  animClass = 'carousel-anim-next';
                } else if (isAnimating && direction === 'prev') {
                  animClass = 'carousel-anim-prev';
                }
                return (
                  <div
                    key={imgIdx}
                    className={`card-item ${positionClass} ${animClass}`}
                    style={{ transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)' }}
                    onClick={pos === 1 ? displayImgFade : undefined}
                  >
                    <img
                      src={images[imgIdx]}
                      alt={`Card ${imgIdx + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)'
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <button 
              id="lastestBodyRight"
              onClick={handleNext}
              className="nav-button"
              style={{
                top: '50%'
              }}
            >
              <i className='bx bx-chevron-right'></i>
            </button>
          </section>
        </div>

        <div 
          className={`iconic-section fullscreen-section ${windowWidth <= 767 ? 'mobile-iconic' : ''} scroll-section`}
          ref={iconicRef}
        >
          <div className="section-content">
            <h2 className="section-title">ICONIC</h2>
            <div className="iconic-images">
              {[
                {src: icon1, alt: "Portrait of elderly man with hat", href: "/chanoihutthuoc-1"},
                {src: icon2, alt: "Portrait of man smoking pipe", href: "/chanoihutthuoc-2"},
                {src: icon3, alt: "Woman on bicycle", href: "/chanoihutthuoc-3"},
                {src: icon4, alt: "Close-up portrait of child", href: "/chanoihutthuoc-4"}
              ].map((icon, index) => (
                <div 
                  key={index} 
                  className={`iconic-image-container ${windowWidth <= 991 && index >= 2 ? 'second-row' : ''}`}
                  style={{ 
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <a href={icon.href}>
                    <img src={icon.src} alt={icon.alt} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="books-section fullscreen-section">
          <div className="section-content books-content">
            <h2 className="section-title books-title" type="books">BOOKS</h2>
            <div className="books-circle-container">
              <div className="book book-top">
                <img src={book3} alt="Book - Our Heritage" />
              </div>
              <div className="book book-bottom-left">
                <img src={book1} alt="Book - 100 Iconic Portraits" />
              </div>
              <div className="book book-bottom-right">
                <img src={book2} alt="Book - Vietnam" />
              </div>
              <div className="circle-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home; 