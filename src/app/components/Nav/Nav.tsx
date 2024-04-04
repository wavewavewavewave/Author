import React from 'react';
import './Nav.css'
import {nav_array} from "../../constants/Constants";
import {IoClose} from "react-icons/io5";

const Nav = ({closeMenuOnMobile, toggleMenu, services}) => {
    return (

        <ul className="nav__list">
            {nav_array.map((item, index) => (
                <>
                    <li key={item.id} className={index === nav_array.length - 1 ? 'button' : ''}>
                        <a className={index === nav_array.length - 1 ? '' : 'nav__link'}
                           style={services === true ? {color: 'black'} : {color: 'white'}}
                           onClick={closeMenuOnMobile}
                        >
                            {item.value}
                        </a>
                    </li>
                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose/>
                    </div>
                </>
            ))}
        </ul>
    );
};

export default Nav;