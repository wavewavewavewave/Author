import React from 'react';
import styles from './nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Услуги</li>
                <li>Контакты</li>
                <li className={styles.button}>Позвонить</li>
            </ul>
        </nav>
    );
};

export default Nav;