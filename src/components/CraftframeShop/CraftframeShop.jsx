import React from 'react';
import s from './CraftframeShop.module.css';
import Slider from 'react-slick';
import img1 from '../../../src/images/craftframeShop/1.png'
import img2 from '../../../src/images/craftframeShop/2.png'
import img3 from '../../../src/images/craftframeShop/3.png'
import { useHistory, NavLink } from 'react-router-dom';
const CraftframeShop = () => {
    let settings = {
        dots: false,
        infinite: false,
        slideToShow: 1,
        slideToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '65px',
    }

    const history = useHistory();

    const expandWindow = () => {
        history.push('/craftframe-shop/box-composition')
    }
    return (
        <div className={s.craftframeShop}>
            <Slider {...settings} className={s.cfraftframeShopSlider}>
                <div className={s.cfraftframeShopSlide}><img src={img1}></img><p onClick={() => expandWindow()} className={s.whatIsInsideBtn}>Что внутри?</p><a href='https://wa.me/+79175850248?text=Здравствуйте! Хочу заказать подарочный набор "Теплота")'><button className={s.buttonOrder1}>ЗАКАЗАТЬ</button></a></div>
                <div className={s.cfraftframeShopSlide}><img src={img2}></img><a href='https://wa.me/+79175850248?text=Здравствуйте! Хочу заказать подарочный сертификат с приятным дополнением)'><button className={s.buttonOrder2}>ЗАКАЗАТЬ</button></a></div>
                <div className={s.cfraftframeShopSlide}><img src={img3}></img><a href='https://wa.me/+79175850248?text=Здравствуйте! Хочу заказать подарочный сертификат)'><button className={s.buttonOrder3}>ЗАКАЗАТЬ</button></a></div>
            </Slider>
        </div>
    );
    //125x666//1938
};

export default CraftframeShop;