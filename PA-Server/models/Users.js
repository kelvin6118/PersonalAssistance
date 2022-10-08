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

}
