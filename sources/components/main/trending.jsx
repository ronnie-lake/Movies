import React from 'react';
import MainViewport from '../viewport/mainViewport.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovies from '../../actions/movies.jsx';
import moviePagesCounterChange from '../../actions/moviePagesCounterChange.jsx';
import Menu from './menu.jsx';
import View from './view.jsx';
import Library from './library.jsx';
import Loading from './loading.jsx';
import changeMenuItem from '../../actions/menu.jsx';


class Trending extends React.Component {
    
    componentDidMount(){
        Promise.resolve(this.props.changeMenuItem('item1')).then(()=>{
            this.props.getMovies(this.props.moviePagesCounter);
        }).then(()=>{
            this.props.moviePagesCounterChange(this.props.moviePagesCounter + 1)
        });

        window.onscroll = () => {
            if(document.documentElement.scrollHeight == (window.pageYOffset + document.documentElement.clientHeight)){
                Promise.resolve(this.props.getMovies(this.props.moviePagesCounter)).then(()=>{
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
    menuItemID: state.menuItemID
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMovies,
    moviePagesCounterChange,
    changeMenuItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
