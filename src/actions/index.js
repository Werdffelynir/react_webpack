import {ADD_TASK, DELETE_TASK, SAVE_TASKS, UPDATE_TASK} from "./types";


export function addTask(payload) {
    return { type: ADD_TASK, payload };
}

export function saveTasks(payload) {
    return { type: SAVE_TASKS, payload };
}

export function deleteTask(payload) {
    return { type: DELETE_TASK, payload };
}

export function updateTask(payload) {
    return { type: UPDATE_TASK, payload };
}
