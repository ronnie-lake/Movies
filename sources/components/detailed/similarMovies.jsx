import React from 'react';
import './similarMovies.less';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getSimilarMovies from '../../actions/getSimilarMovies.jsx';
import getCurrentMovie from '../../actions/getCurrentMovie.jsx';
import { NavLink } from 'react-router-dom';

class SimilarMovies extends React.Component {

    componentDidMount(){
        this.props.getSimilarMovies(this.props.currentMovie.id)
    }

    render(){

        if(!this.props.similarMovies.length){
            return null;
        }
        
        return(
            <>
            <h2 className='similar-movies__caption'>Similar movies</h2>
            <ul className='similar-movies__list'>
                {
                    this.props.similarMovies.slice(0, 13).map((el, index) => {
                        return (
                        <NavLink exact to={`/detailed/${el.id}`}>
                            <li className='similar-movies__item' key={index} onClick={() => this.props.getCurrentMovie(el.id)}>
                                <div className='similar-movies__img-wrapper'>
                                    <img className='similar-movies__img' src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} alt=""/>
                                </div>
                                <span className='similar-movies__title'>{el.title}</span>
                            </li>
                        </NavLink>
                        )
                    })
                }
            </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentMovie: state.currentMovie,
    similarMovies: state.similarMovies
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSimilarMovies,
    getCurrentMovie
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SimilarMovies);