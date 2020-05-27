import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './app.less';
import Viewport from './components/detailed/viewport.jsx'; 
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer.jsx';
import reducer from './reducers/index.jsx';
import MainViewport from './components/viewport/mainViewport.jsx';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import Detailed from './components/detailed/detailed.jsx';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


 
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* <Viewport /> */}
                    <Route path='/' component={MainViewport} />
                    {/* <MainViewport /> */}
                    <Main />
                    <Route exact path='/detailed' component={Detailed} />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));