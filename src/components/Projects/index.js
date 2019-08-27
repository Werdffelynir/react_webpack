import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import classes from './style.scss';


class Projects extends Component {
    render() {

        const { url } = this.props.match;
        const { id } = this.props.match.params;

        let view = <h2>Projects list</h2>;

        if (id) {
            view = (<div>
                        <h2>Project ID {id}</h2>
                        <p><strong>Selected project {url}</strong></p>
                    </div>)
        }

        return (
            <div className={classes.text}>
                {view}
            </div>
        );
    }
}

export default hot(module)(Projects);
