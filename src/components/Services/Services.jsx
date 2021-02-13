import React from 'react';
import {NavLink, Route} from "react-router-dom";

const Services = (props) => {

    let state = props.store.servicePage.links;

    return <div>
        <div className="services">
            <span className="services-title" data-aos="fade-right">Service links</span><br/>
            <div className="services-block">
                {
                    state.map(s => <div key={s.id}>
                        <div className="services-container ">
                            <img className="services-container__img" src={s.photo} alt="logo"/>
                            <NavLink to={s.link}
                                     className="services-container__link">{s.text}</NavLink>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
}

export default Services;
