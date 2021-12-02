import React from 'react';
import s from './Reviews.module.css';
import Slider from 'react-slick';
import review1 from '../../images/reviewsImage/review1.png';
import review2 from '../../images/reviewsImage/review2.png';
import review3 from '../../images/reviewsImage/review3.png';
import review4 from '../../images/reviewsImage/review4.png';
import Pattern from '../../images/reviewsImage/Pattern.png';
const Reviews = ()=>{
    let settings = {
        dots:false,
        infinite:true,
        slideToShow:1,
        slideToScroll:1,
        arrows:false,
        centerMode:true,
        centerPadding:'82px'
    };
    return(
        <div>
           
<Slider {...settings} className={s.reviewSlider}>
<div className={s.reviewSlide}>
    <img src={review1}></img>
   <a href='https://instagram.com/emelina_vera?igshid=a4qf8kxx6cql'> <p className={s.review1}>@emelina_vera</p></a>
</div>
<div>
<img src={review2}></img>
<a href='https://instagram.com/ahavasay?igshid=r6qkvsoriwxq'> <p className={s.review2}>@ahavasay</p></a>
</div>
<div>
<img src={review3}></img>
<p className={s.review3}>@nehochututbit</p>
</div>
<div>
<img src={review4}></img>
<a href='https://instagram.com/vikicozy?igshid=f0avi2bq9wct'> <p className={s.review4}>@vikicozy</p></a>
</div>
</Slider>
<div><img className={s.patternReview} src={Pattern}></img></div>
</div>
    );
    
};

export default Reviews;