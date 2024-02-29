import { useEffect, useState } from 'react'
import css from '../Pages/Pages.module.css'

const ShopList = () => {
    const [checkedMovies, setCheckedMovies] = useState([])
    useEffect(() => {
        setCheckedMovies(JSON.parse(localStorage.getItem('selectMovie')) || [])
    }, [])
    const handleDelete = (id) => {
        setCheckedMovies((prev = []) => {
            const updateList = prev.filter(prev => prev.id !== id);
            localStorage.setItem('selectMovie',
                JSON.stringify(updateList))
            return updateList;
        })
    }

    return (
        <div>
            {checkedMovies.length > 0 ? <ul className={css.listPages}>{checkedMovies.map(checkMovie => <li className={css.listPagesItem} key={checkMovie.title}><h3 className={css.titleMovie}>{checkMovie.title ?? checkMovie.name}</h3>
                <img className={css.imgPages} alt={checkMovie.id} src={`https://image.tmdb.org/t/p/original${checkMovie.poster_path}`} />
                <button onClick={() => handleDelete(checkMovie.id)} className={css.btnPagesChecked}>delete</button>
            </li>
            )}</ul> : <h4 className={css.titleShopList}>here is your list...</h4>}

        </div>
    )
}

export default ShopList
