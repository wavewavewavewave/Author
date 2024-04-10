import React from 'react';
import './Taplink.css'
import Image from "next/image";

const TaplinkButton = () => {
    return (
        <>
            <label className="checkbox circlepit non-animated">
                <input className="alarmed" type="checkbox"/>
                <img className="mainimg" src="https://img.icons8.com/ios/40/ffffff/sms.png"/>
                {/*<div className="webs__list">
                    <a href="#">
                        <img src="https://img.icons8.com/color/40/000000/whatsapp--v1.png"/>
                    </a>
                    <a href="#">
                        <img src="https://img.icons8.com/color/40/000000/telegram-app--v1.png"/>
                    </a>
                    <a href="#">
                        <img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/>
                    </a>
                    <a href="#">
                        <img src="https://img.icons8.com/ios-filled/40/8B49C6/viber--v1.png"/>
                    </a>
                    <a href="#">
                        <img src="https://img.icons8.com/color/40/000000/vk-circled.png"/>
                    </a>
                </div>*/}
            </label>
        </>
    );
};

export default TaplinkButton;