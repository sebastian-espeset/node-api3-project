const express = require('express');
const Users = require('./users-model');
const router = express.Router();
const {validateUserId, validateUser}= require('../middleware/middleware')

router.get('/', (req, res) => {
  Users.get()
    .then(user=>{
      res.status(200).json(user)
    })
    .catch(error=>{
      res.status(500).json({message:`Server error:${error}`})
    })
});
//apply middleware here
router.get('/:id',validateUserId, (req, res) => {
  res.status(200).json(req.user)
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router

module.exports= router;