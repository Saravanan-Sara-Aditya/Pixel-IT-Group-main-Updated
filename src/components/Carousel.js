import React, { useState, useEffect } from 'react';
import videoSource from '../assets/images/Bg_Video.mp4';

const slides = [
  {
    caption: 'Pixel IT Group',
  },
  // Add more slides if needed
];

const SlideshowBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{filter:"brightness(0.9)"}} className="slideshow-banner position-relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide slide-${index} ${index === currentSlide ? 'active' : ''}`}
        >
          <video autoPlay loop muted className="video">
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="d-none anton-regular d-lg-block caption">{slide.caption}</h1>
          <h1 className="d-lg-none anton-regular caption1 d-block">{slide.caption}</h1>
        </div>
      ))}
      <style jsx>{`
        .slideshow-banner {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .active {
          opacity: 1;
        }
        .video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 60px; /* Changed to H1 font size */
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .caption1 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .button {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px 20px;
          font-size: 18px;
          color: #000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          background: #FFF67E;
        }
        .button:hover {
          background-color:#000 ;
          color:#FFF67E;
        }
      `}</style>
    </div>
  );
};

export default SlideshowBanner;
