import React from 'react'
import css from '../home/HomePage.module.css'
import imgCompany1 from '../images/companyImg/image1.svg'
import imgCompany2 from '../images/companyImg/image2.svg'
import imgCompany3 from '../images/companyImg/image3.svg'
import imgCompany4 from '../images/companyImg/image4.svg'
import imgCompany5 from '../images/companyImg/image5.svg'
import imgCompany6 from '../images/companyImg/image6.svg'
const Company = () => {
    return (
        <>
            <div className={css.companyContainer}>
                <img className={css.companyImg} src={imgCompany1} alt='imgCompany1' />
                <img className={css.companyImg} src={imgCompany2} alt='imgCompany2' />
                <img className={css.companyImg} src={imgCompany3} alt='imgCompany3' />
                <img className={css.companyImg} src={imgCompany4} alt='imgCompany4' />
                <img className={css.companyImg} src={imgCompany5} alt='imgCompany5' />
                <img className={css.companyImg} src={imgCompany6} alt='imgCompany6' />
            </div>
        </>
    )
}

export default Company
