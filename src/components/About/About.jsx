import React from 'react';
import photo from "../../assets/images/homepage(2).jpg"
import photo1 from "../../assets/images/homepage1.jpg"


const About = () => {
    return (
        <div className="about">
            <span className="about-title tracking-in-contract">Who we are</span>
            <div className="about-text " data-aos="zoom-in-right" data-aos-duration="1000">In 1996 Slava (Vyacheslav) Vovkovskiy immigrated to the United States with his family.
                In 1997, he began theology studies at Holy Trinity Seminary, part of State University of New York,
                Albany. At the same time, he began work in the book restoration bindery at the Holy Trinity Monastery in
                Jordanville, New York.
                Slava apprenticed in the monastery working with monks and older students restoring newly printed and old
                books such as prayer books, gospels, and theological academic literature.
                Twenty years later after becoming a master restorer and conservator, he married Katrin. And today,
                together they have become Book Restoration Designs LLC.
            </div>
            <div className="about-container" data-aos="fade-left"  data-aos-duration="2000">
                <h2 className="about-container__title">In our company</h2>
                <div className="block">
                    <span className="block-name">Slava Vovkovskiy</span>
                    <div className="block-name__content">
                        <span className="block-name__content_num">01</span>
                        <span  className="block-name__content_desc">Book and paper conservator</span>
                        <span  className="block-name__content_num">02</span>
                        <span className="block-name__content_desc">Trained at Holy Trinity Orthodox Monastery</span>
                        <span  className="block-name__content_num">03</span>
                        <span className="block-name__content_desc">Specialising in Bibles, Atlases and Eastern European Bindings</span>
                    </div>
                    <br/>
                    <span className="block-name">Katrin Vovkovskiy</span>
                    <div className="block-name__content">
                        <span  className="block-name__content_num">01</span>
                        <span className="block-name__content_desc">Specialised in Leather bindings, storage boxes, Atlases</span>
                        <span  className="block-name__content_num">02</span>
                        <span className="block-name__content_desc">Specialised in cleaning and renewing books and atlases</span>
                    </div>
                </div>
            </div>
            <div className="about-quote" data-aos="fade-up" data-aos-duration="3000">
                <blockquote className="about-quote__block">
                    <img className="about-quote__img" src={photo} alt="Slava" />
                    <img className="about-quote__img" src={photo1} alt="Slava"/>
                    <p><q className="about-quote__text">By preserving the past, we are saving the future.</q></p>
                    <span className="about-quote__author">Slava Vovkovskiy</span>
                </blockquote>
            </div>
        </div>
    );
}

export default About;
