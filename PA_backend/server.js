const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

server.use(bodyParser.json())
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

server.get('/', (req, res) => res.send('Welcome to Personal Assistant 😊'))


module.exports = server
