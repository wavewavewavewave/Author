import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import OverlayImage from "./components/OverlayImage/OverlayImage";
import Examples from "./components/Examples/Examples";

const Home = () => {
    return (
        <div>
            <OverlayImage>
                <Header/>
                <Main/>
            </OverlayImage>
            <Examples />
        </div>
    );
};

export default Home;