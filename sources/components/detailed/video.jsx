import React from 'react';
import './video.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getVideoOfCurrentMovie from '../../actions/getVideoOfCurrentMovie.jsx';
class Video extends React.Component {

    componentDidMount(){
        this.props.getVideoOfCurrentMovie(this.props.currentMovie.id);
    }
    
    componentDidUpdate(){
        if(this.props.videoArr.id !== this.props.currentMovie.id){
            this.props.getVideoOfCurrentMovie(this.props.currentMovie.id);
        }
    }

    findLink(){
        return this.props.videoArr.results.find((el, index) => {
            return el.site === 'YouTube'
        }).key
    }

    render(){
        if(!(this.props.videoArr.results && this.props.videoArr.results.length)) {
            return null
        }

        return( 
            <div className="container">
                <div className="video__wrapper" id='videoItem'>
                    <iframe key={this.props.videoArr.id} className='video__item' width="750" height="422" src={`https://www.youtube.com/embed/${this.findLink()}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentMovie: state.currentMovie,
    similarMovies: state.similarMovies,
    videoArr: state.videoArr
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getVideoOfCurrentMovie
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Video)