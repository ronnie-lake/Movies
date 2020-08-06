function getCurrentMovie(movieID){
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=59d21f6fad1a42f54e01bf87afa23ba8&language=en-US`)
        .then((response) => {
            return response.json()
        }).then((movie) => {
            dispatch({
                type: 'GET_CURRENT_MOVIE',
                data: movie
            })
        })
    }
}

export default getCurrentMovie;