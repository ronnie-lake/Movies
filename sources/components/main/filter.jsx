import React from 'react';
import './filter.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovieOfCetainGenre from '../../actions/getMovieOfCetainGenre.jsx';
import changeGenreID from '../../actions/changeGenreID.jsx';

class Filter extends React.Component {
    genresCreate = () => {
        // const movieArr = this.props.movies;
        // let allGenres = [];
        // for(let i = 0; i < movieArr.length; i++){
        //     let genres = movieArr[i].genres;
        //     for(let a = 0; a < genres.length; a++){
        //         if(allGenres.indexOf(genres[a]) < 0) {
        //             allGenres.push(genres[a]);
        //         }
        //     }
        // };
        // return allGenres.sort();

        // const genresArr = [];
        // const genresID = {};
        // for(let key in this.props.genres){
        //     genresArr.push(this.props.genres[key]);
        //     genresID[this.props.genres[key]] = key;
        // }
        // return genresArr.sort();
    }

    // addGenreID = () => {
    //     for(let key in this.props.genres){
    //         genresArr.push(this.props.genres[key])
    //     }
    // }

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
                                this.props.changeGenreID(el.id)
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
