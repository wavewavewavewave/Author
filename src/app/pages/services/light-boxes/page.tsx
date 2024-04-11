'use client'
import React, {useRef, useState} from 'react';
import Header from "../../../components/Header/Header";
import styles from './lightBoxes.module.css'
import arrow from '../../../assets/Vector.svg'
import cat from '../../../assets/Pages/Light-boxes/специалист1 1.svg'
import Image from "next/image";
import {light_boxes_service_arr} from "../../../constants/PagesConstants/Light-boxes/constants";
import TaplinkButton from "../../../components/TaplinkButton/TaplinkButton";
import telegramIcon from '../../../assets/free-icon-telegram-2111646 2.svg'
import viberIcon from '../../../assets/image 23.svg'
import whatsupIcon from '../../../assets/image 24.svg'
import closeIcon from '../../../assets/связь с менеджером закрытие.svg'
import Button from "../../../components/Button/Button";

const LightBoxes = () => {
    const [isHovered, setIsHovered] = useState(null);
    const [click, setClick] = useState(false)
    const [isContactBlockVisible, setIsContactBlockVisible] = useState(false);

    const onClickHandler = () => {
        setClick(!click)
        setIsContactBlockVisible(!isContactBlockVisible);
    }

    const onCloseHandler = () => {
        setClick(false)
    }

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
                                <Image src={box.image} alt={'Изображение товара'}
                                       className={isHovered === null || isHovered !== box.id ? styles.imageBlock : styles.imageBlockEnter}/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.button}>
                    <Button>Заказать</Button>
                </div>
            </div>
            {click === false ? (
                    <button className={styles.no_background} onClick={onClickHandler}>
                        <TaplinkButton/>
                    </button>
            ) : (
                <div className={styles.contact_block}>
                    <button className={styles.iconViber}>
                        <Image src={viberIcon} alt={'Вайбер'} width={40} height={40}/>
                    </button>
                    <button className={styles.iconWhatsUp}>
                        <Image src={whatsupIcon} alt={'Вотсап'} width={40} height={40}/>
                    </button>
                    <button className={styles.iconTelegram}>
                        <Image src={telegramIcon} alt={'Телеграмм'} width={40} height={40}/>
                    </button>
                    <button className={styles.closeIcon} onClick={onCloseHandler}>
                        <Image src={closeIcon} alt={'Закрытие'} width={150} height={150}/>
                    </button>
                    <Image src={cat} alt={'Кот контакт'} className={styles.image_cat}/>
                </div>
            )}
        </div>
    );
};

export default LightBoxes;

/*
 ${isContactBlockVisible ? styles.visible : ''}`*/
