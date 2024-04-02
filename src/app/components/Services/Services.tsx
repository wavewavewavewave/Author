import React from 'react';
import styles from './services.module.css'
import light_boxes from '../../assets/Services/image1.svg'
import signs from '../../assets/Services/image2.svg'
import large_format_printing from '../../assets/Services/image3.svg'
import roof_installations from '../../assets/Services/image4.svg'
import interior_designs from '../../assets/Services/image5.svg'
import volumetric_letters from '../../assets/Services/image6.svg'
import advertising_signs from '../../assets/Services/image7.svg'
import signs2 from '../../assets/Services/image8.svg'
import life_figures from '../../assets/Services/image9.svg'
import advertising_stands from '../../assets/Services/image10.svg'
import exhibition_stands from '../../assets/Services/image11.svg'
import panel_bracket from '../../assets/Services/image12.svg'
import advertising_stands_and_pylons from '../../assets/Services/image13.svg'
import information_stands from '../../assets/Services/image14.svg'
import advertising_designs from '../../assets/Services/image15.svg'
import milling from '../../assets/Services/image16.svg'
import laser_cutting from '../../assets/Services/image17.svg'
import engraving from '../../assets/Services/image18.svg'
import threeD_modeling from '../../assets/Services/image19.svg'
import souvenir_products from '../../assets/Services/image20.svg'
import design_services from '../../assets/Services/image21.svg'
import Image from "next/image";

const Services = () => {
    const array = [
        {id: 0, value: light_boxes, alt: 'Световые короба', href: '/pages/services/signs'},
        {id: 1, value: signs, alt: 'Вывески', href: '/pages/services/signs'},
        {id: 2, value: large_format_printing, alt: 'Широкоформатная печать', href: '/pages/services/signs'},
        {id: 3, value: roof_installations, alt: 'Крышные установки', href: '/pages/services/signs'},
        {id: 4, value: interior_designs, alt: 'Интерьерное оформление', href: '/pages/services/signs'},
        {id: 5, value: volumetric_letters, alt: 'Обьемные буквы', href: '/pages/services/signs'},
        {id: 6, value: advertising_signs, alt: 'Рекламные штендеры', href: '/pages/services/signs'},
        {id: 7, value: signs2, alt: 'Таблички', href: '/pages/services/signs'},
        {id: 8, value: life_figures, alt: 'Ростовые фигуры', href: '/pages/services/signs'},
        {id: 9, value: advertising_stands, alt: 'Рекламные стойки', href: '/pages/services/signs'},
        {id: 10, value: exhibition_stands, alt: 'Выставочные стенды', href: '/pages/services/signs'},
        {id: 11, value: panel_bracket, alt: 'Панель кронштейн', href: '/pages/services/signs'},
        {id: 12, value: advertising_stands_and_pylons, alt: 'Рекламные стеллы', href: '/pages/services/signs'},
        {id: 13, value: information_stands, alt: 'Информационные стенды', href: '/pages/services/signs'},
        {id: 14, value: advertising_designs, alt: 'Рекламные конструкции', href: '/pages/services/signs'},
        {id: 15, value: milling, alt: 'Фрезеровка', href: '/pages/services/signs'},
        {id: 16, value: laser_cutting, alt: 'Дазерная резка', href: '/pages/services/signs'},
        {id: 17, value: engraving, alt: 'Гравировка', href: '/pages/services/signs'},
        {id: 18, value: threeD_modeling, alt: '3д моделированние', href: '/pages/services/signs'},
        {id: 19, value: souvenir_products, alt: 'Сувенирная продукция', href: '/pages/services/signs'},
        {id: 20, value: design_services, alt: 'Услуги дизайна', href: '/pages/services/signs'},
    ]


    return (
        <div className={styles.container}>
            <h2 className={styles.mainText}>НАШИ УСЛУГИ</h2>
            <div className={styles.gallery}>
                {array.map((item) => (
                    <div className={styles.item} key={item.id}>
                        <a href={item.href}>
                            <div className={styles.itemBox}>
                                <Image key={item.id} src={item.value} alt={item.alt}/>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;