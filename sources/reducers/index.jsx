const initialState = {
    movies: [],
    genres: [],
    gridIsEnabled: true,
    menuItemID: 'item1',
    moviePagesCounter: 1,
    activeGenreID: null
}

window.state = initialState;

function reducer (state = initialState, action) {
    console.log(action);
    switch(action.type){
        case 'CHANGE_VIEW':
            return {...state, gridIsEnabled: action.data};
        case 'CHANGE_MENU_ITEM':
            return {...state, menuItemID:action.data, movies: [], moviePagesCounter: 1};
        case 'GET_MOVIES':
            return {...state, movies: [...state.movies, ...action.data]};
        case 'GET_GENRES':
            return {...state, genres: action.data, activeGenreID: action.data[0].id};
        case 'MOVIE_PAGES_COUNTER_CHANGE':
            return {...state, moviePagesCounter: action.data};
        case 'CHANGE_GENRE_ID':{
            return {...state, activeGenreID: action.data, moviePagesCounter: 1, movies: []};
        }
    }
    return state;
}

export default reducer;