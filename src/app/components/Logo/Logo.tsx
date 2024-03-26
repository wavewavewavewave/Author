import React from 'react';
import Image from "next/image";
import logo from '../../assets/logo.svg'
import styles from './logo.module.css'

const Logo = () => {
    return (
        <div className={styles.block}>
            <a>
                <Image src={logo} alt={'Logo'} />
            </a>
        </div>
    );
};

export default Logo;