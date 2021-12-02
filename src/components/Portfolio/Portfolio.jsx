import React from 'react';
import s from './Portfolio.module.css';
import Slider from 'react-slick';
import modelPhoto from '../../images/portfolio/modelPhoto.png';
import video from '../../images/portfolio/video.png';
import Pattern from '../../images/reviewsImage/Pattern.png';
import {useHistory} from 'react-router-dom';

const Portfolio = ()=>{

    const history = useHistory();

    const modelPhotoLink =()=>{
        history.push('/portfolio/photo')
    }
    const videoLink =()=>{
        history.push('/portfolio/video')
    }

    let settings = {
        dots:false,
        infinite:false,
        slideToShow:1,
        slideToScroll:1,
        arrows:false,
        centerMode:true,
        centerPadding:'67px'
    };

    return(
<div className={s.portfolio}>
<Slider {...settings} className={s.portfolioSlider}>
    
<div>
    <img src={modelPhoto} ></img>
 <p onClick={modelPhotoLink} className={s.portfolioLink}>смотреть работы</p>
</div>

<div>
    <img src={video} ></img>
<p onClick={videoLink} className={s.portfolioLink2}>смотреть работы</p>
</div>

</Slider>
<div className={s.patternPortfolio}><img src={Pattern}/></div>
</div>
    );
};

export default Portfolio;