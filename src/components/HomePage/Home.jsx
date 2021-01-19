import React from 'react';
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import photo1 from "../../assets/images/collage18.jpg"
import photo2 from "../../assets/images/collage20.jpg"


const HomePage = (props) => {
    return (
        <div className="home">
            <div className="home-title" data-aos="fade-up" data-aos-duration="3000">
                <h1>Welcome to the Book Restoration Designs LLC.</h1>
            </div>
            <div className="home-container" data-aos="fade-right"  data-aos-duration="3000">
                <span className="home-container__subtitle">Our Philosophy</span>
                <span className="home-container__text"><br/>If we consider history, the past of all mankind, how do we know what we know? How do we know what has happened in the past? How do we learn about our own personal past?
                    <br/>Drawings and carving on the stone, writing on different materials such as clay, stone, wood, papyrus, bamboo, silk and finally paper have been useful. But the book format created the perfect method for information storage.
                     <br/>It has been said: “Show me your friends and I will know who you are.” But one could say “Show me your books and I will know who you are.” Books contain the reflected conditions of all mankind. We study what has been written and read in the past to understand ourselves today.
                     <br/>The goal of our company is to help clients protect their most precious memories found in documents, letters, photo albums, maps, diaries, and especially books.
                </span>
            </div>
            <ReactCompareSlider className="home-img" data-aos="fade-left"  data-aos-duration="3000"
                                itemOne={
                                    <ReactCompareSliderImage className="home-img__item"
                                                             src={photo1}
                                                             alt="Image one"
                                    />
                                }
                                itemTwo={
                                    <ReactCompareSliderImage className="home-img__item"
                                                             src={photo2}
                                                             alt="Image two"
                                    />
                                }
            />
            {/*<div className="home-staff">*/}
            {/*    <div className="home-staff__block">*/}
            {/*        <img className="home-staff__block_img first-photo"  src={photo3} alt="photo"/>*/}
            {/*        <span>Hello</span>*/}
            {/*    </div>*/}
            {/*    <div className="home-staff__block">*/}
            {/*        <img className="home-staff__block_img second-photo" src={photo4} alt="photo"/>*/}
            {/*        <span>Hello</span>*/}
            {/*    </div>*/}
            {/*    <div className="home-staff__block">*/}
            {/*        <img className="home-staff__block_img third-photo" src={photo5} alt="photo"/>*/}
            {/*        <span>Hello</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default HomePage;
