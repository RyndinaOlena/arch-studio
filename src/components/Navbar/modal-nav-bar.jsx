import React from 'react'
import { Link } from 'react-router-dom'
import css from '../Navbar/Navbar.module.css'
import logo from '../images/icon/logoNavbar.svg'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const ModalNavBar = (props) => {
    const { closeModal } = props;
    return (
        <div className={css.overlay}>
            <img className={css.logoModal} src={logo} alt='logo' />
            <Link to='/ShopList'><HiOutlineShoppingBag className={css.navMenuIconModal} /></Link>
            <button onClick={closeModal} className={css.btnCloseModal}><AiOutlineClose /></button>
            <div className={css.modal}>
                <nav className={css.linkModalLists}>
                    <Link className={css.linkModal} onClick={closeModal} to='/' exact='true' >HOME</Link>
                    <Link className={css.linkModal} onClick={closeModal} to='/Pages'>PAGES</Link>
                    <Link className={css.linkModal} onClick={closeModal} to='/Servises'>SERVICES</Link>
                    <Link className={css.linkModal} onClick={closeModal} to='/portfolio'>PORTFOLIO</Link>
                    <Link className={css.linkModal} onClick={closeModal} to='/BlogPages'>BLOG</Link>
                    <Link className={css.linkModal} onClick={closeModal} to='/contacts'>CONTACTS</Link>
                </nav>

            </div>
        </div >
    )
}

export default ModalNavBar
