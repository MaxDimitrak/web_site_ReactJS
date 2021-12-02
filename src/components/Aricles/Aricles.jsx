import React from 'react';
import s from './Aricles.module.css';
import man from '../../images/Man.gif'
const Aricles = ()=>{
    return(
<div className={s.arcticles}>
   <div className={s.titleArticles}> <span >Статьи CRAFTFRAME</span></div>
   <div className={s.spanArticles1}> <span >Загляните сюда чуть позже</span></div>
   <div className={s.spanArticles2}> <span >* в данный момент информация</span></div>
   <div className={s.spanArticles3}> <span >находится в разработке</span></div>
<img className={s.manImg} src={man}></img>
</div>
    );
};

export default Aricles;