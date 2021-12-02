import React from 'react';
import { useHistory } from 'react-router-dom';
import s from './BoxComposition.module.css';
import arrow from '../../images/price/arrow.png';

const BoxComposition = () => {

    const history = useHistory()

    const hideWindow = () => {
        history.push('/craftframe-shop');
    }
    return (
        <div className={s.BoxComposition}>
            <div className={s.background}>
                <img src={arrow} className={s.arrow} onClick={hideWindow}></img>
                <p className={s.title}>Открытка</p>
                <p className={s.span1}>«Маяк непрочитанных книг»</p>
                <p className={s.span2}>Натуральный шоколад «bob»</p>
                <p className={s.span2}>Свеча с ароматом «Lemon Verde»</p>
                <p className={s.span1}>с деревянной крышкой</p>
                <p className={s.span2}>Яблочный чай с корицей</p>
                <p className={s.span2}>Нежный букетик лаванды</p>
                <p className={s.span2}>Подарочный сертификат</p>
                <p id={s.titleSpan} className={s.span3}>*Набор можно приобрести</p>
                <p className={s.span3}> как с подарочным сертификатом,</p>
                <p className={s.span3}>так и без него</p>
                <p id={s.bottomSpan} className={s.span3}>(скидка на набор действительна при покупке сертификата)</p>
            </div>
        </div>
    )
}

export default BoxComposition;