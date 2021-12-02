import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import s from './StepTel.module.css';
import useData from '../../../DataContext.js';
import { NavLink, useHistory } from 'react-router-dom';
import Email from '../../../images/leaveARequest/Email.png';
import Telegram from '../../../images/leaveARequest/Telegram.png';
import Whatsapp from '../../../images/leaveARequest/Whatsapp.png';
import Pattern from '../../../images/reviewsImage/Pattern.png';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const schema = yup.object().shape({
    telNumber: yup
        .string()
        .required('Поле обязательно для заполнения')
})

const normolizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if (!phoneNumber) {
        return value
    }
    return (
        phoneNumber.formatInternational()
    )
}

const StepTel = () => {
    const { data, setValues } = useData()

    const history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        defaultValues: { telNumber: data.telNumber },
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        history.push('/stepEmail')
        setValues(data)
    }
    return (
        <div className={s.stepTel}>
            <div className={s.titleSpan}> <span >Оставьте заявку, и мы с вами свяжемся</span></div>
            <div className={s.secondTitleSpan}><span className={s.secondTitleSpan}>Укажите свой номер телефона</span></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={s.telInput}
                    ref={register}
                    name='telNumber'
                    id={s.telNumber}
                    lable='tel Number'
                    type='tel'
                    autoComplete='off'
                    placeholder='+7 *** *** ** **'
                    required
                    onChange={(event) => {
                        event.target.value = normolizePhoneNumber(event.target.value)
                    }}
                >
                </input>
                <button type='submit' className={s.buttonStepTel}>Далее</button>
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
export default StepTel;