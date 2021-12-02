import React from 'react';
import s from './General.module.css';
import CRAFTFRAME from '../../images/generalImage/CRAFTFRAME.png';
import iconOne from '../../images/generalImage/IconOne.png';
import iconTwo from '../../images/generalImage/IconTwo.png';
import iconThree from '../../images/generalImage/IconThree.png';
import iconFour from '../../images/generalImage/IconFour.png';
import Collect_Alpha from '../../images/generalImage/Main.gif';



const General = () => {
    return (
        <div className={s.general}>
            <div><img className={s.generalLogo} src={CRAFTFRAME}></img></div>
            <img className={s.mainImg} src={Collect_Alpha}></img>
            <div className={s.bottomMenu}>
                <a href="tel:+79175850248"><img className={s.iconOne} src={iconOne}></img></a>
                <a href='mailto:craftframe.studio@gmail.com'> <img className={s.iconTwo} src={iconTwo}></img></a>
                <a href="https://yandex.ru/maps/213/moscow/?ll=37.593452%2C55.741520&z=10.5"><img className={s.iconThree} src={iconThree}></img></a>
                <a target='blank' href='https://www.instagram.com/craftframe_studio/'> <img className={s.iconFour} src={iconFour}></img></a>
            </div>
        </div>
    );
};

export default General;