'use client'
import React from 'react';
import Header from "../../../components/Header/Header";
import styles from './lightBoxes.module.css'
import {light_boxes_service_arr} from "../../../constants/Constants";
import arrow from '../../../assets/Vector.svg'
import cat from '../../../assets/cat1.svg'
import Image from "next/image";

const LightBoxes = () => {
    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1>Световые короба</h1>
                <div className={styles.boxes_block}>
                    {light_boxes_service_arr.map((box) => (
                        <div key={box.id} style={{position: 'relative'}}>
                            <div className={styles.box}>
                                <span className={styles.text}>{box.value}</span>
                                <Image src={arrow} alt={'Стрелка'} className={styles.image_style}/>
                            </div>
                        </div>
                    ))}
                    <Image src={cat} alt={'Кот контакт'} className={styles.image_cat}/>
                </div>
            </div>
        </div>
    );
};

export default LightBoxes;