import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";


class Dashboard extends Component {
    render() {
        const children = this.props.children;

        return (
            <div className={classes.table}>

                <div className={classes.sidebar}>
                    <Sidebar />
                </div>

                <div>
                    <div className={classes.table}>
                        <Header />
                    </div>

                    <div className={classes.table}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(Dashboard);
