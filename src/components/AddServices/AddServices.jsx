import React from 'react';
import s from './AddServices.module.css';
import arrow from '../../images/price/arrow.png';
import { NavLink } from 'react-router-dom';

const AddServices = () => {
    return (
        <div>
            <div>
                <NavLink to='/price'><img className={s.arrow} src={arrow}></img></NavLink>
                <span className={s.addServicesSpan}>Визуал-менеджер в Instagram</span>
            </div>
            <div className={s.servicesItems}>
                <span className={s.servicesItem}>Профессиональная ретушь</span><br/><br/><br/>
                <span className={s.servicesItem}>Авторская обработка фотографий</span><br/><br/><br/>
                <span className={s.servicesItem}>Монтаж видео и цветокоррекция</span><br/><br/><br/>
                <span className={s.servicesItem}>Съёмка бэкстейджей</span><br />
            </div>
            <div className={s.footer}>
                <span id={s.firstString}>* Стоимость данных услуг </span><br /><br />
                <span id={s.secondString}> рассчитывается индивидуально</span>
            </div>
        </div>
    );
};

export default AddServices;