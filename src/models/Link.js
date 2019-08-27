
const Entry = {
    id: 0,
    source: 0,
    target: 0,
    type: 0,
};

class Link {

    constructor(data = Entry) {
        Object.keys(data).forEach((key) => {
            let value = data[key] === undefined ? Entry[key] : data[key];
            this[key] = value;
        });
    }
}


export default Link;
