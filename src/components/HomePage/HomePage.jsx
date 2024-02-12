import React, { useState } from 'react'
import playIcon from '../../components/images/icon/play-button.svg'
import css from '../HomePage/HomePage.module.css'
import btnBack from '../images/icon/arrowBack.svg'
import btnNext from '../images/icon/arrowNext.svg'
import bgKitchOffice from '../images/heroBg/interior-design-828545_1920.jpg'
import bgKitchOffice2 from '../images/heroBg/meeting-room-828547_1920.jpg'
import bgKitchOffice3 from '../images/heroBg/computer-962971_1920.jpg'
import imgCompany1 from '../images/companyImg/image1.svg'
import imgCompany2 from '../images/companyImg/image2.svg'
import imgCompany3 from '../images/companyImg/image3.svg'
import imgCompany4 from '../images/companyImg/image4.svg'
import imgCompany5 from '../images/companyImg/image5.svg'
import imgCompany6 from '../images/companyImg/image6.svg'
import workProgres1 from '../images/workingProcessIm/Group1.svg'
import workProgres2 from '../images/workingProcessIm/workingProcessImg2.svg.svg'
import workProgres3 from '../images/workingProcessIm/workingProcessImg3.svg.svg'
import workProgres4 from '../images/workingProcessIm/workingProcessImg4.svg.svg'
import comments from '../HomePage/comments'
const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentComments, setCurrentComments] = useState(0);
    const totalComment = Math.ceil(comments.length / 3);

    // hero//

    const handleNext = () => {

        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    }
    const handleprev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    }
    // comments //

    const nextslide = () => {
        setCurrentComments(currentComments === totalComment - 1 ? 0 : currentComments + 1)
    };
    const prevSlide = () => {
        setCurrentComments(currentComments === 0 ? totalComment - 1 : currentComments - 1)
    };



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
        <div className={css.companyContainer}>
            <img className={css.companyImg} src={imgCompany1} alt='imgCompany1' />
            <img className={css.companyImg} src={imgCompany2} alt='imgCompany2' />
            <img className={css.companyImg} src={imgCompany3} alt='imgCompany3' />
            <img className={css.companyImg} src={imgCompany4} alt='imgCompany4' />
            <img className={css.companyImg} src={imgCompany5} alt='imgCompany5' />
            <img className={css.companyImg} src={imgCompany6} alt='imgCompany6' />
        </div>
        <div className={css.workProgres}>
            <div className={css.stepContainer} >
                <span className={css.lineWorkProgress}></span>
                <h2 className={css.stepsText}> STEPS</h2>
            </div>
            <h1 className={css.titleWorkProgress}>Working Process</h1>

            <div className={css.workProgressList}>
                <ul className={css.workProgresItem}>
                    <li className={css.liImgWorkProgress}><img src={workProgres1} alt='workProgres' className={css.workProgresImg} />
                    </li>
                    <h3 className={css.textWorkProgress}>Planning Stage</h3>
                    <p className={css.textWorkProgress}>Aenean commodo nec ligula eget cum sociis dolor.</p>
                </ul>
                <ul className={css.workProgresItem}>
                    <li className={css.liImgWorkProgress}>
                        <img src={workProgres2} alt='workProgres' className={css.workProgresImg} />
                    </li>
                    <h3 className={css.textWorkProgress}>Design Process</h3>
                    <p className={css.textWorkProgress}>Aenean commodo nec ligula eget cum sociis dolor.</p>
                </ul>
                <ul className={css.workProgresItem}>
                    <li className={css.liImgWorkProgress}>
                        <img src={workProgres3} alt='workProgres' className={css.workProgresImg} /></li>
                    <h3 className={css.textWorkProgress}>Execution Phase</h3>
                    <p className={css.textWorkProgress}>Aenean commodo nec ligula eget cum sociis dolor.</p>
                </ul>
                <ul className={css.workProgresItem}>
                    <li className={css.liImgWorkProgress}>
                        <img src={workProgres4} alt='workProgres' className={css.workProgresImg} />
                    </li>
                    <h3 className={css.textWorkProgress}>Completed Projects</h3>
                    <p className={css.textWorkProgress}>Aenean commodo nec ligula eget cum sociis dolor.</p>
                </ul>
            </div>
        </div>
        <div className={css.featuredWorksContainer}>
            <div className={css.featuredWorksWidthContainer}>
                <div>
                    <div><p className={css.featuredWorksText}><span className={css.linefeaturedWorks}></span>PROJECTS</p>
                    </div>
                    <h2 className={css.featuredWorksTitle}>Featured Works</h2>
                </div>
                <ul className={css.listFeaturedWorks}>
                    <li className={css.itemFeaturedWorks}>All</li>
                    <li className={css.itemFeaturedWorks}>3d Modeling</li>
                    <li className={css.itemFeaturedWorks}>Architecture</li>
                    <li className={css.itemFeaturedWorks}>Buildings</li>
                    <li className={css.itemFeaturedWorks}>Living Room</li>
                </ul>
            </div>
        </div>
        <div className={css.containerApartaments}>
            <img className={css.apartamentsImg} src={bgKitchOffice} alt='bgKitchOffice' />
            <img className={css.apartamentsImg} src={bgKitchOffice2} alt='bgKitchOffice2' />
            <img className={css.apartamentsImg} src={bgKitchOffice3} alt='bgKitchOffice3' />
            <img className={css.apartamentsImg} src={bgKitchOffice} alt='bgKitchOffice' />
            <img className={css.apartamentsImg} src={bgKitchOffice2} alt='bgKitchOffice2' />
            <img className={css.apartamentsImg} src={bgKitchOffice3} alt='bgKitchOffice3' />
        </div>
        <div className={css.carouselContainer}>
            <div className={css.textComments}> <span className={css.lineCommets}></span><h3 className={css.commentsText}>TESTIMONIALS</h3>
                <h2 className={css.commentsTitle}>Our Happy Clients</h2></div>

            <div className={css.commentsCarusel}><div className={css.commentsCaruselContent} style={{ transform: `translateX(-${currentComments * 100}%` }}>{[...Array(totalComment)].map((_, slideIndex) => (
                <div key={slideIndex} className={css.caruselSlide}>{comments.slice(slideIndex * 3, slideIndex * 3 + 3).map((comment, index) => (
                    <div key={index} className={css.carouselBlock}><img className={css.carouselImg} src={comment.img} alt={comment.name} /> <div className={css.carouselCaption}><h2>{comment.name}</h2><p>{comment.text}</p>
                    </div></div>
                ))}</div>
            ))}   </div>
                <button className={css.prev} onClick={prevSlide}>&#10094;</button>
                <button className={css.next} onClick={nextslide}>&#10095;</button>
            </div>
        </div>

        {/* 
        <div className={css.carouselDots}>{comments.map((_, index) => <span key={index} className={index === currentComments ? 'dot active' : 'dot'} style={{ backgroundColor: 'black', height: '10px', width: '10px', }} onClick={() => setCurrentComments(index)}></span>)}</div> */}

    </>
    )
}

export default HomePage
