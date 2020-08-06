import React from 'react';
import './dropdown.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import changeStateOfDropdown from '../../actions/changeStateOfDropdown.jsx';
import clearFoundMovies from '../../actions/clearFoundMovies.jsx';
import getCurrentMovie from '../../actions/getCurrentMovie.jsx';
import { NavLink } from 'react-router-dom';

class Dropdown extends React.Component {

    componentDidMount() {

        window.onclick = (e) => {
            if (e.target.id !== 'inputDropdown' && e.target.id !== 'searchInput'){
                this.props.changeStateOfDropdown(false);
                this.props.clearFoundMovies();
            }
        }
    }

    render() {
        return (
            <div className='dropdown' id='inputDropdown'>
                <div className='dropdown__wrapper'>
                    <ul className='dropdown__list'>
                        {
                            this.props.foundMovies.map((el, index) => {
                                return <NavLink exact to={`/detailed/${el.id}`}>
                                    <li className='dropdown__item' key={index} onClick={() => this.props.getCurrentMovie(el.id)}>
                                        <span className='dropdown__poster'><img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} className='dropdown__img' alt=""/></span>
                                        <div className='dropdown__info'>
                                            <span className='dropdown__name'>{el.original_title}</span>
                                            {
                                                el.release_date && <span className='dropdown__date'>{el.release_date.substring(0, 4)}</span>
                                            }   
                                        </div>
                                        {
                                            !!el.vote_average && <span className='dropdown__point'>{Math.trunc(el.vote_average / 2 * 10) / 10}</span>
                                        }
                                        
                                    </li>
                                </NavLink>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    foundMovies: state.foundMovies,
    genres: state.genres,
    dropdownIsOpen: state.dropdownIsOpen
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeStateOfDropdown,
    clearFoundMovies,
    getCurrentMovie
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);