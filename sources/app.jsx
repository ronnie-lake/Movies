import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import './app.less';
import Footer from './components/footer/footer.jsx';
import reducer from './reducers/index.jsx';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, bindActionCreators, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Detailed from './components/detailed/detailed.jsx';
import Trending from './components/main/trending.jsx';
import TopRated from './components/main/topRated.jsx';
import ComingSoon from './components/main/comingSoon.jsx';
import Genre from './components/main/genre.jsx';
import getGenres from './actions/genres.jsx';
import ScrollToTop from './ScrollToTop.jsx';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
 
class App extends React.Component {
    
    componentDidMount(){
        this.props.getGenres();
        window.onbeforeunload = function(){
            window.scrollTo(0, 0);
        }
    }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ScrollToTop />
                    <Redirect exact from='/' to='/trending' />
                    <Route path='/trending' component={Trending} />
                    <Route path='/top-rated' component={TopRated} />
                    <Route path='/coming-soon' component={ComingSoon} />
                    <Route path='/genre' render={()=>this.props.genres.length ? <Genre /> : null} />
                    <Route exact path='/detailed/:movieID' component={Detailed} />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    genres: state.genres
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getGenres
}, dispatch);

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>, document.getElementById('app')
);