import React, { useState } from 'react'

import css from '../Portfolio/Portfolio.module.css'
import cssContact from '../Contacts/contacts.module.css'
const Contacts = () => {
    const [nameData, setNameData] = useState({
        name: '',
        email: '',
        website: ''
    })

    const handleChenge = (e) => {
        const { name, value } = e.target;

        setNameData(prev => ({
            ...prev, [name]: value
        }))
        return
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(nameData)
        setNameData({ name: '', website: '', email: '', })
    }
    const id = new Date()

    return (
        <div >
            <div className={cssContact.headerContact} >
                <div className={css.headerPortfolio}>
                    <p className={css.textHeroPorfolioFirst}>EXPLORE THE FEATURES</p>
                    <div className={css.blockTitleHeaderPortfolio}>
                        <h1 className={css.titlePorfolioBg}>Contact Us</h1>
                        <h2 className={css.titleHeaderPorfolio}>Contact Us</h2>
                        <p className={css.textHeroPortfolio}>Home / Contact Us</p></div>
                </div>
            </div>
            <div className={cssContact.blockMapContainer}>
                <div className={cssContact.mapBlock}><iframe title={id} className={cssContact.mapContact} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325519.57583455957!2d30.203042638512024!3d50.40156974907845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1709283218767!5m2!1sru!2sua" loading="lazy" ></iframe>
                </div>
                <div className={cssContact.blockWithContact}>
                    <p className={cssContact.textContactUs}>
                        <span className={cssContact.lineContact}></span>CONTACT US</p>
                    <h3 className={cssContact.titleSendMessege} >Let`s Start a Project </h3>
                    <p className={cssContact.textContact}>T: +1 333 436 1747</p>
                    <p className={cssContact.textContact}>  M: hi@hellix.com</p>
                    <br />
                    <p className={cssContact.textContact}> A: PO Box 16122 Collins Street West</p>
                    <p className={cssContact.textContact}> Victoria 8007 Australia</p>
                    <br />
                    <p className={cssContact.textContactUs}><span className={cssContact.lineContact} ></span>GET DIRECTIONS</p>
                    <p className={cssContact.textContact}>SHARE</p>
                </div>
            </div>

            <div className={cssContact.containerForm}>


                <form onSubmit={submit} className={cssContact.form}>
                    <p className={cssContact.titleForm}><span className={cssContact.lineForm}></span>CONTACT FORM</p>
                    <h3 className={cssContact.textForm}>Send a Message</h3>
                    <p className={cssContact.commentForm}>Your Comment</p>
                    <label >
                        <input className={cssContact.formInput} onChange={handleChenge} value={nameData.name} placeholder='Your Name'
                            name='name' type='text' required />
                    </label>

                    <label>
                        <input className={cssContact.formInput} onChange={handleChenge} value={nameData.email} placeholder='Your Email' name='email' type='text' required />
                    </label>

                    <label>
                        <input className={cssContact.formInput} onChange={handleChenge} value={nameData.website} placeholder='Website' name='website' type='text' required />
                    </label>

                    <button className={cssContact.btnForm} onClick={submit} type='submit'>SEND MESSAGE</button>

                </form>


            </div>

        </div >
    )
}

export default Contacts
