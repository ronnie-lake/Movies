import React from 'react';
import Menu from './menu.jsx';
import View from './view.jsx';
import Library from './library.jsx';
import Loading from './loading.jsx';


class Main extends React.Component {
    render(){
        return(
            <div className='main'>
                <div className='container container_nav'>
                    <Menu />
                    <View />
                </div>
                <div className="container">
                    <Library />
                    <Loading />
                </div>
            </div>
        )
    }
}

export default Main;