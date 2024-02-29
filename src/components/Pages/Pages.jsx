import React, { useEffect, useState } from 'react'
import getMovies from './movies_service';
import css from '../Pages/Pages.module.css'

const Pages = () => {

    const [movies, setMovies] = useState([])
    const [currentPage, setCurrenPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [checkedMovies, setCheckedMovies] = useState([])

    useEffect(() => {
        setCheckedMovies(JSON.parse(localStorage.getItem('selectMovie')) || [])
    }, [])

    useEffect(() => {
        getMovies(currentPage).then((data) => {
            setMovies(data?.results || [])
            setTotalPages(data?.total_pages || 0)
        });
    }, [currentPage]);


    const handleCheckedMovies = (item) => {
        setCheckedMovies((prev = []) => {
            const updateList = [...prev, item];
            localStorage.setItem('selectMovie',
                JSON.stringify(updateList))
            return updateList;
        })
    }


    const nextPage = () => {
        setCurrenPage(currentPage + 1)
    }

    const prevPage = () => {
        setCurrenPage(currentPage - 1)
    }

    return (
        <div className={css.pagesContainer}>
            <h1 className={css.listMovies}>List Movies</h1>
            <ul className={css.listPages}>{movies.map(movie => <li className={css.listPagesItem} key={movie.id}><h3 className={css.titleMovie}>{movie.title ?? movie.name}</h3>
                <img className={css.imgPages} alt={movie.id} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <button disabled={checkedMovies.some(({ id }) => movie.id === id)} className={css.btnPagesChecked} onClick={() => handleCheckedMovies(movie)}>Checked</button>
            </li>
            )}</ul>

            <div className={css.blockBtnMovies}><button onClick={prevPage} className={css.btnPage}>PREV</button>
                <button onClick={nextPage} disabled={currentPage >= totalPages} className={css.btnPage}>NEXT</button>
            </div>
        </div>
    )
}




export default Pages
