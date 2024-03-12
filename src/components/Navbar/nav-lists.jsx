import React from 'react'
import { Link } from 'react-router-dom'
import css from '../Navbar/Navbar.module.css'
const NavLists = () => {
    return (
        <>
            <Link className={css.navMenu} to='/' exact='true' >HOME</Link>
            <Link className={css.navMenu} to='/Pages'>PAGES</Link>
            <Link className={css.navMenu} to='/Servises'>SERVICES</Link>
            <Link className={css.navMenu} to='/portfolio'>PORTFOLIO</Link>
            <Link className={css.navMenu} to='/BlogPages'>BLOG</Link>
            <Link className={css.navMenu} to='/contacts'>CONTACTS</Link>
        </>
    )
}

export default NavLists
