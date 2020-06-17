import React from 'react';
import MainViewport from '../viewport/mainViewport.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovieOfCetainGenre from '../../actions/getMovieOfCetainGenre.jsx';
import moviePagesCounterChange from '../../actions/moviePagesCounterChange.jsx';
import getGenres from '../../actions/genres.jsx';
import Menu from './menu.jsx';
import View from './view.jsx';
import Library from './library.jsx';
import Loading from './loading.jsx';
import Filter from './filter.jsx';
import changeMenuItem from '../../actions/menu.jsx';

class Genre extends React.Component {

    componentDidMount(){
        Promise.resolve(this.props.changeMenuItem('item4')).then(()=>{
            this.props.getMovieOfCetainGenre(this.props.genres[0].id, this.props.moviePagesCounter);
        }).then(()=>{
            this.props.moviePagesCounterChange(this.props.moviePagesCounter + 1)
        });

        window.onscroll = () => {
            if(document.documentElement.scrollHeight == (window.pageYOffset + document.documentElement.clientHeight)){
                Promise.resolve(this.props.getMovieOfCetainGenre(this.props.genres[0].id, this.props.moviePagesCounter)).then(()=>{
                    this.props.moviePagesCounterChange(this.props.moviePagesCounter + 1)
                });
            }
        }
    }

    componentWillUnmount() {
        window.onscroll = null
    }

    render(){
        return(
            <>
            <MainViewport />
            <div className='main'>
                <div className='container container_flex'>
                    <Menu />
                    <View />
                </div>
                <div className="container">
                    <Filter />
                    <Library />
                    <Loading />
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    moviePagesCounter: state.moviePagesCounter,
    activeGenreID: state.activeGenreID,
    genres: state.genres
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMovieOfCetainGenre,
    moviePagesCounterChange,
    getGenres,
    changeMenuItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Genre);
