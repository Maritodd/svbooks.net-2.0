import React from 'react';
import slava from "../../assets/images/slava.jpg"
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import photo1 from "../../assets/images/collage18.jpg"
import photo2 from "../../assets/images/collage20.jpg"


const HomePage = ()  => {
    return (
        <div className="home">
            <div className="home-title">
                <h1>Welcome to the Book Restoration Designs LLC.</h1>
            </div>
            <div className="home-container">
                <h3 className="home-container__subtitle">Our Philosophy</h3>
                <span className="home-container__text">If we consider history, the past of all mankind, how do we know what we know? How do we know what has happened in the past? How do we learn about our own personal past?
                    Drawings and carving on the stone, writing on different materials such as clay, stone, wood, papyrus, bamboo, silk and finally paper have been useful. But the book format created the perfect method for information storage.
                    It has been said: “Show me your friends and I will know who you are.” But one could say “Show me your books and I will know who you are.” Books contain the reflected conditions of all mankind. We study what has been written and read in the past to understand ourselves today.
                    The goal of our company is to help clients protect their most precious memories found in documents, letters, photo albums, maps, diaries, and especially books.
                </span>
            </div>
            <ReactCompareSlider className="home-img"
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
        </div>
    );
}

export default HomePage;
