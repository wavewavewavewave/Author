import React from 'react';
import Image from "next/image";
import logo from '../../assets/logo.svg'
import'./Logo.css'

const Logo = () => {
    return (
        <>
            <a className={'nav__logo'}>
                <Image src={logo} alt={'Logo'} />
            </a>
        </>
    );
};

export default Logo;