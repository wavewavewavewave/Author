import React from 'react';
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";


const Header = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            minHeight: '128px',
            justifyContent: 'space-between',
        }}>
            <Logo/>
            <Nav />
        </div>
    );
};

export default Header;