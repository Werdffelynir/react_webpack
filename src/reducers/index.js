import {ADD_TASK, DELETE_TASK, UPDATE_TASK} from "../actions/types";
import Database from "../models/database";
import Task from "../models/Task";


class DefaultState {

    constructor () {

        this.dataset = {
            data: Database.data,
            links: Database.links,
        };
        this.ui = {
            topmenu: false,
            sidebar: false,
            tooltip: false,
        };
        this.config = {
            appTitle: 'Dashboard Application',
            appDescription: 'Application description',
            appUrl: '',
        };
    }

}


const reducer = (state = new DefaultState, action) => {

    switch (action.type) {

        case ADD_TASK:
            const task = new Task(action.payload);
            task.id = state.dataset.data.length + 1;

            return { ...state, dataset: { data: [...state.dataset.data, task], links: state.dataset.links } };


        case DELETE_TASK:
            state.dataset.data.pop();
            return { ...state, dataset: { data: [...state.dataset.data], links: state.dataset.links } }

        case UPDATE_TASK :
            return Object.assign({}, state, {
                data: state.data ? state.data.concat(action.payload) : []
            });

        default:
            return state;
    }

};


export default reducer;
