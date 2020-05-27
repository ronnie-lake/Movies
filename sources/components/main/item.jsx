import React from 'react';
import './item.less';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'; 
import Detailed from '../detailed/detailed.jsx';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInfoEnabled: false
        }
    }

    switcher = (e) => {
        this.state.isInfoEnabled === true ? this.setState({ isInfoEnabled: false }) : this.setState({ isInfoEnabled: true });
    }

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
            <div className='item'>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="item__img" />
                    <div className="item__main">
                        <div className="item__hover">
                             <NavLink to='/detailed'>
                                <span className="item__play"></span>
                            </NavLink>
                            <span className="item__watch">Watch Now</span>
                            <div className="item__button" onClick={this.switcher}>View Info</div>
                        </div>
                    {
                        this.state.isInfoEnabled === false && <div className="item__description">
                            <h4 className='item__name'>{title}</h4>
                            <span className="item__point">{Math.trunc(vote_average / 2 * 10) / 10}</span>
                            <span className='item__genres'>{this.showGenre(genre_ids).join(', ')}</span>
                        </div>
                    }
                    </div>
                {
                     <div className={this.state.isInfoEnabled == true ? 'info info__block' : 'info'}>
                        <div className="info__wrapper">
                            <span className='info__cancel' onClick={this.switcher}></span>
                            <h4 className='info__name'>{title}</h4>
                            <span className="info__point">{Math.trunc(vote_average / 2 * 10) / 10}</span>
                            <span className='info__genres'>{this.showGenre(genre_ids).join(', ')}</span>
                            <p className="info__text">{overview}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    genres: state.genres
})

export default connect(mapStateToProps)(Item);