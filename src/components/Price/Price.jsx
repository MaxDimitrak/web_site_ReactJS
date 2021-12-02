import React from 'react';
import s from './Price.module.css';
import { NavLink } from 'react-router-dom';
import Pattern from '../../images/reviewsImage/Pattern.png';
const Price = () => {
    return (
        <div className={s.price}>
            <p className={s.titleText}>Данный раздел обновляется</p>
            {/*<NavLink to='/price/model-photoset'><div className={s.modelPhoto}><span>Модельные фотосессии</span></div></NavLink>*/}
            {/*<NavLink to='/price/feature-video'><div className={s.featureVideo}><span>Съёмка видео</span></div></NavLink>*/}
            {/*<NavLink to='/price/visual-manager'><div className={s.visualManagerInst}><span>Визуал-менеджер в Instagram</span></div></NavLink>*/}
            {/*<NavLink to='/price/add-services'><div className={s.addServices}><span>Дополнительные услуги</span></div></NavLink>*/}
            <div><img className={s.pattern} src={Pattern}></img></div>
        </div>
    );
};

export default Price;