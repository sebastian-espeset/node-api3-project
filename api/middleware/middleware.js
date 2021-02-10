//import the models
const Users = require('../users/users-model');
const Posts = require ('../posts/posts-model');

//logger will global middleware, every interaction with the server will do this
function logger(req, res, next) {
  const timeStamp = new Date().toLocaleString();
  console.log(req.method,req.url,timeStamp)
  next();
}

const validateUserId = async (req, res, next)=> {
  const userId = req.params.id;
    try{
      let user = await Users.getById(userId)
      if(!user){
        res.status(400).json({message:`user not found`})
      } else{
       req.user = user;
       next();
      }
    } catch(error){
      res.status(500).json({message:`server error: ${error}`})
    }

}

function validateUser(req, res, next) {
 if(!req.body){
    res.status(400).json({message:`missing user data`})
 } else if(!req.body.name){
    res.status(400).json({message:`missing required name field`})
 }
 next();
}

function validatePost(req, res, next) {
  if(!req.body){
    res.status(400).json({message:`missing post data`})
  } else if(!req.body.text){
    res.status(400).json({message:`missing required text field`})
  } next();
}

// do not forget to expose these functions to other modules
module.exports={
  logger,
  validateUserId,
  validateUser,
  validatePost,
}