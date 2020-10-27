import React, {Component} from 'react';
import Slider from 'infinite-react-carousel';


export default class CustomSlider extends Component {


    state = this.props.store.servicePage;

    render() {
        const settings = {
            adaptiveHeight: true,
            autoplay: true,
            dots: true,
            initialSlide: true,
            overScan: 1,
            slidesToShow: 2
        };
        debugger

        return (
            <div>
                <Slider {...settings}>
                    {
                         this.state.period.map(e => <div key={e.id}>
                            <div className="slider-container">
                                <img className="slider-container__img" src={e.photo} alt="photo"/>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        );
    }
}

