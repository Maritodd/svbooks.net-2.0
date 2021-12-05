import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = ({ store }) => {
    const serviceLinks = store.servicePage.links;

    return (
        <div className="services">
            <span className="services-title" data-aos="fade-right">Service Links</span><br />
            <div className="services-block">
                {serviceLinks.map(service => (
                    <div key={service.id}>
                        <div className="services-container">
                            <img className="services-container__img" src={service.photo} alt="Service Logo" />
                            <NavLink to={service.link} className="services-container__link">{service.text}</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
