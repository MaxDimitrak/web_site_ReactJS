import React from 'react';
import s from './ModelPhoto.module.css';
import Slider from 'react-slick';
import mini from '../../images/price/modelPhotoSess/fullPrice/mini.png';
import middle from '../../images/price/modelPhotoSess/discountPrice/middle.png';
import max from '../../images/price/modelPhotoSess/discountPrice/max.png';
import arrow from '../../images/price/arrow.png'
import { NavLink } from 'react-router-dom';
let tarif = ['⠀МИНИ','МЕДИУМ','МАКСИ'];
const ModelPhoto =()=>{
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
                <span className={s.modelPhSpan}>Модельные Фотосессии</span>
            </div>
<Slider {...settings} className={s.modelPhotoSlider}>
<div className={s.ModelPhotoSlide}><img src={mini}></img></div>
<div className={s.ModelPhotoSlide}><img src={middle}></img></div>
<div className={s.ModelPhotoSlide}><img src={max}></img></div>
</Slider>
<div className={s.footer}>
<span id={s.firstString}>Не подошёл ни один тариф?</span><br/><br/>
<span>Оставьте заявку, и мы согласуем с Вами</span>
<p id={s.test}>индивидуальные условия</p>
</div>
        </div> 
    );
};

export default ModelPhoto;
