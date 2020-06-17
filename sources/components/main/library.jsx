import React, { Fragment } from 'react';
import './library.less';
import Item from './item.jsx';
import ItemTable from './itemTable.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovies from '../../actions/movies.jsx';
import getTopRated from '../../actions/getTopRated.jsx';
import getComingSoon from '../../actions/getComingSoon.jsx';
import getMovieOfCetainGenre from '../../actions/getMovieOfCetainGenre.jsx';

class Library extends React.Component {
    render() {
        return (
            <>
                <div className={`library ${this.props.gridIsEnabled === true ? '' : 'library_block'}`}>
                    {
                        this.props.movies.map((el, index) => {
                            return this.props.gridIsEnabled === true ? <Item key={index} {...el} /> : <ItemTable key={index} {...el} />
                        })
                    }
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    movies: state.movies, 
    genres: state.genres,
    gridIsEnabled: state.gridIsEnabled,
    menuItemID: state.menuItemID,
    topRated: state.topRated,
    upComing: state.upComing,
    movieOfCertainGenre: state.movieOfCertainGenre,
    moviePagesCounter: state.moviePagesCounter,
    activeGenreID: state.activeGenreID
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMovies,
    getTopRated,
    getComingSoon,
    getMovieOfCetainGenre
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Library);