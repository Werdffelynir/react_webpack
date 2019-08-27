import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classNames from "classnames";
import classes from './app.scss';
import Header from "./Header";
import Main from "../containers/Main";
import List from "../containers/List";


class App extends Component {
    render() {

        const { config } = this.props;

        return (
            <div className={classNames(classes.dashboard)}>
                    <div className={classes.sidebar}>Sidebar</div>
                    <div className={classes.commonside}>
                        <Header
                            title={config.appTitle}
                            description={config.appDescription} />
                        <div>
                            <Main />
                            <List />
                        </div>
                    </div>
            </div>
        );
    }
}


export default hot(module)(App);
