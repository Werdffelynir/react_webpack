
const Entry = {
    id: 0,
    text: 'Default name',
    start_date: new Date(),
    duration: 0,
    order: 0,
    parent_id: 0,
};

class Task {

    constructor(task = Entry) {
        Object.keys(Entry).forEach((key) => {
            let value = task[key] === undefined ? Entry[key] : task[key];

            if ( key === 'start_date' && !(value instanceof Date) )
                value = new Date(value);

            this[key] = value;
        });
    }

    data() {
        return Object.assign({}, this);
    }
}


export default Task;
