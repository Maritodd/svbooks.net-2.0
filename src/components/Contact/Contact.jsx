import React from 'react';
import Map from "../../utils/Map";
import face from "../../assets/images/social2.svg";
import mail from "../../assets/images/social3.svg";
import {ReactCompareSlider} from "react-compare-slider";


const Contact = (props) => {
    return (
        <div className="contact">
            <span className="contact-title " data-aos="fade-right">find us</span>
            <div className="contact-map" data-aos="fade-up" data-aos-duration="3000">
                <Map store={props.store}/>
            </div>
            <div className="contact-page" data-aos="fade-left"  data-aos-duration="3000">
                <span className="contact-page__subtitle">Contact us</span>
                <div className="contact-page__block">
                    <span className="contact-page__block_item">Slava Vovkovskiy</span>
                    <span className="contact-page__block_item">Email: sv_books@yahoo.com</span>
                    <span className="contact-page__block_item">Phone: (224)616-4698 </span>
                    <p className="contact-page__block_item">Address</p>
                    <address className="contact-page__block_item">Third Lake, IL 60030</address>
                    <address className="contact-page__block_item">United States</address>
                    <address className="contact-page__block_item">PO Box #7276, Grayslake, IL, 60030</address>
                </div>
                <div className="contact-page__socials">
                    <a href="mailto:sv_books@yahoo.com" target="_blank" ><img className="contact-page__socials_link" src={mail} alt="mail"/></a>
                    <a href="https://www.facebook.com/Book-Restoration-Designs-LLC-2023844377712950/" target="_blank"><img className="contact-page__socials_link" src={face} alt="facebook"/></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
