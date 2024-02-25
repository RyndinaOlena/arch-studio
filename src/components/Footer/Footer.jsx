import React from 'react'
import css from '../Footer/Footer.module.css'
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


                </div>
            </div>

        </div>
    )
}

export default Footer
