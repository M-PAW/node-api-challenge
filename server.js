const express = require('express');
const actionRouter = require('./actionRouter');
const projectRouter = require('./projectRouter');
const server = express();

server.use(logger);
server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);


server.get('/', (req, res) => {
  res.send(`<h2></h2>`);
});

//custom middleware

function logger(req, res, next) {

  const method = req.method;
  const endpoint = req.originalUrl;
  console.log(`[${new Date().toISOString()}] ${method} to ${endpoint}`);

  next();
}

module.exports = server;