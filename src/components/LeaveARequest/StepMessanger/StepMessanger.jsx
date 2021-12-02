import React, { useState, useCallback } from 'react';
import s from './StepMessanger.module.css';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import useData from '../../../DataContext.js';
import Email from '../../../images/leaveARequest/Email.png';
import Telegram from '../../../images/leaveARequest/Telegram.png';
import Whatsapp from '../../../images/leaveARequest/Whatsapp.png';
import Pattern from '../../../images/reviewsImage/Pattern.png';


const schema = yup.object().shape({
    messanger: yup
    .string()
        .required('Поле обязательно для заполнения')
})

const StepMessanger = () => {

    const {data,setValues} = useData()

    const history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = (value) => {
        history.push('/stepTel')
        setValues(data)
        console.log(value)
    }


    return (
        <div className={s.stepMessanger}>
            <div className={s.titleSpan}> <span >Оставьте заявку, и мы с вами свяжемся</span></div>
            <div className={s.secondTitleSpan}><span className={s.secondTitleSpan}>* Как с вами связаться?</span></div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <select className={s.selectMessanger}
                ref={register}
                name='messanger'
                lable='Messanger'
                type='text'
                required
                >
                    <option disabled>мессенджер для связи</option>
                    <option value='Telegram'>Telegram</option>
                    <option value='WhatsApp'>What's App</option>
                </select>
                <button className={s.buttonStepMessanger} type='submit'>Далее</button>
            </form>

            <div className={s.footerSpan}>Вы также можете написать нам</div>
            <div className={s.secondFooterSpan}>самостоятельно:</div>
            <div className={s.footerImg}>
                <a href='https://telegram.me/anna_dimitrak'><img src={Telegram}></img></a>
                <a href='mailto:craftframe@yandex.ru'><img src={Email}></img></a>
                <a href='https://wa.me/+79175850248'><img src={Whatsapp}></img></a>
            </div>
            <div className={s.footerPattern}><img src={Pattern} /></div>
        </div>
    );
};
export default StepMessanger;