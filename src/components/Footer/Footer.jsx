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
        <div>
            <div className={css.containerFooter}>
                <div>
                    <h2>CONTACT</h2>
                    <p>T: +1 333 436 1747</p>
                    <p>M: hi@hellix.com</p>
                    <p>A: PO Box 16122 Collins Street West</p>
                    <p>Victoria 8007 Australia</p>
                    <p>GET DIRECTIONS</p>
                </div>
                <div>
                    <h2>OUR SERVICES</h2>
                    <p>Architecture & Interior</p>
                    <p>Project Planning</p>
                    <p>Product Design</p>
                    <p>Custom Solutions</p>

                </div>
                <div>
                    <h2>USEFUL LINKS</h2>
                    <p>Project</p>
                    <p>News</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Shop</p>
                    <p>FAQ</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h2>SUBSCRIBE</h2>
                    <p>We will send you updates on new products and discounts.</p>
                    <div className={css.emailLine}><p className={css.sendText}>Your Email</p><BiSend className={css.sendIcon} /></div>
                    <p>FOLLOW US</p>
                    <div className=''><FaFacebookF className={css.socialIcon} /><FaTwitter className={css.socialIcon} /><IoLogoInstagram className={css.socialIcon} /><FaLinkedinIn className={css.socialIcon} />
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
