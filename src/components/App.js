import React from 'react';
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import store from '../store'
import Menu from './Menu'
import VisibleCardList from '../containers/VisibleCardList'
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
                    <VisibleCardList />
                </React.Fragment>
            </Provider>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default hot(module)(App)