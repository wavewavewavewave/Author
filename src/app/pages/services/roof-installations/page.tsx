'use client'
import React from 'react';
import Header from "../../../components/Header/Header";
import styles from './roof.module.css'
import {roof_installations_arr} from "../../../constants/Constants";
import Image from "next/image";
import arrow from "../../../assets/Vector.svg";
import cat from "../../../assets/Cats_contact/cat1.svg";

const RoofInstallations = () => {
    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1>Крышные установки</h1>
                <div className={styles.boxes_block}>
                    {roof_installations_arr.map((box) => (
                        <div key={box.id} style={{position: 'relative'}}>
                            <div className={styles.box}>
                                <span className={styles.text}>{box.value}</span>
                                <Image src={arrow} alt={'Стрелка'} className={styles.image_style}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className={styles.no_background}>
                <Image src={cat} alt={'Кот контакт'} className={styles.image_cat}/>
            </button>
        </div>
    );
};

export default RoofInstallations;