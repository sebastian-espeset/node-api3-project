const express = require('express');
const Posts = require('./posts-model')
const router = express.Router();

router.get('/', (req, res) => {
    Posts.get()
      .then((posts)=>{
        res.status(200).json(posts)
      }) .catch(error=>{
        res.status(404).json({message:`Bad call: ${error}`})
      })
});

router.get('/:id', (req, res) => {
  
});

// do not forget to export the router
module.exports = router;