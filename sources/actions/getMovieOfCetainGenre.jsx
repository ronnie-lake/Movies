function getMovieOfCetainGenre(genreID, num) {
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}&sort_by=vote_average.desc&vote_count.gte=10&api_key=59d21f6fad1a42f54e01bf87afa23ba8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}`)
        .then((response) => {
            return response.json()
        }).then((movies) => {
            dispatch({
                type: 'GET_MOVIES',
                data: movies.results,
            })
        })
    };
}

export default getMovieOfCetainGenre;