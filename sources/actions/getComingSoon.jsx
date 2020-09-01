function getComingSoon(num) {
  return function (dispatch) {
    dispatch({
      type: 'SHOW_LOADER',
      data: true,
    });
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=59d21f6fad1a42f54e01bf87afa23ba8&language=en-US&page=${num}`)
      .then((response) => {
        return response.json()
      }).then((response) => {
        dispatch({
          type: 'SHOW_LOADER',
          data: false,
        });
        dispatch({
          type: 'GET_MOVIES',
          data: response.results
        })
      })
  }
}

export default getComingSoon;