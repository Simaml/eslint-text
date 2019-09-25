import React, { Component } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import Product from './component/Product';

class App extends Component {
    render() {

        return (
            <HashRouter history={BrowserRouter}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/product' component={Product} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;