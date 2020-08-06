import React from 'react';
import './description.less';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Description extends React.Component {

    slide(e, blockID){
        e.preventDefault();
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
    }

    render() {
        return (
            <div className='description'>
                <p className='description__text'>
                    {this.props.currentMovie.overview}
                </p>
                <div className='description__button-wrapper'>
                    <div className='description__button' onClick={(e) => this.slide(e, 'detailedDescription')}>View info</div>
                    <div className='description__button' onClick={(e) => this.slide(e, 'videoItem')}>Watch Now</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Description);
