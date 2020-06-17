function getGenres(){
    return function(dispatch) {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=59d21f6fad1a42f54e01bf87afa23ba8')
        .then((response) => {
            return response.json()
        }).then((genres) => {
            let genresArr = genres.genres;
            dispatch({
                type: 'GET_GENRES',
                data: genresArr
            })
        })
    }
}

export default getGenres;