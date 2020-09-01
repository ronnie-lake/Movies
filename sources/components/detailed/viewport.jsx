import React from 'react';
import './viewport.less';
import Search from '../viewport/search.jsx';
import Film from './film.jsx';
import Description from './description.jsx';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Viewport extends React.Component {
    render() {
        return (
            <div className='viewport'>
                <div 
                    className="viewport__background"
                    style={
                        {
                            backgroundImage: this.props.currentMovie.backdrop_path ? 
                                `URL(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this.props.currentMovie.backdrop_path})` : 
                                "URL(/img/placeholder.png)"
                        }
                    }
                >
                </div>
                <div className='header'>
                    <div className='container container_flex'>
                        <NavLink exact to='/trending'>
                            <a className='header__logo'>Films</a>
                        </NavLink>
                        <Search />
                    </div>
                </div>
                <div className="container container_flex">
                    <Film />
                    <Description />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    currentMovie: state.currentMovie
});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Viewport);

