

const Database = {
    "data":[
        {"id":1, "text":"Project #1", "start_date":"01-04-2018", "duration":"20", "order":"0"},
        {"id":2, "text":"Task #1", "start_date":"01-04-2018", "duration":"8", "order":"1", "parent_id":"1"},
        {"id":3, "text":"Task #2", "start_date":"02-04-2018", "duration":"10", "order":"2", "parent_id":"1"},
        {"id":4, "text":"Task #3", "start_date":"12-04-2018", "duration":"5", "order":"3", "parent_id":"3"}
    ],
    "links":[
        {"id":"1","source":"3","target":"4","type":"0"}
    ]
};

export default Database;
