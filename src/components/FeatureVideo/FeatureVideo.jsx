import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import s from './FeatureVideo.module.css';
import mini from '../../images/price/featureVideo/discountPrice/mini.png';
import middle from '../../images/price/featureVideo/discountPrice/medium.png';
import max from '../../images/price/featureVideo/discountPrice/maxi.png';
import arrow from '../../images/price/arrow.png';

let tarif = ['⠀МИНИ','МЕДИУМ','МАКСИ'];
const FeatureVideo =()=>{
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
                <span className={s.modelPhSpan}>Съёмка видео</span>
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

export default FeatureVideo;