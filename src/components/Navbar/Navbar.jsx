import React from 'react'
import iconPhone from '../images/icon/iconPhone.svg'
import iconMail from '../images/icon/Icon_@.svg'
import timeIcon from '../images/icon/timeIcon.svg'
import faceBook from '../images/icon/iconFaceBook.svg'
import twitter from '../images/icon/twitterIcon.svg'
import instagram from '../images/icon/instagramIcon.svg'
import linkedin from '../images/icon/linkedinIcon.svg'
import logo from '../images/icon/logoNavbar.svg'
import loopa from '../images/icon/loopa.svg'
import nav_icon from '../images/icon/nav_icon.svg'
import shopBag from '../images/icon/shopping-bag.svg'
import css from '../Navbar/Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (<>
        <div className={css.containerNavbar}>
            <img className={css.icon} src={iconPhone} alt='phone' />
            <p className={css.textNavbar}>+(123) 1234-567-8901</p>
            <img className={css.icon} src={iconMail} alt='mail' />
            <p className={css.textNavbar}>hello@hellix.com</p>
            <img className={css.icon} src={timeIcon} alt='time' />
            <p className={css.textNavbar} s>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</p>
            <div className={css.iconContainer}>
                <img className={css.iconSocial} src={faceBook} alt='faceBook' />
                <img className={css.iconSocial} src={twitter} alt='twitter' />
                <img className={css.iconSocial} src={instagram} alt='instagram' />
                <img className={css.iconSocial} src={linkedin} alt='linkedin' />
            </div>
        </div>
        <div className={css.containerLogo}>
            <img className={css.logo} src={logo} alt='logo' />
            <nav>
                <Link className={css.navMenu} to='/'>HOME</Link>
                <Link className={css.navMenu} to='/Pages'>PAGES</Link>
                <Link className={css.navMenu} to='/Servises'>SERVICES</Link>
                <Link className={css.navMenu} to='/portfolio'>PORTFOLIO</Link>
                <Link className={css.navMenu} to='/BlogPages'>BLOG</Link>
                <Link className={css.navMenu} to='/contacts'>CONTACTS</Link>
            </nav>

            <div className={css.navMenuIconContainer}>
                <Link to='ShopList'><img className={css.navMenuIcon} src={shopBag} alt='shopBag' /></Link>
                <img className={css.navMenuIcon} src={loopa} alt='loopa' />
                <img className={css.navMenuIconNav} src={nav_icon} alt='nav_icon' />
            </div>
        </div>
    </>
    )
}

export default Navbar
