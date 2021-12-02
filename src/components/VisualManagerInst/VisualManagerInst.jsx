import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import s from './VisualManagerInst.module.css';
import mini from '../../images/price/visualManager/mini.png';
import middle from '../../images/price/visualManager/medium.png';
import max from '../../images/price/visualManager/max.png';
import arrow from '../../images/price/arrow.png';


let tarif = ['⠀МИНИ','МЕДИУМ','МАКСИ'];
const VisualManagerInst =()=>{
    let settings = {
        dots:true,
        infinite:false,
        slideToShow:1,
        slideToScroll:1,
        arrows:false,
        centerMode:true,
        centerPadding:'35px',
        dotsClass: s.dots,
        customPaging: i => (
            <div >
                <span>{tarif[i]}</span>
            </div>
          )
    };
    return(
        <div>
            <div>
                <NavLink to='/price'><img className={s.arrow} src={arrow}></img></NavLink>
                <span className={s.visualManSpan}>Визуал-менеджер в Instagram</span>
            </div>
<Slider {...settings} className={s.visualManagSlider}>
<div className={s.visualManagPhotoSlide}><img src={mini}></img></div>
<div className={s.visualManagPhotoSlide}><img src={middle}></img></div>
<div className={s.visualManagPhotoSlide}><img src={max}></img></div>
</Slider>
<div className={s.footer}>
<span id={s.firstString}>Не подошёл ни один тариф?</span><br/><br/>
<span>Оставьте заявку, и мы согласуем с Вами</span>
<p id={s.test}>индивидуальные условия</p>
</div>
        </div> 
    );
};

export default VisualManagerInst;