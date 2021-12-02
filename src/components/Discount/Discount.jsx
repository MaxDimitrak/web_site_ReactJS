import React from 'react';
import s from './Discount.module.css';
import smile from '../../images/discount/smile.png';
import { useHistory } from 'react-router-dom';




const Discount = ()=>{

    const history = useHistory()

    const mailingActivate = ()=>{
        history.push('/discount/mailing-list')
    }
    return(
<div className={s.discount}>
    <div className={s.discount5}>
<span className={s.title5}>Как получить скидку 5%</span><br/><br/><br/>
<span className={s.spanItem}>Подпишитесь на наш Instagram</span><br/><br/><br/>
<a href='https://www.instagram.com/craftframe_studio/' className={s.craftframeHref}>@craftframe_studio</a><br/><br/><br/>
<span className={s.spanItem}>и получите скидку 5% на любой тариф </span>
    </div>
    <div className={s.discount10}>
    <span className={s.title10}>Как получить скидку 10% </span><br/><br/><br/>
<span className={s.spanItem}>Поставьте лайк, флажок</span><br/><br/><br/>
<span className={s.spanItem}>и оставьте комментарий под последними</span><br/><br/><br/>
<span className={s.spanItem}>3 публикациями в нашем Instagram</span><br/><br/><br/>
<a href='https://www.instagram.com/craftframe_studio/' className={s.craftframeHref}>@craftframe_studio</a>
    </div>
    <div className={s.footer}>
        <span className={s.spanItem}>* Подпишитесь на нашу </span><span onClick={mailingActivate} id={s.email}>e-mail рассылку,</span><br/><br/><br/>
        <span className={s.spanItem}>туда приходят секретные промокоды на</span><br/><br/><br/>
        <span className={s.spanItem}>большие скидки </span><img src={smile}></img>
    </div>
</div>
    );
};

export default Discount;