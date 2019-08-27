import React, { Component } from "react";
import classes from './style.scss';
import classNames from "classnames";


class Editor extends Component {

    componentDidMount() { }

    render() {

        const  {tasks, length, addTask, deleteTask, updateTask} = this.props;

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

export default Editor;
