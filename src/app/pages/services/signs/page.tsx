'use client'
import React from 'react';
import styles from './signs.module.css'
import arrow from '../../../assets/Vector.svg'
import Header from "../../../components/Header/Header";
import cat from '../../../assets/Cats_contact/cat1.svg'
import Image from "next/image";
import {signs_array} from "../../../constants/Constants";


const Signs = () => {
console.log(window.innerWidth, '?????')
console.log(window.innerHeight, '?????')
    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1>Вывески</h1>
                <div className={styles.boxes_block}>
                    {signs_array.map((box) => (
                        <div key={box.id} style={{position: 'relative'}}>
                            <div className={styles.box}>
                                <span className={styles.text}>{box.value}</span>
                                <Image src={arrow} alt={'Стрелка'} className={styles.image_style}/>
                            </div>
                        </div>
                    ))}
                    <button className={styles.no_background}>
                        <Image src={cat} alt={'Кот контакт'} className={styles.image_cat}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signs;