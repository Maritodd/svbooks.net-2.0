import React from 'react';
import {NavLink} from "react-router-dom";



const Header = ()  => {
    return (
        <div className="header">
            <header className="header-container">
                <div className="header-container__link">
                    <NavLink to={"/home"}  activeClassName="active" className="header-container__item" ><span className="header-container__item_num">01.</span> Home</NavLink>
                </div>
                <div className="header-container__link">
                    <NavLink to={"/services"} activeClassName="active" className="header-container__item" ><span className="header-container__item_num">02.</span> Services</NavLink>
                </div>
                <div className="header-container__link">
                    <NavLink to={"/about"} activeClassName="active" className="header-container__item" ><span className="header-container__item_num">03.</span> About</NavLink>
                </div>
                <div className="header-container__link">
                    <NavLink to={"/contact"}  activeClassName="active" className="header-container__item" ><span className="header-container__item_num">04.</span> Contact</NavLink>
                </div>
            </header>
            <div className="header-sidebar">
                <div className="header-block">
                    <div className="header-block__circle"></div>
                </div>
                <div>Facebook</div>
            </div>
        </div>

    );
}

export default Header;
