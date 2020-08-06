import React from 'react';
import './library.less';
import Item from './item.jsx';
import ItemTable from './itemTable.jsx';
import { connect } from 'react-redux';

class Library extends React.Component {
    render() {
        return (
                <div className={`library ${this.props.gridIsEnabled === true ? '' : 'library_block'}`}>
                    {
                        this.props.movies.map((el, index) => {
                            return this.props.gridIsEnabled === true ? <Item key={index} {...el} /> : <ItemTable key={index} {...el} />
                        })
                    }
                </div>
        )
    }
}
const mapStateToProps = (state) => ({
    movies: state.movies, 
    gridIsEnabled: state.gridIsEnabled
})

export default connect(mapStateToProps)(Library);