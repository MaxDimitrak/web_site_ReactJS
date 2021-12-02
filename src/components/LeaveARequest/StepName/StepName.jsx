import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form'
import s from './StepName.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import useData from '../../../DataContext.js'
import Email from '../../../images/leaveARequest/Email.png';
import Telegram from '../../../images/leaveARequest/Telegram.png';
import Whatsapp from '../../../images/leaveARequest/Whatsapp.png';
import Pattern from '../../../images/reviewsImage/Pattern.png';

const schema = yup.object().shape({
    name: yup
        .string()
        .matches(/^([^0-9]*)$/, 'В имени не должно быть цифр')
        .required('Поле обязательно для заполнения')
})

const StepName = () => {

    const { data, setValues } = useData()
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        defaultValues: { name: data.name },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        history.push('/StepMessanger');
        setValues(data)
    }



    return (
        <div className={s.StepName}>
            <div className={s.titleSpan}><span >Оставьте заявку, и мы с вами свяжемся</span></div>
            <div className={s.secondTitleSpan}><span className={s.secondTitleSpan}>* Как к вам обращаться?</span></div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={s.nameInput}
                    ref={register}
                    id={s.name}
                    type='text'
                    lable='name'
                    name='name'
                    required
                    placeholder='Ваше имя'
                    autoComplete='off'
                // error={!!errors.name}
                // helpertext={errors?.name?.message}
                >
                </input>
                <button className={s.buttonStepName} type='submit'>Далее</button>
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

export default StepName;