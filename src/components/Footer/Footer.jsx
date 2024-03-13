import React from 'react'
import css from '../Footer/Footer.module.css'
import logo from '../images/icon/logoFooter.svg'
import { BiSend } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className={css.footerBlock}>
            <div className={css.containerFooter}>
                <div>
                    <h2 className={css.textFooterList}>CONTACT</h2>
                    <p className={css.textFooterList}>T: +1 333 436 1747</p>
                    <p className={css.textFooterList}>M: hi@hellix.com</p>
                    <p className={css.textFooterList}>A: PO Box 16122 Collins Street West</p>
                    <p className={css.textFooterList}>Victoria 8007 Australia</p>
                    <p className={css.textFooterList}>GET DIRECTIONS</p>
                </div>
                <div>
                    <h2 className={css.textFooterList}>OUR SERVICES</h2>
                    <p className={css.textFooterList}>Architecture & Interior</p>
                    <p className={css.textFooterList}>Project Planning</p>
                    <p className={css.textFooterList}>Product Design</p>
                    <p className={css.textFooterList}>Custom Solutions</p>

                </div>
                <div>
                    <h2 className={css.textFooterList}>USEFUL LINKS</h2>
                    <p className={css.textFooterList}>Project</p>
                    <p className={css.textFooterList}>News</p>
                    <p className={css.textFooterList}>About</p>
                    <p className={css.textFooterList}>Contact Us</p>
                    <p className={css.textFooterList}>Shop</p>
                    <p className={css.textFooterList}>FAQ</p>
                    <p className={css.textFooterList}>Privacy Policy</p>
                </div>
                <div>
                    <h2 className={css.textFooterList}>SUBSCRIBE</h2>
                    <p className={css.textFooterList}>We will send you updates on new products and discounts.</p>

                    <div className={css.emailLine}><p className={css.sendText}>Your Email</p><BiSend className={css.sendIcon} /></div>
                    <p className={css.textFooterList}>FOLLOW US</p>
                    <div className={css.blockSocial}><FaFacebookF className={css.socialIcon} /><FaTwitter className={css.socialIcon} /><IoLogoInstagram className={css.socialIcon} /><FaLinkedinIn className={css.socialIcon} />
                    </div>

                </div>

            </div>
            <div className={css.lineFooter} ><span className={css.lineFooter}></span></div>
            <div className={css.blockFooter}><p>© 2021 Hellix. All rights reserved.</p><img className={css.logo} src={logo} alt='logo' />
                <p>Designed by CreativeLayers</p>
            </div>
        </div>
    )
}

export default Footer
