import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';
import {Link, NavLink} from "react-router-dom";


class Header extends Component {

    render() {

        return (
            <div className={classes.header}>
                <ul>
                    <li><NavLink exact activeClassName="active" to="/" >Dashboard</NavLink></li>
                    <li><NavLink activeClassName="active" to="/profile">Profile</NavLink></li>
                    <li><NavLink activeClassName="active" to="/settings">Settings</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default hot(module)(Header);
