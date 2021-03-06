import React from 'react';
import {NavLink} from "react-router-dom";
import face from "../../assets/images/social1.svg";
import mail from "../../assets/images/social.svg";
import BurgerMenu from "./Burger";
import logo from "../../assets/images/logoSKM.png";

const Header = (props) => {
    return (
        <div>
            <div className="header">
                <header className="header-container">
                    <div className="header-container__link">
                        <NavLink to={"/home"} activeClassName="active" className="header-container__item"><span
                            className="header-container__item_num">01.</span> Home</NavLink>
                    </div>
                    <div className="header-container__link">
                        <NavLink to={"/services"} activeClassName="active"
                                 className="header-container__item dropdown"><span
                            className="header-container__item_num">02.</span> Services</NavLink>
                        <div className="dropdown-content ">
                            <NavLink to={"/restorations"} className="dropdown-content__item">Book restoration</NavLink>
                            <NavLink to={"/bibles"} className="dropdown-content__item">Family Bibles</NavLink>
                            <NavLink to={"/maps"} className="dropdown-content__item">Map & Print Conservation</NavLink>
                            <NavLink to={"/boxes"} className="dropdown-content__item">Storage boxes</NavLink>
                        </div>
                    </div>
                    <div className="header-container__link">
                        <NavLink to={"/about"} activeClassName="active" className="header-container__item"><span
                            className="header-container__item_num">03.</span> About</NavLink>
                    </div>
                    <div className="header-container__link">
                        <NavLink to={"/contact"} activeClassName="active" className="header-container__item"><span
                            className="header-container__item_num">04.</span> Contact </NavLink>
                    </div>
                </header>
            </div>
            <div className="wrapper">
                <div className="sidebar">
                    <div className="sidebar-block" data-aos="zoom-in">
                        <NavLink to={"/home"} className="sidebar-block__circle"></NavLink>
                    </div>
                    <div className="sidebar-container">
                        <a href="https://www.facebook.com/Book-Restoration-Designs-LLC-2023844377712950/" rel="noopener noreferrer"
                           target="_blank"><img className="sidebar-container__link slide-in-left" src={face}
                                                alt="facebook"/></a>
                        <a href="mailto:sv_books@yahoo.com" rel="noopener noreferrer" target="_blank"><img
                            className="sidebar-container__link slide-in-left" src={mail} alt="mail"/></a>
                    </div>
                </div>
            </div>
            <div className="burger">
                <BurgerMenu />
            </div>
            <div className="logo">
                <div className="logo-block">
                    <NavLink to={"/home"}><img className="logo-block__item" src={logo} alt="logo"/></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
