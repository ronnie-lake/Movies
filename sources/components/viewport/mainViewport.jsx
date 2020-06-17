import React from 'react';
import Search from './search.jsx';
import './mainViewport.less';
import { NavLink } from 'react-router-dom';

class MainViewport extends React.Component {
    render() {
        return (
            <div className='main-viewport'>
                <img className='main-viewport__img' src="img/main.jpg" />
                <div className='header'>
                    <div className='container container_flex'>
                        <NavLink exact to='/trending'>
                            <span className='header__logo'>Films</span>
                        </NavLink>
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

