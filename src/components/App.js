import React from 'react';
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import store from '../store'
import Menu from './Menu'
import CardList from './CardList'
import './App.css'

const propTypes = {};

const defaultProps = {};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Menu name='Email List' />
                    <CardList />
                </React.Fragment>
            </Provider>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default hot(module)(App)