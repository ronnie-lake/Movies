import React from 'react';
import './film.less';
import Rating from './rating.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Film extends React.Component {
    genresOfCurrentMovie = () => {
        return this.props.currentMovie.genres.map((el, index) => el.name).join(', ')
    }

    render() {
        return (
            <div className='film'>
                <h2 className='film__caption'>{this.props.currentMovie.title}</h2>
                <p className='film__description'>
                    <span className='film__genre'>{this.genresOfCurrentMovie()}</span>
                    {/* <span className='film__duration'>1h 46m</span> */}
                </p>
                <div className="film__rating-cont">
                    {
                        !!this.props.currentMovie.vote_average && <Rating point={this.props.currentMovie.vote_average} />
                    }
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentMovie: state.currentMovie,
    genres: state.genres
});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Film);