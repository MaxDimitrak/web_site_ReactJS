import { React, useCallback, useState, useEffect } from 'react';
import s from './StepEmail.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import useData from '../../../DataContext.js';
import Email from '../../../images/leaveARequest/Email.png';
import Telegram from '../../../images/leaveARequest/Telegram.png';
import Whatsapp from '../../../images/leaveARequest/Whatsapp.png';
import Pattern from '../../../images/reviewsImage/Pattern.png';
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';


const schema = yup.object().shape({
    email: yup
        .string()
        .email('Email должен быть корректного формата')
        .required('Поле обязательно для заполнения')
})

const useStyles = makeStyles((theme) => ({
    alert: {
        width:'1000px',
        fontSize:100,
        textAlign: 'center',
        backgroundColor:'red',
    },
}));

const StepEmail = () => {

    const classes = useStyles();

    const [open, setOpen] = useState();

    const handleClick = () => {
        setOpen(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function sendEmail(e) {
        // handleClick()
        e.preventDefault();
        emailjs.sendForm('MailCraft', 'template_2j66wqq', e.target, 'user_mfMT2tqhpUa5wrTjt0ztj')
            .then((result) => {
                alert('Ваша заявка отправлена')
            }, (error) => {
                alert('неизвестаня ошибка...попробуйте нам позвонить)')
            });
    }

    const { data } = useData()

    const { register, handleSubmit, errors } = useForm({
        defaultValues: { email: data.email },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    return (
        <div className={s.stemEmail}>
            <Snackbar  className={classes.alert}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Ваша заявка обрабатывается" />
            <div onClick={()=>handleClick()} className={s.titleSpan}> <span >Оставьте заявку, и мы с вами свяжемся</span></div>
            <div className={s.secondTitleSpan}><span className={s.secondTitleSpan}>*Последний шаг. Укажите вашу почту :)</span></div>
            <form onSubmit={handleSubmit, sendEmail}>
                <input
                    ref={register}
                    className={s.inputEmail}
                    name='email'
                    lable='Email'
                    type='email'
                    required
                    autoComplete='off'
                >
                </input>
                <input className={s.displayNone} name='name' defaultValue={data.name}></input>
                <input className={s.displayNone} name='telNumber' defaultValue={data.telNumber}></input>
                <select className={s.displayNone} name='messanger' defaultValue={data.messanger}></select>
                <button  className={s.fieldButton} type='submit'>Оставить заявку</button>
            </form>

            <div className={s.footerSpan}>Вы также можете написать нам</div>
            <div className={s.secondFooterSpan}>самостоятельно:</div>
            <div className={s.footerImg}>
                <a href='https://telegram.me/anna_dimitrak'><img src={Telegram}></img></a>
                <a href='mailto:craftframe.studio@gmail.com'><img src={Email}></img></a>
                <a href='https://wa.me/+79175850248'><img src={Whatsapp}></img></a>
            </div>
            <div className={s.footerPattern}><img src={Pattern} /></div>
        </div>
    );
};
export default StepEmail;