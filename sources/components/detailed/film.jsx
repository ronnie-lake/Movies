import React from 'react';
import './film.less';
import Rating from './rating.jsx';

class Film extends React.Component {
    render() {
        return (
            <div className='film'>
                <h2 className='film__caption'>The jungle book</h2>
                <p className='film__description'>
                    <span className='film__genre'>Adventure</span>
                    <span className='film__genre'>Drama</span>
                    <span className='film__genre'>Family</span>
                    <span className='film__genre'>Fantasy</span>
                    <span className='film__duration'>1h 46m</span>
                </p>
                <div className="film__rating-cont">
                    <Rating point='4.8' />
                </div>
            </div>
        )
    }
}

export default Film;