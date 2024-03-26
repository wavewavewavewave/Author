import React from 'react';
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import styles from './header.module.css'


const Header = () => {
    return (
        <div className={styles.container}>
            <Logo/>
            <Nav />
        </div>
    );
};

export default Header;