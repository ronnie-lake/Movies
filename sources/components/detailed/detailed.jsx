import React from 'react';
import './detailed.less';
import Viewport from './viewport.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getCurrentMovie from '../../actions/getCurrentMovie.jsx';
import clearCurrentMovie from '../../actions/clearCurrentMovie.jsx';
import SimilarMovies from './similarMovies.jsx';
import getSimilarMovies from '../../actions/getSimilarMovies.jsx';
import Video from './video.jsx';
 
class Detailed extends React.Component {

    componentDidMount(){
        // this.props.getCurrentMovie( window.location.pathname.replace('/detailed/', ''));
        this.props.getCurrentMovie(this.props.match.params.movieID);
    }

    componentWillUnmount(){
        this.props.clearCurrentMovie();
        
    }

    getYear(){
        return new Date(this.props.currentMovie.release_date).getFullYear();
    }

    runtime(){
        const hours = Math.trunc(this.props.currentMovie.runtime / 60);
        const minutes = this.props.currentMovie.runtime - hours * 60;
        return hours + 'h' + minutes + 'm';
    }

    addCommas(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        if(!this.props.currentMovie.id){
            return null;
        }
        return(
            <>
                <Viewport />
                <div className='main main_detailed'>
                {
                    this.props.currentMovie.backdrop_path && <img className='detailed__background' src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${this.props.currentMovie.backdrop_path}`} /> 
                }
                    <div className='container'>
                            <div className="detailed__img-wrapper">
                                <img className="detailed__img" src={`https://image.tmdb.org/t/p/w500${this.props.currentMovie.poster_path}`} alt=""/>
                            </div>
                            <div className="detailed__description" id='detailedDescription'>
                            <h2 className='detailed__caption'>{this.props.currentMovie.title}</h2>
                            {
                                this.props.currentMovie.tagline && 
                                <span className='detailed__tagline'>{'"' + this.props.currentMovie.tagline + '"'}</span>
                            }
                            <div className="detailed__info">
                                {
                                    !!this.props.currentMovie.production_countries.length &&
                                    <>
                                        <div className="detailed__info-caption">Country</div>
                                        <div className='detailed__info-value'>{
                                            this.props.currentMovie.production_countries.map((el) => {
                                                return el.name
                                            }).join(', ')
                                            }
                                        </div>
                                    </>
                                }
                                {
                                    this.props.currentMovie.release_date &&
                                    <>
                                        <div className="detailed__info-caption">Year</div>
                                        <div className='detailed__info-value'>{this.getYear()}</div>
                                    </>
                                }
                                {
                                    this.props.currentMovie.status && 
                                    <>
                                        <div className="detailed__info-caption">Status</div>
                                        <div className='detailed__info-value'>{this.props.currentMovie.status}</div>
                                    </>
                                }
                                {
                                    !!this.props.currentMovie.runtime &&
                                    <>
                                        <div className="detailed__info-caption">Runtime</div>
                                        <div className='detailed__info-value'>{this.runtime()}</div>
                                    </>
                                }
                                {
                                    !!this.props.currentMovie.budget &&
                                    <>
                                        <div className="detailed__info-caption">Budget</div>
                                        <div className='detailed__info-value'>{'$' + this.addCommas(this.props.currentMovie.budget)}</div>
                                    </>
                                }
                                {
                                    !!this.props.currentMovie.revenue && 
                                    <>
                                        <div className="detailed__info-caption">Revenue</div>
                                        <div className='detailed__info-value'>{'$' + this.addCommas(this.props.currentMovie.revenue)}</div>
                                    </>
                                }     
                            </div>
                            <h3 className="detailed__overview-caption">Overview</h3>    
                            <p className="detailed__overview">
                                {this.props.currentMovie.overview}
                            </p>
                        </div>
                        <SimilarMovies />
                    </div>
                </div>   
                <div className="main">
                    <div className="container">
                        {
                            this.props.currentMovie.id && <Video />
                        }
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentMovie: state.currentMovie,
    similarMovies: state.similarMovies
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentMovie,
    clearCurrentMovie,
    getSimilarMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Detailed);