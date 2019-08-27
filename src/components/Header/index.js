import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';


class Header extends Component {

    render() {

        return (
            <div className={classes.header}>
                <h1>{this.props.title}</h1>
                <span>{this.props.description}</span>
            </div>
        );
    }
}

export default hot(module)(Header);
