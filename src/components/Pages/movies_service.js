import axios from 'axios';
const getMovies = async (page = 1) => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/all/day',
        params: { language: 'en-US', page: page.toString() },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTViYjNiYmJjNjI3MzhiNGE5NDcyN2Q4OGQ2N2I5ZSIsInN1YiI6IjY1MjdhNDJjODEzODMxMDExYjQ5MWJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4SUgvkJ2_ZKVAH1mFvbYnJX5d7g63SF1OquXIcFrp9c'
        }
    };
    const resp = await axios.request(options);
    return resp?.data || {};
};
export default getMovies;
