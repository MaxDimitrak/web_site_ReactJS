import React from 'react';
import s from './AboutUs.module.css';
import Pattern from '../../images/reviewsImage/Pattern.png';
const AboutUs = ()=>{
    return(
<div className={s.aboutUs}>
<div className={s.patternUp}><img src={Pattern}></img></div>
<p className={s.textLine1}><span className={s.highlight}>СRAFTFRAME</span> - это авторский медиа-сервис, </p>
<p className={s.textLine2}>специализирующийся на</p>
<p className={s.textLine2}>профессиональной съёмке видео</p>
<p className={s.textLine2}>и создании фотографий в журнальном стиле.</p>
<p className={s.textLine3}>Здесь мог бы быть текст о том, почему нужно</p>
<p className={s.textLine2}>заказать съёмку именно у нас, но мы <span className={s.highlight}>не</span> пытаемся</p>
<p className={s.textLine4}>заманить Вас всеми возможными способами.</p>
<p className={s.textLine3}>Просто посмотрите наши работы,</p>
<p className={s.textLine2}>и если наше видение кадра совпадает с Вашим,</p>
<p className={s.textLine2}>значит CRAFTFRAME - <span className={s.highlight}>это то, что вы искали!</span></p>
<div className={s.patternDown}><img src={Pattern}></img></div>
</div>
    );
};

export default AboutUs;