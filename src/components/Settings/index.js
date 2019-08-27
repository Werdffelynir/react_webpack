import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';


class Settings extends Component {
    render() {

        return (
            <div className={classes.text}>
                <h2>User Settings</h2>
            </div>
        );
    }
}

export default hot(module)(Settings);
