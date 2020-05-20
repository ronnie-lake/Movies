import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './app.less';
import Viewport from './components/viewport/viewport.jsx'; 
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer.jsx';
import reducer from './reducers/index.jsx';
import MainViewport from './components/viewport/mainViewport.jsx';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


 
class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Viewport /> */}
                <MainViewport />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));