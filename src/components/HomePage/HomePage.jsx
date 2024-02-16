import React, { useState } from 'react'
import playIcon from '../../components/images/icon/play-button.svg'
import css from '../HomePage/HomePage.module.css'
import btnBack from '../images/icon/arrowBack.svg'
import btnNext from '../images/icon/arrowNext.svg'
import bgKitchOffice from '../images/heroBg/interior-design-828545_1920.jpg'
import bgKitchOffice2 from '../images/heroBg/meeting-room-828547_1920.jpg'
import bgKitchOffice3 from '../images/heroBg/computer-962971_1920.jpg'


import FeaturedWorks from './FeaturedWorks'
import CommentsCurrent from './Comments'
import WorkingProgress from './WorkingProgress'
import Company from './Company'
const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // hero//

    const handleNext = () => {

        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    }
    const handleprev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    }
    const images = [bgKitchOffice, bgKitchOffice2, bgKitchOffice3]
    return (<>
        <div className={css.overlay}>
            <div className={css.hero} style={{ backgroundImage: `url(${images[currentSlide]})` }}>
                <div className={css.containerHome}>
                    <h1 className={css.heroTitle}>Create Apartment of the
                        <br />Dream Future</h1>
                    <div className={css.playIconContainer}>
                        <div className={css.bgIconPlay}>
                            <img className={css.playIcon} src={playIcon} alt='play' />
                        </div>
                        <p className={css.heroText}>SHOWCASE</p>
                    </div>
                </div>
                <div className={css.btnGroup}>
                    <button className={css.btnBack} onClick={handleNext}><img src={btnBack} alt='btnBack' /></button>
                    <button className={css.btnNext} onClick={handleprev}> <img src={btnNext} alt='btnNext' /></button>
                </div>
            </div>
        </div>
        <Company />
        <WorkingProgress />
        <FeaturedWorks />
        <CommentsCurrent />


        {/* 
        <div className={css.carouselDots}>{comments.map((_, index) => <span key={index} className={index === currentComments ? 'dot active' : 'dot'} style={{ backgroundColor: 'black', height: '10px', width: '10px', }} onClick={() => setCurrentComments(index)}></span>)}</div> */}


        <div className={css.ourTeamContainer}></div>
    </>
    )
}

export default HomePage
