import React from 'react';
import './viewport.less';
import Search from './search.jsx';
import Film from './film.jsx';
import Description from './description.jsx';

class Viewport extends React.Component {
    render() {
        return (
            <div className='viewport'>
                <img className='viewport__img' src="img/cover-image.jpg" />
                <div className='header'>
                    <div className='container container_flex'>
                        <a className='header__logo'>Films</a>
                        <Search />
                    </div>
                </div>
                <div className="container container_flex">
                    <Film />
                    <Description />
                </div>
            </div>
        )
    }
}

export default Viewport;

