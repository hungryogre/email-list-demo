import React from 'react';
import { hot } from 'react-hot-loader'
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
            <React.Fragment>
                <Menu name='Email List' />
                <CardList />
            </React.Fragment>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default hot(module)(App)