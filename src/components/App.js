import React from 'react';
import { hot } from 'react-hot-loader'
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
                <h1>Hello, World!</h1>
            </React.Fragment>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default hot(module)(App)