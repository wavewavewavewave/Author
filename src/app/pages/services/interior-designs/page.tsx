'use client'
import React, {useState} from 'react';
import styles from './interior.module.css'
import Header from "../../../components/Header/Header";
import Image from "next/image";
import arrow from "../../../assets/Vector.svg";
import cat from "../../../assets/Pages/Interior-designs/Group 11.svg";
import {interior_designs_arr} from "../../../constants/PagesConstants/Interior-designs/constants";

const InteriorDesigns = () => {
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
                <h1>Интерьерное оформление</h1>
                <div className={styles.boxes_block}>
                    {interior_designs_arr.map((box) => (
                        <div key={box.id} style={{position: 'relative'}}>
                            <div className={styles.box}
                                 onMouseEnter={() => onMouseEnterHandler(box.id)}
                                 onMouseLeave={() => onMouseLeaveHandler()}
                            >
                                <span className={styles.text}>{box.value}</span>
                                <Image src={arrow} alt={'Стрелка'} className={styles.image_style}/>
                                <Image src={box.image} alt={'Изображение товара'}
                                       className={isHovered === null || isHovered !== box.id ? styles.imageBlock : styles.imageBlockEnter}/>
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

export default InteriorDesigns;