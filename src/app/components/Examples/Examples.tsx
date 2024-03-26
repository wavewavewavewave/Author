'use client'
import React from 'react';
import styles from './examples.module.css'
import {SimpleSlider} from "../ Slider/Slider";
import arrow from '../../assets/butt.svg'
import Image from "next/image";

const Examples = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.textBlock}>
                    {["Готовы", "Воплотить", "Все", "Ваши", "Идеи", "В жизнь"].map((text, index) => (
                        <span key={index} className={styles.spanText} style={{ whiteSpace: 'nowrap' }}>{text}</span>
                    ))}
                </div>
            </div>
            <SimpleSlider/>
            <div className={styles.imageConnected}>
                <Image src={arrow} alt={'Стрелка'}/>
            </div>
        </div>
    );
};

export default Examples;


