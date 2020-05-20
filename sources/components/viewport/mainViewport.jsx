import React from 'react';
import Search from './search.jsx';
import './mainViewport.less';

class MainViewport extends React.Component {
    render() {
        return (
            <div className='main-viewport'>
                <img className='main-viewport__img' src="img/cover-image.jpg" />
                <div className='header'>
                    <div className='container container_flex'>
                        <a className='header__logo'>Films</a>
                    </div>
                </div>
                <div className="container container_flex">
                    <Search mainField={true} />
                </div>
            </div>
        )
    }
}

export default MainViewport;

