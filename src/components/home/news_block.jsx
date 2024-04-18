import React, { useState } from 'react'
import css from '../home/HomePage.module.css'
import bgKitchOffice from '../images/heroBg/interior-design-828545_1920.jpg'
import ModalManagement from './modal/ModalManagement'
const NewsBlock = () => {
    const [isModalOpen, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    return (
        <div className={css.containerBlockNews}>
            <div className={css.newsContainer}>
                <div className={css.newsBlog}><p className={css.textNews}><span className={css.lineNews}></span>BLOG</p>
                </div>
                <div className={css.titleNewsBlock}>
                    <h2 className={css.titleNews}>Latest News</h2>
                    <p className={css.textNewsAll}><span className={css.lineNews}></span>VIEW ALL</p>
                </div>
                <div className={css.blockChoosePlan}>
                    <div className={css.blockListNews}>
                        <img src={bgKitchOffice} alt='news' className={css.newsImg}></img>
                        <div className={css.newsLibe}><p className={css.textNewsLibe} >INTERIOR</p>
                        </div>
                        <div className={css.newsNamesContainer}>
                            <h5 className={css.titleNamesBlock}>APRIL 06, 2021</h5>
                            <p className={css.titleNamesBlockText}>Floyd Miles</p></div>
                        <ul className={css.newsList}>
                            <li className={css.newsListItem}>Nordic style, interior style for simple life </li>
                        </ul>
                        <div className={css.newsBlog}><p className={css.textNewsBtn} onClick={openModal}><span className={css.lineNewsBtn}></span>READ MORE</p>
                        </div>
                    </div>
                    <div className={css.blockListNews}>
                        <img src={bgKitchOffice} alt='news' className={css.newsImg}></img>
                        <div className={css.newsLibe}><p className={css.textNewsLibe} >INTERIOR</p>
                        </div>
                        <div className={css.newsNamesContainer}>
                            <h5 className={css.titleNamesBlock}>APRIL 06, 2021</h5>
                            <p className={css.titleNamesBlockText}>Floyd Miles</p></div>
                        <ul className={css.newsList}>
                            <li className={css.newsListItem}>Nordic style, interior style for simple life </li>
                        </ul>
                        <div className={css.newsBlog}><p className={css.textNewsBtn} onClick={openModal}><span className={css.lineNewsBtn}></span>READ MORE</p>
                        </div>
                    </div >
                    <div className={css.blockListNews}>
                        <img src={bgKitchOffice} alt='news' className={css.newsImg}></img>
                        <div className={css.newsLibe}><p className={css.textNewsLibe} >INTERIOR</p>
                        </div>
                        <div className={css.newsNamesContainer}>
                            <h5 className={css.titleNamesBlock}>APRIL 06, 2021</h5>
                            <p className={css.titleNamesBlockText}>Floyd Miles</p></div>
                        <ul className={css.newsList}>
                            <li className={css.newsListItem}>Nordic style, interior style for simple life </li>
                        </ul>
                        <div className={css.newsBlog}><p className={css.textNewsBtn}><span className={css.lineNewsBtn} onClick={openModal}></span>READ MORE</p>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (<ModalManagement closeModal={closeModal} />)}
        </div>
    )
}

export default NewsBlock
