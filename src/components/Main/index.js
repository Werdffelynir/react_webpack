import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';


class Main extends Component {
    render() {

        return (
            <div className={classes.text}>

                <h2>Page Main</h2>
                <p>Dashboard charts</p>

            </div>
        );
    }
}

export default hot(module)(Main);
