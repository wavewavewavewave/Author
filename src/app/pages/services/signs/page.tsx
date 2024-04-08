'use client'
import React, {useState} from 'react';
import styles from './signs.module.css'
import arrow from '../../../assets/Vector.svg'
import Header from "../../../components/Header/Header";
import cat from '../../../assets/Pages/Signs/Group 8.svg'
import Image from "next/image";
import {signs_array} from "../../../constants/PagesConstants/Signs/constants";


const Signs = () => {
    const [isHovered, setIsHovered] = useState(null);

    const onMouseEnterHandler = (id) => {
        setIsHovered(id)
    }
    const onMouseLeaveHandler = () => {
        setIsHovered(null)
    }

    return (
        <div className={styles.container_page}>
            <Header services={true}/>
            <div className={styles.container_boxes}>
                <h1>Вывески</h1>
                <div className={styles.boxes_block}>
                    {signs_array.map((box) => (
                        <div key={box.id} style={{position: 'relative'}}>
                            <div className={styles.box}
                                 onMouseEnter={() => onMouseEnterHandler(box.id)}
                                 onMouseLeave={() => onMouseLeaveHandler()}>
                                <span className={styles.text}>{box.value}</span>
                                <Image src={arrow} alt={'Стрелка'} className={styles.image_style}/>
                                <Image src={box.image} alt={'Изображение товара'} className={isHovered === null || isHovered !== box.id ? styles.imageBlock : styles.imageBlockEnter}/>
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