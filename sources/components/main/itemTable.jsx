import React from 'react';
import './itemTable.less';
import Rating from '../detailed/rating.jsx';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class ItemTable extends React.Component {

    showGenre = (arrGenresID) => {
        let sortGenres = {};
        this.props.genres.map((el, index) => {
            sortGenres[el.id] = el.name;
        })
        return arrGenresID.map((el)=> {
            return sortGenres[el] 
        })
    }

    render() {
        const { title, vote_average, genre_ids, poster_path, overview } = this.props;
        return (
            <div className="item-table">
                <div className="item-table__img-wrapper">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="item-table__img" />
                    <div className="item-table__hover">
                        <NavLink exact to={`/detailed/${this.props.id}`}>
                            <span className="item-table__play"></span>
                        </NavLink>
                        <span className="item-table__watch">Watch Now</span>
                    </div>
                </div>
                <div className="item-table__info">
                    <h4 className='item-table__name'>{title}</h4>
                        <span className='item-table__genres'>{this.showGenre(genre_ids).join(', ')}</span>
                        {
                            !!vote_average && <Rating point={vote_average} pointBlue={true} />
                        }
                        <p className="item-table__text">{overview}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    genres: state.genres
})

export default connect(mapStateToProps)(ItemTable);
