import React from 'react';
import s from './VideoPortf.module.css';
import Slider from 'react-slick';
import back from '../../images/portfolio/back.png';
import { useHistory } from 'react-router-dom';

const VideoPortf = () => {
    const history = useHistory();

    const returnBack = () => {
        history.push('/portfolio');
    }
    let settings = {
        dots: true,
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1,
        arrows: false,
    };
    return (
        <div className={s.videoPortf}>
            <img onClick={returnBack} className={s.returnBack} src={back}></img>
            {/* <Slider {...settings} className={s.videoPortfSlider}> */}
                <div>
                    <iframe width='1125px' height='636px' id="videoFromYouTube1"
                        src="https://www.youtube.com/embed/JYlZ3ZlPoIQ?rel=0" frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                <iframe width='1125px' height='636px' id="videoFromYouTube1"
                    src="https://www.youtube.com/embed/cKsiFwrsFXw?rel=0" frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                </div>
                <div>
                <iframe width='1125px' height='636px' id="videoFromYouTube1"
                    src="https://youtube.com/embed/euFaKPFGZ7c?rel=0" frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                </div>
                <div>
                <iframe width='1125px' height='636px' id="videoFromYouTube1"
                    src="https://www.youtube-nocookie.com/embed/_hK3lqMyuUo?rel=0" frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                </div>
                <div>
                <iframe width='1125px' height='636px' id="videoFromYouTube1"
                    src="https://www.youtube.com/embed/pguZcIYYgDg?rel=0" frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                </div>
            {/* </Slider> */}
        </div>
    )
}

export default VideoPortf;