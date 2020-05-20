import React from 'react';
import './rating.less';

class Rating extends React.Component {   
    render() {
        let { point, pointBlue } = this.props;
        point = Math.trunc(point / 2 * 10) / 10;
        function calcStars () {
            let remainder = Math.ceil(point) - point;
            switch(true) {
                case 0 < remainder && remainder < 0.4 : 
                    return <span className='rating__star rating__star_34'></span>;
                case 0.4 <= remainder && remainder <= 0.6 : 
                    return <span className='rating__star rating__star_half'></span>;
                case 0.6 < remainder && remainder <= 0.8 : 
                    return <span className='rating__star rating__star_14'></span>;
                case remainder > 0.8 : 
                    return <span className='rating__star rating__star_empty'></span>;
            }
        }

        function lastStars() {
            const allStars = 5;
            return new Array(allStars - Math.ceil(point)).fill(1).map((el, index) => {
                return <span key={index} className='rating__star rating__star_empty'></span>;
            });
        }
        return (
            <div className='rating'>
                <span className='rating__stars'>
                    {new Array(Math.trunc(point)).fill(1).map((el, index) => {
                        return <span key={index} className='rating__star'></span>
                    })}
                    {
                        calcStars()
                    }
                    {
                        lastStars()
                    }
                </span>
                <span className={`rating__point ${pointBlue ? ' rating__point_blue' : ''}`}>{point}</span>
            </div>
        )
    }
}

export default Rating;