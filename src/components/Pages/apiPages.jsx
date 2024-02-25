import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

const ApiPages = () => {
    const [movies, setMovies] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            include_adult: 'false',
            language: 'en-US',
            page: '1',

        },
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDRmZTdlM2QwYTY5MzA2MzQ4ZTUxN2YyMWM3MGE3OSIsInN1YiI6IjY1Mjk3NjQzMGNiMzM1MTZmNWM4YjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whmYYKhT_uILl9fMGb9Rclq5CcbbJVNJVKSFUVsEDto',
        },
    };

    axios
        .get(options)
        .then(response => {
            setMovies(response.data.results);
            console.log(response.data.results);
        })
        .catch(error => {
            console.error(error.massege);
        });



    return (
        <div>
            {/* <h1>Список</h1>
            <ul>{movies.map(movie => <li key={movie.id}>{movie.title}</li>)}</ul> */}
        </div>
    )
}

export default ApiPages
