import React from 'react';
import './search.less';

class Search extends React.Component {
    render() {
        return (
            <div className={`search ${this.props.mainField === true ? 'search__main' : ''}`}>
                <input className='search__input' type="text"/>
            </div>
        )
    }
}

export default Search;