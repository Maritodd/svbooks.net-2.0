import React, {Component} from 'react';
import Slider from 'infinite-react-carousel';
import {NavLink} from "react-router-dom";

export default class CustomSlider extends Component {

    state = this.props.store.servicePage.service;

    render()
    {
        const settings = {
            adaptiveHeight: true,
            autoplay: true,
            dots: true,
            initialSlide: true,
            overScan: 1,
            slidesToShow: 2
        };
        return (
            <div>
                <Slider {...settings}>
                    {
                        this.state.map(s => <div key={s.id}>
                            <div className="slider-container">
                                <img className="slider-container__img" src={s.photo} alt="photo"/>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        );
    }
}

