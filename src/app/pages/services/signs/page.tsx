'use client'
import React from 'react';
import styles from './signs.module.css'
import arrow from '../../../assets/Vector.svg'
import Header from "../../../components/Header/Header";
import cat from '../../../assets/cat1.svg'
import Image from "next/image";
import test from '../../../assets/img_viber_2024-02-12_11-40-19-814.jpg'


const Signs = () => {
    const signs_array = [
        {id: 0, value: 'Неоновые вывески'},
        {id: 1, value: 'Светодиодные вывески'},
        {id: 2, value: 'Фасадные вывески'},
        {id: 3, value: 'Обьемные вывески'},
        {id: 4, value: 'Композитные вывески'},
        {id: 5, value: 'Деревянные вывески'},
        {id: 6, value: 'Разрешение на вывеску'},
        {id: 7, value: 'Вывески Режим работы'},
        {id: 8, value: 'Вывеска для кафе'},
        {id: 9, value: 'Вывеска для бара'},
        {id: 10, value: 'Вывеска для салона красоты'},
        {id: 11, value: 'Вывески для парикмахерской'},
        {id: 12, value: 'Вывески для барбершопа'},
        {id: 13, value: 'Вывески для фастфуда'},
        {id: 14, value: 'Вывески для аптеки'},
        {id: 15, value: 'Вывески для ателье'},
        {id: 16, value: 'Вывески для фитнес клуба'},
        {id: 17, value: 'Вывески для ломбарда'},
        {id: 18, value: 'Вывески для фитнес клуба'},
        {id: 19, value: 'Вывески для гостиницы'},
        {id: 20, value: 'Вывески для магазина'},
        {id: 21, value: 'Вывески для автомагазина'},
        {id: 22, value: 'Вывески для мебельноых магазинов'},
        {id: 23, value: 'Вывески для зоомагазина'},
        {id: 24, value: 'Вывески для магазина женской одежды'},
        {id: 25, value: 'Вывески для цветочных магазинов'},
        {id: 26, value: 'Вывески для шиномонтажа'},
        {id: 27, value: 'Вывески для автосервиса'},
        {id: 28, value: 'Аптечный крест'},
    ]
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