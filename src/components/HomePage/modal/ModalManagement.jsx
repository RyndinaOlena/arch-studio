
import css from '../HomePage.module.css'
const ModalManagement = (props) => {
    const { closeModal } = props;
    return (
        <>
            <div className={css.modalOverlay}>  <div className={css.modal}> <button className={css.closeModal} onClick={closeModal}>close</button>
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia consectetur eius ut hic excepturi reprehenderit blanditiis libero quo amet est optio debitis nostrum obcaecati, perspiciatis culpa et nisi sequi id pariatur possimus voluptate sed eum nam? Ipsum quidem unde nostrum atque molestias, aut qui blanditiis nam eum voluptatem eius?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia consectetur eius ut hic excepturi reprehenderit blanditiis libero quo amet est optio debitis nostrum obcaecati, perspiciatis culpa et nisi sequi id pariatur possimus voluptate sed eum nam? Ipsum quidem unde nostrum atque molestias, aut qui blanditiis nam eum voluptatem eius?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia consectetur eius ut hic excepturi reprehenderit blanditiis libero quo amet est optio debitis nostrum obcaecati, perspiciatis culpa et nisi sequi id pariatur possimus voluptate sed eum nam? Ipsum quidem unde nostrum atque molestias, aut qui blanditiis nam eum voluptatem eius?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia consectetur eius ut hic excepturi reprehenderit blanditiis libero quo amet est optio debitis nostrum obcaecati, perspiciatis culpa et nisi sequi id pariatur possimus voluptate sed eum nam? Ipsum quidem unde nostrum atque molestias, aut qui blanditiis nam eum voluptatem eius?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia consectetur eius ut hic excepturi reprehenderit blanditiis libero quo amet est optio debitis nostrum obcaecati, perspiciatis culpa et nisi sequi id pariatur possimus voluptate sed eum nam? Ipsum quidem unde nostrum atque molestias, aut qui blanditiis nam eum voluptatem eius?</p></div></div>
        </>
    )
}

export default ModalManagement
