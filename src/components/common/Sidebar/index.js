import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';
import {Link, NavLink} from "react-router-dom";


class Sidebar extends Component {

    render() {

        return (
            <div className={classes.sidebar}>

                <div className={classes.sidebarLogo}>
                    <h1>LOGO</h1>
                </div>

                <hr/>

                <ul className={classes.sidebarMenu}>
                    <li><NavLink activeClassName="active" to="/projects">Projects </NavLink></li>
                    <ul>
                        <li><NavLink activeClassName="active" to="/project/1">Project 1 </NavLink></li>
                        <li><NavLink activeClassName="active" to="/project/2">Project 2 </NavLink></li>
                        <li><NavLink activeClassName="active" to="/project/3">Project 3 </NavLink></li>
                        <li><NavLink activeClassName="active" to="/project/4">Project 4 </NavLink></li>
                        <li><NavLink activeClassName="active" to="/project/5">Project 5 </NavLink></li>
                    </ul>
                </ul>

            </div>
        );
    }
}

export default hot(module)(Sidebar);
