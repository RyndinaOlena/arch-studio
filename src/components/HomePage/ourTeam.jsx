import React, { useState } from 'react'
import css from '../HomePage/HomePage.module.css'

import faceBook from '../images/icon/iconFaceBook.svg'
import twitter from '../images/icon/twitterIcon.svg'
import instagram from '../images/icon/instagramIcon.svg'
import linkedin from '../images/icon/linkedinIcon.svg'
import teamData from './team'
const OurTeam = () => {
    const [startIndex, setStartIndex] = useState(0);
    const handleNextClick = () => {
        setStartIndex(prev => Math.min(prev + 4, teamData.length - 4))
    };

    const hendlePrevClick = () => {
        setStartIndex(prev => Math.max(prev - 4, 0))
    }

    const displayTeam = teamData.slice(startIndex, startIndex + 4)
    return (
        <div className={css.OurTeamBlock}>
            <div className={css.OurTeamContainer}>
                <div className={css.textTeam}> <span className={css.lineTeam}></span><h3 className={css.TeamText}>PROFESSIONALS</h3>
                    <h2 className={css.teamTitle}>Our Team</h2></div>
                <ul className={css.teamArroy}>
                    {displayTeam.map(member => (<li key={member.id} className={css.listTeam} >
                        <div className={css.iconSocialTeam} >
                            <img className={css.iconSocial} src={faceBook} alt='faceBook' />
                            <img className={css.iconSocial} src={twitter} alt='twitter' />
                            <img className={css.iconSocial} src={instagram} alt='instagram' />
                            <img className={css.iconSocial} src={linkedin} alt='linkedin' />
                        </div>
                        <h4 className={css.titleBlock}>{member.name} </h4><p className={css.textBlock}>{member.profession}</p></li>))}
                </ul>
                <div className={css.blockBtnComments}>
                    <button onClick={hendlePrevClick} className={css.btnTeam} disabled={startIndex === 0}>&#10094;</button>
                    <button onClick={handleNextClick} className={css.btnTeam} disabled={startIndex + 4 >= teamData.length}>&#10095;</button>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
