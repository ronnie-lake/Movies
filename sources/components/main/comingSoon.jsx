import React from 'react';
import MainViewport from '../viewport/mainViewport.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moviePagesCounterChange from '../../actions/moviePagesCounterChange.jsx';
import getComingSoon from '../../actions/getComingSoon.jsx';
import Menu from './menu.jsx';
import View from './view.jsx';
import Library from './library.jsx';
import Loading from './loading.jsx';
import changeMenuItem from '../../actions/menu.jsx';


class ComingSoon extends React.Component {

    componentDidMount(){
        Promise.resolve(this.props.changeMenuItem('item3')).then(()=>{
            this.props.getComingSoon(this.props.moviePagesCounter);
        }).then(()=>{
            this.props.moviePagesCounterChange(this.props.moviePagesCounter + 1)
        });

        window.onscroll = () => {
            if(document.documentElement.scrollHeight == (window.pageYOffset + document.documentElement.clientHeight)){
                Promise.resolve(this.props.getComingSoon(this.props.moviePagesCounter)).then(()=>{
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
    moviePagesCounter: state.moviePagesCounter
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getComingSoon,
    moviePagesCounterChange,
    changeMenuItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);