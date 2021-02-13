import React from 'react';
import {slide as Menu} from 'react-burger-menu'
import {NavLink} from "react-router-dom";

class BurgerMenu extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="burger-menu">
                <Menu className="burger-container">
                    <NavLink to={"/home"} className="burger-container__item">Home</NavLink>
                    <NavLink to={"/services"} className="burger-container__item">Services</NavLink>
                    <NavLink to={"/about"} className="burger-container__item">About</NavLink>
                    <NavLink to={"/contact"} className="burger-container__item">Contact</NavLink>
                </Menu>
            </div>
        );
    }
}

export default BurgerMenu;
