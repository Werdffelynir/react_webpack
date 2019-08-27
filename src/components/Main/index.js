import React, { Component } from "react";
import { hot } from 'react-hot-loader';
// import {connect, Provider} from "react-redux";
import classes from './style.scss';
// import TasksList from "../List/TasksList";
// import store from "../../store";
// import { addTask, deleteTask } from "../../actions";
import classNames from "classnames";
// import Header from "../Header";
// import List from "../List";


class Main extends Component {

    componentDidMount() { }

    render() {

        const  {state, tasks, length, addTask, deleteTask, updateTask} = this.props;

        const onTaskAdd = (e) => {
            addTask({ text: 'React Redux Tutorial for Beginners', id: 1 });
        };

        const onTaskRemove = (e) => {
            deleteTask({ id: 1 })
        };

        const ButtonTaskAdd = <div className={classNames('button',  classes.button)} onClick={onTaskAdd}>Add task</div>;
        const ButtonTaskRemove = <div className={classNames('button', classes.button)} onClick={onTaskRemove}>Remove task</div>;

        return (
            <div className={classes.text}>

                <div>
                    {length}
                    {ButtonTaskAdd}
                    {ButtonTaskRemove}
                </div>

            </div>
        );
    }
}

export default Main;
