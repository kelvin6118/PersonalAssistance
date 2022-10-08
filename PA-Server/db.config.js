const { Pool } = require('pg');


const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB, 
    password: process.env.PASS, 
    port: process.env.DB_PORT,
    ssl: true,
});


module.exports = pool;
