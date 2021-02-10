const express = require('express');

const server = express();
const postsRouter = require('./posts/posts-router');
const usersRouter = require('./users/users-router');
const {logger} = require('./middleware/middleware');
// remember express by default cannot parse JSON in request bodies

server.use(express.json());
server.use('/api/posts', postsRouter);
server.use('/api/users', usersRouter);

// global middlewares and routes need to be connected here

server.get('/', logger,  (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});





module.exports = server;
