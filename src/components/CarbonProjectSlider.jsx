
import React from 'react';
import Slider from 'react-slick';
import '../styles/CarbonProjectSlider.css';
import AfricaCallCenters from './AfricaCallCenters'; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarbonProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
  };

  return (
    <div className="carbon-slider-container">
      <h2 className="carbon-slider-title">Our high impact carbon projects</h2>

      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="carbon-slide">
            <div className="carbon-slide-content">

            <div className="carbon-map">
                <AfricaCallCenters />
              </div>

              <div className="carbon-photo">
                <img src={`/Carbon-${i}.png`} alt={`Project ${i}`} className="carbon-img" />
              </div>
              
            </div>
          </div>
        ))}
      </Slider>

      <button className="btn btn-primary">Carbon projects</button>
    </div>
  );
};

export default CarbonProjectSlider;
