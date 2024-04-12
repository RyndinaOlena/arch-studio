import React, { useEffect, useState } from 'react'
import playIcon from '../../components/images/icon/play-button.svg'
import css from '../HomePage/HomePage.module.css'
import btnBack from '../images/icon/arrowBack.svg'
import btnNext from '../images/icon/arrowNext.svg'
import bgKitchOffice from '../images/heroBg/interior-design-828545_1920.jpg'
import bgKitchOffice2 from '../images/heroBg/meeting-room-828547_1920.jpg'
import bgKitchOffice3 from '../images/heroBg/computer-962971_1920.jpg'


import FeaturedWorks from './featuredWorks'
import CommentsCurrent from './comments'
import WorkingProgress from './workingProgress'
import Company from './company'
import OurTeam from './ourTeam'
import ProjectManagment from './projectManagment'
import ChoosePlan from './choose_plan'
import NewsBlock from './news_block'

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentTime, setCurrenTime] = useState(0);
    // const [isOpen, setIsOpen] = useState(false);
    // hero//

    const handleNext = () => {

        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    }
    const handleprev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    }
    const images = [bgKitchOffice, bgKitchOffice2, bgKitchOffice3]
    // video//
    // const openModal = () => {
    //     setIsOpen(true);
    // };
    // const closeModal = () => {
    //     setIsOpen(false);
    // };
    useEffect(() => {
        localStorage.setItem('video', currentTime);
    }, [currentTime]);

    useEffect(() => {
        const savedTime = localStorage.getItem('video');
        if (savedTime) {
            setCurrenTime(parseFloat(savedTime))
        }
    }, []);
    // const handleVideoUpdate = (e) => {
    //     setCurrenTime(e.target.currentTime)
    // };
    // const handleVideoEnd = () => {
    //     setCurrenTime(0)
    // };

    return (<>
        <div className={css.overlay}>
            <div className={css.hero} style={{ backgroundImage: `url(${images[currentSlide]})` }}>
                <div className={css.containerHome}>
                    <h1 className={css.heroTitle}>Create Apartment of the
                        <br />Dream Future</h1>
                    <div className={css.playIconContainer}>
                        <div className={css.bgIconPlay} >
                            <img className={css.playIcon} src={playIcon} alt='play' />
                        </div>
                        <p className={css.heroText}>SHOWCASE</p>
                    </div>
                </div>
                <div className={css.btnGroup}>
                    <button className={css.btnBack} onClick={handleNext}><img src={btnBack} alt='btnBack' /></button>
                    <button className={css.btnNext} onClick={handleprev}><img src={btnNext} alt='btnNext' /></button>
                </div>
            </div>
        </div>
        {/* {isOpen && (<div className={css.modalOverlayVideo} >
            <div className={css.modalVideo}>
                <button className={css.closeBtnVideo} onClick={closeModal}>X</button>
                <iframe title='vimeo-player' id="vimeo-player" src='https://player.vimeo.com/video/236203659' allow="autoplay; encrypted-media" frameborder="0"
                    allowfullscreen controls autoPlay width="640"
                    height="360" onTimeUpdate={handleVideoUpdate}
                    onEnded={handleVideoEnd} ></iframe>
            </div>
        </div >)} */}
        <Company />
        <WorkingProgress />
        <FeaturedWorks />
        <CommentsCurrent />
        <OurTeam />
        <ProjectManagment />
        <ChoosePlan />
        <NewsBlock />

    </>
    )
}

export default HomePage
