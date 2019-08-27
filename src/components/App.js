import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from '../styles/app.scss';
import Header from "./Header";
import Main from "./Main";


class App extends Component {
    render() {
        return (
            <div className={classes.app}>

                <Header />

                <Main />

            </div>
        );
    }
}

export default hot(module)(App);

