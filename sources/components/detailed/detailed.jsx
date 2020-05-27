import React from 'react';
import Viewport from './viewport.jsx';
import { Route } from 'react-router-dom';
 
class Detailed extends React.Component {

    render() {
        return(
            <>
                <Viewport />
                {/* <Route exact path='/detailed' component={Viewport}></Route> */}
            </>
        )
    }
}

export default Detailed;