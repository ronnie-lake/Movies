import React from 'react';
import './loading.less';

class Loading extends React.Component {
    render(){
        return(
            <div className='loading'>
                <div className="loading__ball loading__ball_1"></div>
	            <div className="loading__ball loading__ball_2"></div>
	            <div className="loading__ball loading__ball_3"></div>
            </div>
        )
    }
}

export default Loading;