function getSimilarMovies(movieID) {
  return function (dispatch) {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=59d21f6fad1a42f54e01bf87afa23ba8&language=en-US&page=1`)
      .then((response) => {
        return response.json()
      }).then((response) => {
        dispatch({
          type: 'GET_SIMILAR_MOVIES',
          data: response.results
        })
      })
  }
}

export default getSimilarMovies;