const db = require('../db.config');


module.exports = class User {
    constructor(data){
        this.userid = data.userid;
        this.username = data.username;
        this.password = data.password;
        this.email = data.email;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                console.log('query all user');
                const result = await db.query('SELECT * FROM users;')
                const users = result.rows.map(u => ({ id: u.id, username:u.username, password:u.password, email: u.email }));
                resolve(users);
            } catch (err) {
                reject("Error getting users")
            }
        })
    };

    static create(userData){
        return new Promise (async (resolve, reject) => {
            try {
                console.log('create user')
                const { username, password, email} = userData;
                let newUser = await db.query('INSERT INTO users (username, password, email) VALUES ($1,$2,$3) RETURNING *;',[username, password, email]);
                let result = new User(newUser.rows[0]);
                console.log('created')
                resolve (result);
                
            } catch (err) {
                console.log(err);
                reject('User could not be created');
            }
        });
    };

    static findByUser(username){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM users WHERE username = $1;', [ username ]);
                let user = new User(result.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found!');
            }
        })
    }

}
