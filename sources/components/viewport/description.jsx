import React from 'react';
import './description.less'

class Description extends React.Component {
    render() {
        return (
            <div className='description'>
                <p className='description__text'>
                There are growing dangers in the wizarding world of 1926 New York.  Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding 
                </p>
                <div className='description__button-wrapper'>
                    <div className='description__button'>Watch Now</div>
                    <div className='description__button'>View info</div>
                </div>

            </div>
        )
    }
}

export default Description;