'use client'
import mahorka from "../assets/Clients/image 1.svg";
import svyaznoi from "../assets/Clients/image 2.svg";
import ziko from "../assets/Clients/image 3.svg";
import invitro from "../assets/Clients/image 4.svg";
import mts from "../assets/Clients/image 5.svg";
import milavitsa from "../assets/Clients/799px-Logo_Milavitsa-removebg-preview 1.svg";
import oz from "../assets/Clients/image 7.svg";
import gazprom from "../assets/Clients/image 6.svg";
import gefest from "../assets/Clients/image 8.svg";
import mirtek from "../assets/Clients/Group 1.svg";
import elena from "../assets/Clients/image 9.svg";
import htp from "../assets/Clients/image 10.svg";
import visa from "../assets/Payments/pngwing 1.svg";
import visaElectron from "../assets/Payments/visa-electron-logo-png-transparent 1.svg";
import masterCard from "../assets/Payments/pngwing 2.svg";
import maestro from "../assets/Payments/pngwing 3.svg";
import yandex from "../assets/Payments/pngwing 4.svg";
import alfa from "../assets/Payments/Alfabank_logo 1.svg";
import qiwi from "../assets/Payments/1280px-QIWI_logo 1.svg";
import sber from "../assets/Payments/Sberbank_Logo_2020 1.svg";
import light_boxes from "../assets/Services/image1.svg";
import signs from "../assets/Services/image2.svg";
import large_format_printing from "../assets/Services/image3.svg";
import roof_installations from "../assets/Services/image4.svg";
import interior_designs from "../assets/Services/image5.svg";
import volumetric_letters from "../assets/Services/image6.svg";
import advertising_signs from "../assets/Services/image7.svg";
import signs2 from "../assets/Services/image8.svg";
import life_figures from "../assets/Services/image9.svg";
import advertising_stands from "../assets/Services/image10.svg";
import exhibition_stands from "../assets/Services/image11.svg";
import panel_bracket from "../assets/Services/image12.svg";
import advertising_stands_and_pylons from "../assets/Services/image13.svg";
import information_stands from "../assets/Services/image14.svg";
import advertising_designs from "../assets/Services/image15.svg";
import milling from "../assets/Services/image16.svg";
import laser_cutting from "../assets/Services/image17.svg";
import engraving from "../assets/Services/image18.svg";
import threeD_modeling from "../assets/Services/image19.svg";
import souvenir_products from "../assets/Services/image20.svg";
import design_services from "../assets/Services/image21.svg";
import image1 from '../assets/Pages/Light-boxes/image 35 (1).jpg'
import image2 from '../assets/Pages/Light-boxes/image 36.jpg'
import image3 from '../assets/Pages/Light-boxes/тканевые короба 1.jpg'
import image4 from '../assets/Pages/Light-boxes/image 37.jpg'
import image5 from '../assets/Pages/Light-boxes/image 43.jpg'
import image6 from '../assets/Pages/Light-boxes/image 38.jpg'
import image7 from '../assets/Pages/Light-boxes/image 49.jpg'
import image8 from '../assets/Pages/Light-boxes/image 40.jpg'
import image9 from '../assets/Pages/Light-boxes/image 41.jpg'
import image10 from '../assets/Pages/Light-boxes/image 44.jpg'
import image11 from '../assets/Pages/Light-boxes/image 45.jpg'
import image12 from '../assets/Pages/Light-boxes/image 46.jpg'
import image13 from '../assets/Pages/Light-boxes/image 47.jpg'
import image14 from '../assets/Pages/Light-boxes/image 42.jpg'

export const examples_text = ['Готовы', 'Воплотить', 'Все', 'Ваши', 'Идеи', 'В жизнь']

export const clients_array = [
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
export const payments_icon = [
    {id: 0, value: visa, alt: 'Виза'},
    {id: 1, value: visaElectron, alt: 'Виза электрон'},
    {id: 2, value: masterCard, alt: 'Мастеркард'},
    {id: 3, value: maestro, alt: 'Маеэстро'},
    {id: 4, value: yandex, alt: 'Яндекс'},
    {id: 5, value: alfa, alt: 'Альфа'},
    {id: 6, value: qiwi, alt: 'Киви'},
    {id: 7, value: sber, alt: 'Сбер'}
]
export const nav_array = [
    {id: 0, value: 'О нас'},
    {id: 1, value: 'Портфолио'},
    {id: 2, value: 'Услуги'},
    {id: 3, value: 'Контакты'},
    {id: 4, value: 'Позвонить'},
]
export const services_array = [
    {id: 0, value: light_boxes, alt: 'Световые короба', href: '/pages/services/light-boxes'},
    {id: 1, value: signs, alt: 'Вывески', href: '/pages/services/signs'},
    {id: 2, value: large_format_printing, alt: 'Широкоформатная печать', href: '/pages/services/large-format-printing'},
    {id: 3, value: roof_installations, alt: 'Крышные установки', href: '/pages/services/roof-installations'},
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
export const light_boxes_service_arr = [
    {id: 0, value: 'Лайтбоксы', image: image1},
    {id: 1, value: 'Тонкие световые короба', image: image2},
    {id: 2, value: 'Короба с тканевым лицом', image: image3},
    {id: 3, value: 'Короба с инкрустрацией', image: image4},
    {id: 4, value: 'Двухсторонние короба', image: image5},
    {id: 5, value: 'Интерьерные короба', image: image6},
    {id: 6, value: 'Композитные короба', image: image7},
    {id: 7, value: 'Акриловые короба', image: image8},
    {id: 8, value: 'Короба из поликорбоната', image: image9},
    {id: 9, value: 'Фигурные короба', image: image10},
    {id: 10, value: 'Световой короб для кафе', image: image11},
    {id: 11, value: 'Световой короб для магазина', image: image12},
    {id: 12, value: 'Уличные рекламные короба', image: image13},
    {id: 13, value: 'Световой короб для салона красоты', image: image14},
]
export const signs_array = [
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
export const format_printing_arr = [
    {id: 0, value: 'Широкоформатная печать на ткани'},
    {id: 1, value: 'Широкоформатная печать на бумаге'},
    {id: 2, value: 'Широкоформатная печать на ПВХ'},
    {id: 3, value: 'Широкоформатная печать на холсте'},
    {id: 4, value: 'Широкоформатная УФ печать'},
    {id: 5, value: 'Широкоформатная печать баннеров'},
    {id: 6, value: 'Печать на прозрачной пленке'},
    {id: 7, value: 'Печать на пленке Oracal'},
    {id: 8, value: 'Печать на светоотражающей пленке'},
    {id: 9, value: 'Печать на транслюцентной пленке'},
    {id: 10, value: 'Печать на виниловой пленке'},
    {id: 11, value: 'Печать на самоклеющейся пленке'},
    {id: 12, value: 'Печать на строительной сетке'},
    {id: 13, value: 'Печать на баннерной сетке'},
    {id: 14, value: 'Двухсторонняя печать'},
    {id: 15, value: 'Печать щитов'},
    {id: 16, value: 'Печать афиш'},
    {id: 17, value: 'Печать фотообоев'},
    {id: 18, value: 'Печать растяжек'},
    {id: 19, value: 'Срочная печать баннеров'},
    {id: 20, value: 'Печать больших баннеров'},
    {id: 21, value: 'Печать баннера на День Рождение'},
    {id: 22, value: 'Интерьерная печать'},
    {id: 23, value: 'Печать плакатов'},
    {id: 24, value: 'Печать фото плакатов'},
    {id: 25, value: 'Печать самоклеющихся плакатов'},
    {id: 26, value: 'Печать плакатов на пластике'},
    {id: 27, value: 'УФ печать на акриле'},
    {id: 28, value: 'УФ печать на стекле'},
    {id: 29, value: 'УФ печать на металле'},
    {id: 30, value: 'УФ печать на композитах'},
    {id: 31, value: 'УФ печать на гофрокартоне'},
    {id: 32, value: 'УФ печать на дереве'},
    {id: 33, value: 'УФ печать на пенокартоне'},
    {id: 34, value: 'УФ печать на керамической плитке'},
    {id: 35, value: 'УФ печать на пластиковых носителях'},
    {id: 36, value: 'УФ печать на коже'},
    {id: 37, value: 'Срочная широкоформатная печать'},
]
export const roof_installations_arr = [
    {id: 0, value: 'Крышнеые установки'},
    {id: 1, value: 'Световые крышные установки'},
]