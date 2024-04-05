'use client'
import React from 'react';
import styles from './formatPrinting.module.css'
import cat from '../../../assets/Cats_contact/cat3.svg'
import Header from "../../../components/Header/Header";
import {format_printing_arr} from "../../../constants/Constants";
import Image from "next/image";
import arrow from "../../../assets/Vector.svg";

const FormatPrinting = () => {
    return (
        <>
            <div className={styles.container_page}>
                <Header services={true}/>
                <div className={styles.container_boxes}>
                    <h1>Широкоформатная печать</h1>
                    <div className={styles.boxes_block}>
                        {format_printing_arr.map((box) => (
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

        </>
    );
};

export default FormatPrinting;