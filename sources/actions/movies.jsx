function getMovies(num) {
    return function(dispatch) {
        dispatch({
            type: 'SHOW_LOADER',
            data: true,
        });
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=59d21f6fad1a42f54e01bf87afa23ba8&language=en-US&page=${num}`)
        .then((response) => {
            return response.json()
        }).then((movies) => {
            dispatch({
                type: 'SHOW_LOADER',
                data: false,
            });
            dispatch({
                type: 'GET_MOVIES',
                data: movies.results,
            })
        })
    };
  }

  export default getMovies;