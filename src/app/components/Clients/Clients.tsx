'use client'
import React from 'react';
import styles from './clients.module.css'
import mahorka from '../../assets/Clients/image 1.svg';
import svyaznoi from '../../assets/Clients/image 2.svg';
import ziko from '../../assets/Clients/image 3.svg';
import invitro from '../../assets/Clients/image 4.svg';
import mts from '../../assets/Clients/image 5.svg';
import milavitsa from '../../assets/Clients/799px-Logo_Milavitsa-removebg-preview 1.svg';
import oz from '../../assets/Clients/image 7.svg';
import gazprom from '../../assets/Clients/image 6.svg';
import gefest from '../../assets/Clients/image 8.svg';
import mirtek from '../../assets/Clients/Group 1.svg';
import elena from '../../assets/Clients/image 9.svg';
import htp from '../../assets/Clients/image 10.svg'
import Image from "next/image";

const Clients = () => {

    const arr = [
        {id: 0, value: mahorka, alt: 'Махорка'},
        {id: 1, value: svyaznoi, alt: 'Связной'},
        {id: 2, value: ziko, alt: 'Зико'},
        {id: 3, value: invitro, alt: 'Инвитро'},
        {id: 4, value: mts, alt: 'Мтс'},
        {id: 5, value: milavitsa, alt: 'Милавитса'},
        {id: 6, value: oz, alt: 'Оз'},
        {id: 7, value: gazprom, alt: 'Газпром'},
        {id: 8, value: gefest, alt: 'Гефест'},
        {id: 9, value: mirtek, alt: 'Миртек'},
        {id: 10, value: elena, alt: 'Елена'},
        {id: 11, value: htp, alt: 'Эйчтипи'},

    ]

    return (
        <div className={styles.container}>
            <h2 className={styles.mainText}>НАШИ КЛИЕНТЫ</h2>
            <div className={styles.gallery}>
                {arr.map((item) => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.itemBox}>
                            <Image key={item.id} src={item.value} alt={item.alt}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;




