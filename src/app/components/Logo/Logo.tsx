import React from 'react';
import Image from "next/image";
import logo from '../../assets/logo.svg'

const Logo = () => {
    return (
        <div style={{
            marginTop: '26px',
            marginLeft: '50px'
        }}>
            <a>
                <Image src={logo} alt={'Logo'} />
            </a>
        </div>
    );
};

export default Logo;