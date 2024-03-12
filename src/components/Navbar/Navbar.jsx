import React, { useState } from 'react'
import iconPhone from '../images/icon/iconPhone.svg'
import iconMail from '../images/icon/Icon_@.svg'
import timeIcon from '../images/icon/timeIcon.svg'
import faceBook from '../images/icon/iconFaceBook.svg'
import twitter from '../images/icon/twitterIcon.svg'
import instagram from '../images/icon/instagramIcon.svg'
import linkedin from '../images/icon/linkedinIcon.svg'
import logo from '../images/icon/logoNavbar.svg'
import css from '../Navbar/Navbar.module.css'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { SlMenu } from "react-icons/sl";
import { Link } from 'react-router-dom'
import ModalNavBar from './modal-nav-bar'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(true)
    };
    const closeModal = () => {
        setIsOpen(false)
    }
    return (<>
        <div className={css.containerNavbar}>
            <img className={css.icon} src={iconPhone} alt='phone' />
            <p className={css.textNavbar}>+(123) 1234-567-8901</p>
            <img className={css.icon} src={iconMail} alt='mail' />
            <p className={css.textNavbar}>hello@hellix.com</p>
            <img className={css.icon} src={timeIcon} alt='time' />
            <p className={css.textNavbar} >Mon - Sat 8:00 - 17:30, Sunday - CLOSED</p>
            <div className={css.iconContainer}>
                <img className={css.iconSocial} src={faceBook} alt='faceBook' />
                <img className={css.iconSocial} src={twitter} alt='twitter' />
                <img className={css.iconSocial} src={instagram} alt='instagram' />
                <img className={css.iconSocial} src={linkedin} alt='linkedin' />
            </div>
        </div>
        <div className={css.containerLogo}>
            <img className={css.logo} src={logo} alt='logo' />
            <nav className={css.listLink}>
                <Link className={css.navMenu} to='/' exact='true' >HOME</Link>
                <Link className={css.navMenu} to='/Pages'>PAGES</Link>
                <Link className={css.navMenu} to='/Servises'>SERVICES</Link>
                <Link className={css.navMenu} to='/portfolio'>PORTFOLIO</Link>
                <Link className={css.navMenu} to='/BlogPages'>BLOG</Link>
                <Link className={css.navMenu} to='/contacts'>CONTACTS</Link>
            </nav>

            <div className={css.navMenuIconContainer}>
                <Link to='/ShopList'><HiOutlineShoppingBag style={{ height: '16px' }} className={css.navMenuIcon} /></Link>
                <HiMiniMagnifyingGlass className={css.navMenuIcon} />
                <SlMenu className={css.navMenuIconNav} onClick={handleOpen} />
                {isOpen && <ModalNavBar closeModal={closeModal} />}
            </div>
        </div>
    </>
    )
}

export default Navbar
