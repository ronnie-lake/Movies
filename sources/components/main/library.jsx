import React, { Fragment } from 'react';
import './library.less';
import Item from './item.jsx';
import ItemTable from './itemTable.jsx';
import Filter from './filter.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovies from '../../actions/movies.jsx';
import getGenres from '../../actions/genres.jsx';
import getTopRated from '../../actions/getTopRated.jsx';
import getComingSoon from '../../actions/getComingSoon.jsx';
import getMovieOfCetainGenre from '../../actions/getMovieOfCetainGenre.jsx';
import moviePagesCounterChange from '../../actions/moviePagesCounterChange.jsx';
import clearMovies from  '../../actions/clearMovies.jsx';

class Library extends React.Component {
    componentDidMount() {
        // this.props.getMovies(this.props.moviePagesCounter);
        this.props.getGenres();

        window.onscroll = () => {
            if(document.documentElement.scrollHeight == (window.pageYOffset + document.documentElement.clientHeight)){
                this.choiseItem()
            }
        }
    }

    componentWillUnmount() {
        this.props.clearMovies();
        window.onscroll = null
    }

    choiseItem = () => {
        switch(this.props.menuItemID){
            case 'item1':{
                this.props.getMovies(this.props.moviePagesCounter);
                break;
            }
            case 'item2':{
                this.props.getTopRated(this.props.moviePagesCounter);
                break;
            }
            case 'item3':{
                this.props.getComingSoon(this.props.moviePagesCounter);
                break;
            }
            case 'item4':{
                // this.props.getGenres(this.props.moviePagesCounter);
                this.props.getMovieOfCetainGenre(this.props.activeGenreID, this.props.moviePagesCounter);
                break;
            }
        }

        this.props.moviePagesCounterChange(this.props.moviePagesCounter + 1);
    }

    render() {
        if (this.props.moviePagesCounter === 1) this.choiseItem();
        return (
            <>
                {this.props.menuItemID === 'item4' && <Filter />}
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
    getGenres, 
    getMovieOfCetainGenre,
    moviePagesCounterChange, 
    clearMovies
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Library);