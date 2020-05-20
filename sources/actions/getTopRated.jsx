function getTopRated(num){
    console.log(num);
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=59d21f6fad1a42f54e01bf87afa23ba8&language=en-US&page=${num}`)
        .then((response) => {
            return response.json()
        }).then((response) => {
            dispatch({
                type: 'GET_MOVIES',
                data: response.results
            })
        })
    }
}

export default getTopRated;