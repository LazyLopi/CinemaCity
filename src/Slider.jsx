import React, { useState } from 'react';
import './slider.css';
import zdjecie1 from './zdjecie1.jpg';
import zdjecie2 from './zdjecie2.jpg';
import zdjecie3 from './zdjecie3.jpg';
import zdjecie4 from './zdjecie4.jpg';
import zdjecie5 from './zdjecie5.jpg';
import zdjecie6 from './zdjecie6.jpg';
import zdjecie7 from './zdjecie7.jpg';

const Slider = () => {
  const images = [
    zdjecie1,
    zdjecie2,
    zdjecie3,
    zdjecie4,
    zdjecie5,
    zdjecie6,
    zdjecie7
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          prevSlide();
        }}
      >
        {"<"}
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          nextSlide();
        }}
      >
        {">"}
      </button>
    </div>
  );
  
  
  
};

export default Slider;