import React from 'react'
import css from '../Portfolio/Portfolio.module.css'
import bg from '../images/heroBg/woven-cloth-352481_1280.jpg'
import computer from '../images/heroBg/computer-962971_1920.jpg'
import ditital from '../images/heroBg/digital-art-3193935_1280.jpg'
import log from '../images/heroBg/log-1807830_1280.jpg'
import livingRoom from '../images/heroBg/living-room-modern-tv-4813591_1280.jpg'
import interior from '../images/heroBg/interior-design-828545_1920.jpg'
const Portfolio = () => {
    return (
        <div className={css.overlay}>
            <div className={css.containerPortfolio} style={{ backgroundImage: `url(${bg})` }}>
                <div className={css.headerPortfolio}>
                    <p className={css.textHeroPorfolioFirst}>OUR WORKS</p>
                    <div className={css.blockTitleHeaderPortfolio}>
                        <h1 className={css.titlePorfolioBg}>Portfolio List</h1>
                        <h2 className={css.titleHeaderPorfolio}>Portfolio List</h2>
                        <p className={css.textHeroPortfolio}>Home / Portfolio List</p></div>
                </div>
            </div>

            <div className={css.imgBlockComputer}>
                <img className={css.imComputer} src={computer} alt='computer'></img>
                <div><p className={css.verticalText}>Architecture</p></div>
                <div className={css.textComputerBlock}><p className={css.textComputerFirst}>BURGS<br /> HOUSING</p><p><span className={css.lineComputerText}></span>VIEW MORE</p></div>
            </div>
            <div className={css.imgBlockDitital}>
                <div className={css.textDititalBlock}>
                    <p className={css.textComputerFirst}>LONDON
                        <br />FLAT</p>
                    <p>VIEW MORE<span className={css.lineComputerText}></span></p></div>
                <div><p className={css.verticalText}>Architecture</p></div>
                <img className={css.imDitital} src={ditital} alt='computer'></img>
            </div>
            <div className={css.imgBlockComputer}>
                <img className={css.imCLog} src={log} alt='computer'></img>
                <div><p className={css.verticalText}>Architecture</p></div>
                <div className={css.textComputerBlock}><p className={css.textComputerFirst}>HELSINKI
                    <br /> RESIDENCE</p><p><span className={css.lineComputerText}></span>VIEW MORE</p></div>
            </div>
            <div className={css.imgBlockDitital}>
                <div className={css.textDititalBlock}>
                    <p className={css.textComputerFirst}>PARIS
                        <br />STUDIO</p>
                    <p>VIEW MORE<span className={css.lineComputerText}></span></p></div>
                <div><p className={css.verticalText}>Architecture</p></div>
                <img className={css.imDitital} src={livingRoom} alt='computer'></img>
            </div>
            <div className={css.imgBlockComputer}>
                <img className={css.imCLog} src={log} alt='computer'></img>
                <div><p className={css.verticalText}>Architecture</p></div>
                <div className={css.textComputerBlock}><p className={css.textComputerFirst}>NEW
                    <br /> YORK</p><p><span className={css.lineComputerText}></span>VIEW MORE</p></div>
            </div>
            <div className={css.imgBlockDInerior}>
                <div className={css.textDititalBlock}>
                    <p className={css.textComputerFirst}>PARIS
                        <br />STUDIO</p>
                    <p>VIEW MORE<span className={css.lineComputerText}></span></p></div>
                <div><p className={css.verticalText}>Architecture</p></div>
                <img className={css.imInterior} src={interior} alt='computer'></img>
            </div>
        </div>
    )
}

export default Portfolio
