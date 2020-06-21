import React from 'react';
import './dropdown.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ButtonSeeMore from './buttonSeeMore.jsx';
import changeStateOfDropdown from '../../actions/changeStateOfDropdown.jsx';
import clearFoundMovies from '../../actions/clearFoundMovies.jsx'

class Dropdown extends React.Component {

    componentDidMount() {

        window.onclick = (e) => {
            if (e.target.id !== 'dropdown'){
                this.props.changeStateOfDropdown(false);
                this.props.clearFoundMovies();
            }
        }
    }

    render() {
        return (
            <div className='dropdown' id='dropdown'>
                <div className='dropdown__wrapper'>
                    <ul className='dropdown__list'>
                        {
                            this.props.foundMovies.slice(0, 5).map((el, arr) => {
                                return <li className='dropdown__item'>
                                    <span className='dropdown__poster'><img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} className='dropdown__img' alt=""/></span>
                                    <div className='dropdown__info'>
                                        <span className='dropdown__name'>{el.original_title}</span>
                                        <span className='dropdown__date'>{el.release_date.substring(0, 4)}</span>
                                    </div>
                                    <span className='dropdown__point'>{Math.trunc(el.vote_average / 2 * 10) / 10}</span>
                                </li>
                            })
                        }
                    </ul>
                    {
                        this.props.foundMovies.length > 5 ? <ButtonSeeMore />: null
                    }
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
    clearFoundMovies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);