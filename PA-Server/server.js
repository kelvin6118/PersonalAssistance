const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const server = express();
require('dotenv').config();

const userRoutes = require('./routes/usersRoutes');
const newTaskEventRoute = require('./routes/newTaskEventRoute');
const eventRoute = require('./routes/eventsRoutes');
const taskRoute = require('./routes/tasksRoutes');

server.use(cors());
server.use(express.json());

server.use('/user', userRoutes);
server.use('/create', newTaskEventRoute);
server.use('/event', eventRoute);
server.use('/task', taskRoute);


server.get('/', (req, res) => res.send('Welcome to Personal Assistant 😊'))


module.exports = server
