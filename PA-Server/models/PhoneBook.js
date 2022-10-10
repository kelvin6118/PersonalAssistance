const db = require('../db.config');


module.exports = class PhoneBook {
    constructor(data){
        this.id = data.id
        this.userid = data.userid;
        this.title = data.title;
        this.name = data.name;
        this.phone = data.phone;
        this.email = data.email;
    };

    static create(userData){
        return new Promise (async (resolve, reject) => {
            try {
                const { userid, name, title, phone, email} = userData;
                let newContact = await db.query('INSERT INTO tasks (userid, name, title, phone) VALUES ($1,$2,$3,$4,$5) RETURNING *;',[userid, name, title, phone, email]);
                let result = new PhoneBook(newContact.rows[0]);
                resolve (result);
                
            } catch (err) {
                console.log(err);
                reject('New contact could not be created');
            }
        });
    }

    static findByUserId(userID){
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM phonebook WHERE userid = $1;', [ userID ]);
                let contacts = result.rows.map(t => ({
                    ...new PhoneBook(t)
                }))
                resolve(contacts);
            } catch (err) {
                reject('contacts not found!');
            }
        })
    }
};
