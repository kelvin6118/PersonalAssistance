const db = require('../db.config');


module.exports = class Task {
    constructor(data){
        this.taskid = data.taskid
        this.userid = data.userid;
        this.title = data.title;
        this.description = data.description;
        this.deadline = data.deadline;
    };

    static create(userData){
        return new Promise (async (resolve, reject) => {
            try {
                const { userid, title, description, deadline} = userData;
                let newTask = await db.query('INSERT INTO tasks (userid, title, description, deadline) VALUES ($1,$2,$3,$4) RETURNING *;',[userid, title, description, deadline]);
                let result = new Task(newTask.rows[0]);
                resolve (result);
                
            } catch (err) {
                console.log(err);
                reject('Task could not be created');
            }
        });
    }

    static findByUserId(userID){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM tasks WHERE userid = $1;', [ userID ]);
                let tasks = new Task(result.rows[0]);
                resolve(tasks);
            } catch (err) {
                reject('User not found!');
            }
        })
    }
};
