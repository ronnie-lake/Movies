const initialState = {
    movies: [],
    genres: [],
    gridIsEnabled: true,
    menuItemID: 'item1',
    moviePagesCounter: 1,
    activeGenreID: null,
    searchPhrase: '',
    foundMovies: [],
    dropdownIsOpen: false
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
        case 'CHANGE_GENRE_ID':
            return {...state, activeGenreID: action.data, moviePagesCounter: 1, movies: []};
        case 'SET_PHRASE':
            return {...state, searchPhrase:action.data}
        case 'SEARCH_MOVIES_BY_PHRASE':
            return {...state, foundMovies: action.data}
        case 'CHANGE_STATE_OF_DROPDOWN': {
            return {...state, dropdownIsOpen: action.data}
        }
        case 'CLEAR_FOUND_MOVIES':
            return {...state, foundMovies: []}
    }
    return state;
}

export default reducer;