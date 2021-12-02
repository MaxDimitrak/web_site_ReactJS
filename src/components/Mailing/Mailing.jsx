import React from 'react';
import smile from '../../images/mailing/smile.png';
import s from './Mailing.module.css';
import { useHistory } from 'react-router-dom';



const Mailing = ()=>{

    const history = useHistory();

    const returnToDiscount = ()=>{
        history.push('/discount')
    }
return(
    <div className={s.mailing}>
<img className={s.imgMailing} src={smile}></img>
<p>В данный момент рассылка не активна.</p>
<p>Пожалуйста, загляните сюда чуть позже.</p>

<p onClick={returnToDiscount} className={s.return}>Вернуться к скидкам</p>
    </div>
)
}

export default Mailing;