function searchMoviesByPhrase(phrase){

    const formatedPhrase = phrase.split(' ').join('+');
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=59d21f6fad1a42f54e01bf87afa23ba8&query=${formatedPhrase}`)
        .then((response) => {
            if(response.status === 422){
                throw new Error();
            }
            return response.json()
        }).then((results) => {
            dispatch({
                type: 'SEARCH_MOVIES_BY_PHRASE',
                data: results.results
            })
        }).catch(() => {
            dispatch({
                type: 'SEARCH_MOVIES_BY_PHRASE',
                data: []
            })
        })
    }
}

export default searchMoviesByPhrase;


