'use client'
import React from 'react';
import Slider from "react-slick";
import img1 from '../../assets/IMG_1186.jpg'
import img2 from '../../assets/img_viber_2024-02-12_11-40-19-814.jpg'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from "../Arrows/Arrows";
import styles from './slider.module.css'

export const SimpleSlider = () => {
    let settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };


    return (
        <div className={styles.container}>
            <Slider {...settings}>
                <div>
                    <Image src={img1} alt={'Каритнка_1'} width={600} height={350}/>
                </div>
                <div>
                    <Image src={img2} alt={'Каритнка_2'} width={600} height={350}/>
                </div>
            </Slider>
        </div>
    );
}