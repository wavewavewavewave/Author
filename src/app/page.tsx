import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import OverlayImage from "./components/OverlayImage/OverlayImage";
import Examples from "./components/Examples/Examples";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clients";

const Home = () => {
    return (
        <div>
            <OverlayImage>
                <Header/>
                <Main/>
            </OverlayImage>
            <Examples/>
            <Services/>
            <Clients/>
        </div>
    );
};

export default Home;