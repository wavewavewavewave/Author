import React from 'react';
import styles from "./contact.module.css";
import Image from "next/image";
import viberIcon from "../../assets/image 23.svg";
import whatsupIcon from "../../assets/image 24.svg";
import telegramIcon from "../../assets/free-icon-telegram-2111646 2.svg";
import closeIcon from "../../assets/связь с менеджером закрытие.svg";

const Contact = ({src, onCloseHandler, style}) => {
    return (
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
            <Image src={src} alt={'Кот контакт'} className={styles.image_cat} style={{marginTop: style}} width={750} height={290}/>
        </div>
    );
};

export default Contact;