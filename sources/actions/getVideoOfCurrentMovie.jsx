function getVideoOfCurrentMovie(movieID){
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=59d21f6fad1a42f54e01bf87afa23ba8&language=en-US`)
        .then((response) => {
            return response.json()
        }).then((response) => {
            dispatch({
                type: 'GET_VIDEO',
                data: response
            })
        })
    }
}

export default getVideoOfCurrentMovie