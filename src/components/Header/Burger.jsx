import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false); // Update the state to close the menu
    };

    return (
        <div className="burger-menu">
            <Menu className="burger-container" width={280} onClose={closeMenu}>
                <NavLink to="/home" className="burger-container__item" onClick={closeMenu}>
                    Home
                </NavLink>
                <NavLink to="/services" className="burger-container__item" onClick={closeMenu}>
                    Services
                </NavLink>
                <NavLink to="/about" className="burger-container__item" onClick={closeMenu}>
                    About
                </NavLink>
                <NavLink to="/contact" className="burger-container__item" onClick={closeMenu}>
                    Contact
                </NavLink>
            </Menu>
        </div>
    );
};

export default BurgerMenu;
