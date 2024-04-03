'use client'
import React from 'react';
import Header from "../../../components/Header/Header";
import './LightBoxes.css'
import {light_boxes_service_arr} from "../../../constants/Constants";
import arrow from '../../../assets/Vector.svg'
import cat from '../../../assets/cat1.svg'
import Image from "next/image";

const LightBoxes = () => {

    return (
        <div className={'container_page'}>
            <Header services={true}/>
            <div className={'container_boxes'}>
                <h1>Световые короба</h1>
                <div className={'boxes_block'}>
                    {light_boxes_service_arr.map((box) => (
                        <div key={box.id} style={{position: 'relative'}}>
                            <div className={'box'}>
                                <span>{box.value}</span>
                                <Image src={arrow} alt={'Стрелка'} className={'image_style'}/>
                            </div>
                        </div>
                    ))}
                    <Image src={cat} alt={'Кот контакт'} className={'image_cat'}/>
                </div>
            </div>
        </div>
    );
};

export default LightBoxes;