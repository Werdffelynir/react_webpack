import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';


class Profile extends Component {
    render() {

        return (
            <div className={classes.text}>
                <h2>User Profile</h2>
            </div>
        );
    }
}

export default hot(module)(Profile);
