'use client'
import React, {useState} from 'react';
import Header from "../../../components/Header/Header";
import styles from './lightBoxes.module.css'
import arrow from '../../../assets/Vector.svg'
import cat from '../../../assets/Cats_contact/cat1.svg'
import Image from "next/image";
import {light_boxes_service_arr} from "../../../constants/PagesConstants/Light-boxes/constants";

const LightBoxes = () => {
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
                <h1>Световые короба</h1>
                <div className={styles.boxes_block}>
                    {light_boxes_service_arr.map((box) => (
                        <div key={box.id} style={{position: 'relative'}}>
                            <div
                                className={styles.box}
                                onMouseEnter={() => onMouseEnterHandler(box.id)}
                                onMouseLeave={() => onMouseLeaveHandler()}
                            >
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

export default LightBoxes;