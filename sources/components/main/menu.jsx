import React from 'react';
import './menu.less'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import changeMenuItem from '../../actions/menu.jsx';
import getMovies from '../../actions/movies.jsx';
import getTopRated from '../../actions/getTopRated.jsx';
import getComingSoon from '../../actions/getComingSoon.jsx';
import getMovieOfCetainGenre from '../../actions/getMovieOfCetainGenre.jsx';
import { NavLink } from 'react-router-dom';

const itemIDArr = [
    {
        id: 'item1',
        text: 'Trending',
        link: 'trending'
    },
    {
        id: 'item2',
        text: 'Top Rated',
        link: 'top-rated'
    },
    {
        id: 'item3',
        text: 'Coming Soon',
        link: 'coming-soon'
    },
    {
        id: 'item4',
        text: 'Genre',
        link: 'genre'
    }
]

class Menu extends React.Component {

    render() {
        return(
            <>
            <ul className='menu'>
                {
                    itemIDArr.map((el, index) => {
                        return <NavLink key={index} exact to={`/${el.link}`}>
                                <li className={`menu__item ${this.props.menuItemID === el.id ? 'menu__item_active' : ''}`} 
                                id={el.id}>{el.text}</li>
                                </NavLink>
                    })
                }
            </ul>
            <div className="hiddenmenu">
                <div className="hiddenmenu__chosen">{itemIDArr.find((el) => {
                    return el.id === this.props.menuItemID
                }).text}</div>
                <ul className='hiddenmenu__list'>
                    {
                        itemIDArr.map((el, index) => {
                            return <NavLink key={index} exact to={`/${el.link}`}>
                                    <li className='hiddenmenu__item'id={el.id}>{el.text}</li>
                                    </NavLink>
                        })
                    }
                </ul>
            </div>

            </>
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
    getMovies,
    getTopRated,
    getComingSoon,
    getMovieOfCetainGenre

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);