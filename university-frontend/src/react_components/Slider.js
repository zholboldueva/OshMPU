import React, { useState,useEffect  } from 'react';
import '../styles/base.css';
import '../styles/base-be.css';
import '../styles/reset.css';
import '../styles/awesome.css';
import Swiper from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';


const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Automatically go to the next slide every 5 seconds
    const interval = setInterval(goNext, 10000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div  >
      <div 
        className="swiper-container w-100i border-0 swiper-container-fade swiper-container-initialized swiper-container-horizontal"
        id="slider-header"
        data-carousel="swiper"
        data-parallax="true"
        data-loop="true"
        data-speed="600"
        data-effect="fade"
      >
        <div className="swiper-wrapper" data-slider="container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide" data-swiper-slide-index={index}>
               <img className="img-full-cover obj-position-t" src={slide.imageSrc} alt={slide.altText} title={slide.title} />
              <div className="content-container position-absolute ">
                <div className="textbox-3-variante-2"  data-swiper-parallax="-100">
                  <div className="text">
                    <span>{slide.text}</span>
                  </div>
                  <div className="link">
                    <a href={slide.link} title={slide.linkTitle}>Jetzt informieren.<em className="icon-right-open"></em></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev" onClick={goPrev}  tabIndex="0" role="button" aria-label="Previous slide"></div>
        <div className="swiper-button-next" onClick={goNext}  tabIndex="0" role="button" aria-label="Next slide"></div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
  );
};

export default Slider;


  