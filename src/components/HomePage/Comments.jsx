import React, { useState } from 'react'
import css from '../HomePage/HomePage.module.css'
import comments from './commentsImg'


const CommentsCurrent = () => {
    const [currentComments, setCurrentComments] = useState(0);
    const totalComment = Math.ceil(comments.length / 3);
    const nextslide = () => {
        setCurrentComments(currentComments === totalComment - 1 ? 0 : currentComments + 1)
    };
    const prevSlide = () => {
        setCurrentComments(currentComments === 0 ? totalComment - 1 : currentComments - 1)
    };


    return (
        <> <div className={css.carouselContainer}>
            <div className={css.textComments}> <span className={css.lineCommets}></span><h3 className={css.commentsText}>TESTIMONIALS</h3>
                <h2 className={css.commentsTitle}>Our Happy Clients</h2></div>

            <div className={css.commentsCarusel}><div className={css.commentsCaruselContent} style={{ transform: `translateX(-${currentComments * 100}%` }}>{[...Array(totalComment)].map((_, slideIndex) => (
                <div key={slideIndex} className={css.caruselSlide}>{comments.slice(slideIndex * 3, slideIndex * 3 + 3).map((comment, index) => (
                    <div key={index} className={css.carouselBlock}><img className={css.carouselImg} src={comment.img} alt={comment.name} /> <div className={css.carouselCaption}><h2>{comment.name}</h2><p>{comment.text}</p>
                    </div></div>
                ))}</div>
            ))}   </div>
                <button className={css.prev} onClick={prevSlide}>&#10094;</button>
                <button className={css.next} onClick={nextslide}>&#10095;</button>
            </div>
        </div>

        </>
    )
}

export default CommentsCurrent
