import React from 'react';
import './menu.less'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import changeMenuItem from '../../actions/menu.jsx';
import clearMovies from '../../actions/clearMovies.jsx';
import getMovies from '../../actions/movies.jsx';
import getTopRated from '../../actions/getTopRated.jsx';
import getComingSoon from '../../actions/getComingSoon.jsx';
import getGenres from '../../actions/genres.jsx';
import getMovieOfCetainGenre from '../../actions/getMovieOfCetainGenre.jsx';

const itemIDArr = [
    {
        id: 'item1',
        text: 'Trending'
    },
    {
        id: 'item2',
        text: 'Top Rated'
    },
    {
        id: 'item3',
        text: 'Coming Soon'
    },
    {
        id: 'item4',
        text: 'Genre'
    }
]

class Menu extends React.Component {

    switcher = (e) => {
        if (this.props.menuItemID === e.target.id) return;
        this.props.changeMenuItem(e.target.id);
        // this.props.clearMovies();

    }

    render() {
        return(
            <ul className='menu'>
                {
                    itemIDArr.map((el, index) => {
                        return <li key={index} className={`menu__item ${this.props.menuItemID === el.id ? 'menu__item_active' : ''}`} onClick={this.switcher} id={el.id}>{el.text}</li>

                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    menuItemID: state.menuItemID,
    moviePagesCounter: state.moviePagesCounter,
    genres: state.genres
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeMenuItem,
    clearMovies,
    getMovies,
    getTopRated,
    getComingSoon,
    getGenres,
    getMovieOfCetainGenre

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);