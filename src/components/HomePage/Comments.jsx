import React, { useState } from 'react'
// import css from '../HomePage/HomePage.module.css'
import comments from './commentsImg'
import css from '../HomePage/HomePage.module.css'

const CommentsCurrent = () => {
    const [startIndex, setStartIndex] = useState(0);
    const handleNextClick = () => {
        setStartIndex(prev => Math.min(prev + 3, comments.length - 3))
    };

    const hendlePrevClick = () => {
        setStartIndex(prev => Math.max(prev - 3, 0))
    }
    const displayTeam = comments.slice(startIndex, startIndex + 3)
    return (
        <> <div className={css.carouselContainer}>
            <div className={css.textComments}> <span className={css.lineCommets}></span><h3 className={css.commentsText}>TESTIMONIALS</h3>
                <h2 className={css.commentsTitle}>Our Happy Clients</h2></div>
            <ul className={css.listComments}>
                {displayTeam.map(comment => (<li key={comment.id} className={css.carouselBlock} >
                    <img className={css.carouselImg} src={comment.img} alt={comment.name} />
                    <h2 className={css.titleBlock}>{comment.name}</h2><p>{comment.text}</p>
                </li>))}

            </ul>
            <div className={css.btnComments}>
                <button onClick={hendlePrevClick} className={css.btnTeam} disabled={startIndex === 0}>&#10094;</button>
                <button onClick={handleNextClick} className={css.btnTeam} disabled={startIndex + 3 >= comments.length}>&#10095;</button>
            </div>
        </div>

        </>
    )
}

export default CommentsCurrent
