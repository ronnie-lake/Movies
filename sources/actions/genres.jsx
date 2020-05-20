function getGenres(){
    return function(dispatch) {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=59d21f6fad1a42f54e01bf87afa23ba8')
        .then((response) => {
            return response.json()
        }).then((genres) => {
            let genresArr = genres.genres;
            console.log(genresArr);
          
            // let genresObj = genresArr.reduce((prev, el) => {
            //     prev[el.id] = el.name;
            //     return prev;
            // }, {});

            // let sortGenres = {}
            // genresArr.map((el, index) => {
            //     sortGenres[el.id] = el.name;
            // })

            dispatch({
                type: 'GET_GENRES',
                data: genresArr
            })
        })
    }
}

export default getGenres;