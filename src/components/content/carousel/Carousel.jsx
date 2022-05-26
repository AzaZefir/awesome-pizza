import React from 'react';
import Slider from 'react-slick/lib/slider';

const Carousel = ({ sliderCard }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
  };
  return (
    <div>
      <Slider {...settings} className="slider__wrapper">
        {sliderCard.map((slide) => (
          <div key={slide.id} className='slider__img'>
            <img src={slide.img} alt="First slide" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
