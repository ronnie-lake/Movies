import React from 'react';
import './search.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setPhrase from '../../actions/setPhrase.jsx';
import searchMoviesByPhrase from '../../actions/searchMoviesByPhrase.jsx';
import Dropdown from './dropdown.jsx';
import changeStateOfDropdown from '../../actions/changeStateOfDropdown.jsx';

class Search extends React.Component {

    render() {
        if (this.props.foundMovies.length >= 1) {
            this.props.changeStateOfDropdown(true);
        }

        return (
            <div className={`search ${this.props.mainField === true ? 'search__main' : ''}`}>
                <input className='search__input' type="text" value={this.props.searchPhrase} onChange={(e)=>{
                    this.props.setPhrase(e.target.value);
                    this.props.searchMoviesByPhrase(e.target.value);
                }}/>
                {
                    // this.props.foundMovies.length < 1 && this.props.dropdownIsOpen === false ? null : <Dropdown />
                    this.props.dropdownIsOpen === true ?  <Dropdown /> : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchPhrase: state.searchPhrase,
    foundMovies: state.foundMovies,
    dropdownIsOpen: state.dropdownIsOpen
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setPhrase,
    searchMoviesByPhrase,
    changeStateOfDropdown
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);