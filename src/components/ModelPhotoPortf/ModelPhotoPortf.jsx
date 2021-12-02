import React from 'react';
import s from './ModelPhotoPortf.module.css';
import Slider from 'react-slick';
import back from '../../images/portfolio/back.png';
import { useHistory } from 'react-router-dom';
import photoItem1 from '../../images/portfolio/modelPhotos/photo1.webp';
import photoItem2 from '../../images/portfolio/modelPhotos/photo2.webp';
import photoItem3 from '../../images/portfolio/modelPhotos/photo3.webp';
import photoItem4 from '../../images/portfolio/modelPhotos/photo4.webp';
import photoItem5 from '../../images/portfolio/modelPhotos/photo5.webp';
import photoItem7 from '../../images/portfolio/modelPhotos/photo8.webp';
import photoItem8 from '../../images/portfolio/modelPhotos/photo9.webp';
import photoItem9 from '../../images/portfolio/modelPhotos/photo10.webp';
import photoItem10 from '../../images/portfolio/modelPhotos/photo11.webp';
import photoItem11 from '../../images/portfolio/modelPhotos/photo12.webp';
import photoItem12 from '../../images/portfolio/modelPhotos/photo15.webp';
import photoItem13 from '../../images/portfolio/modelPhotos/photo16.webp';
import photoItem14 from '../../images/portfolio/modelPhotos/photo17.webp';
import photoItem15 from '../../images/portfolio/modelPhotos/photo18.webp';
import photoItem16 from '../../images/portfolio/modelPhotos/photo19.webp';
import photoItem17 from '../../images/portfolio/modelPhotos/photo20.webp';
import photoItem18 from '../../images/portfolio/modelPhotos/photo21.webp';
import photoItem19 from '../../images/portfolio/modelPhotos/photo22.webp';
import photoItem20 from '../../images/portfolio/modelPhotos/photo23.webp';
import photoItem21 from '../../images/portfolio/modelPhotos/photo24.webp';
import photoItem22 from '../../images/portfolio/modelPhotos/photo25.webp';
import photoItem23 from '../../images/portfolio/modelPhotos/photo26.webp';
import photoItem24 from '../../images/portfolio/modelPhotos/photo27.webp';
import photoItem25 from '../../images/portfolio/modelPhotos/photo28.webp';
import photoItem26 from '../../images/portfolio/modelPhotos/photo29.webp';
import photoItem27 from '../../images/portfolio/modelPhotos/photo30.webp';
import photoItem28 from '../../images/portfolio/modelPhotos/photo31.webp';
import photoItem29 from '../../images/portfolio/modelPhotos/photo32.webp';
import photoItem30 from '../../images/portfolio/modelPhotos/photo33.webp';


const ModelPhotoPortf =()=>{

    const history = useHistory();

    const returnBack = ()=>{
        history.push('/portfolio');
    }

    let settings = {
        dots:false,
        infinite:true,
        slideToShow:1,
        slideToScroll:1,
        arrows:false,
    };

return(
    <div className={s.modelPhotoPortf}>
<img onClick={returnBack} className={s.returnBack} src={back}></img>

<Slider {...settings} className={s.modelPhotoSlider}>
<div className={s.modelPhotoSlide}><img src={photoItem25}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem23}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem22}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem21}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem20}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem28}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem27}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem26}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem29}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem19}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem18}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem17}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem16}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem15}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem14}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem13}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem12}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem11}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem10}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem9}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem8}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem30}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem7}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem5}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem4}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem3}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem2}/></div>
<div className={s.modelPhotoSlide}><img src={photoItem1}/></div>
</Slider>
    </div>
)
}

export default ModelPhotoPortf;