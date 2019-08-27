import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';


class Header extends Component {

    render() {

        return (
            <div className={classes.header}>
                <h1>My React App!</h1>
            </div>
        );
    }
}

export default hot(module)(Header);
