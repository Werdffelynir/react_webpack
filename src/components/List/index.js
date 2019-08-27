import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import {connect, Provider} from "react-redux";
import classes from './style.scss';


class List extends Component {

    componentDidMount() {}

    createListItems (tasks) {
        return (
            <ul className="list-group">{tasks.map(el =>
                (<li className="list-item" key={el.id}>{el.text}</li>)
            )}</ul>
        )
    }

    render() {
        const  {tasks, length} = this.props;

        return (
            <div>

                <h2>List, {length}</h2>

                { this.createListItems(tasks) }

            </div>
        )
    }
}


export default List;
