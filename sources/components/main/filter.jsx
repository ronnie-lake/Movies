import React from 'react';
import './filter.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovieOfCetainGenre from '../../actions/getMovieOfCetainGenre.jsx';
import changeGenreID from '../../actions/changeGenreID.jsx';

class Filter extends React.Component {

    render() {
        return (
            <ul className="filter">
                {
                    this.props.genres.map((el, index) => (   
                        <li 
                            key={index} 
                            className={`filter__item ${el.id === this.props.activeGenreID ? 'filter__item_active' : ''}`} 
                            onClick={() => {
                                if(el.id === this.props.activeGenreID) return;
                                Promise.resolve( this.props.changeGenreID(el.id)).then(()=>{
                                    this.props.getMovieOfCetainGenre(this.props.activeGenreID, this.props.moviePagesCounter);
                                }).then(()=>{
                                    this.props.moviePagesCounterChange(this.props.moviePagesCounter + 1)
                                });
                            }}
                        >{el.name}</li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    genres: state.genres,
    moviePagesCounter: state.moviePagesCounter,
    activeGenreID: state.activeGenreID
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMovieOfCetainGenre,
    changeGenreID
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
