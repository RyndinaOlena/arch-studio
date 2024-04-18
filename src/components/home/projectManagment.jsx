import React, { useState } from 'react'
import css from '../home/HomePage.module.css'
import ModalManagement from './modal/ModalManagement';
const ProjectManagment = () => {
    const [isModalOpen, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    return (<>
        <div className={css.containerProjectManagement}>
            <h5 className={css.textProjectManagment}>Explore the Features</h5>
            <h1 className={css.titleProjectManagement}>Full Project Management</h1>
            <button className={css.ProjectManagmentBtn} onClick={openModal}><p className={css.textBtnProject}>READ MORE</p></button>
            {isModalOpen && (<ModalManagement closeModal={closeModal} />)}
        </div></>

    )
}

export default ProjectManagment
