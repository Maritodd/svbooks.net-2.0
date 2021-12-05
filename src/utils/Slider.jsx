import React from 'react';
import Slider from 'infinite-react-carousel';

const CustomSlider = ({ store }) => {
    const slides = store.service;

    const settings = {
        adaptiveHeight: true,
        autoplay: true,
        dots: false,
        initialSlide: 1,
        overScan: 1,
        slidesToShow: 1
    };

    return (
        <Slider {...settings}>
            {slides.map(slide => (
                <div key={slide.id}>
                    <div className="slider-container">
                        <img className="slider-container__img" src={slide.photo} alt="books" />
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CustomSlider;
