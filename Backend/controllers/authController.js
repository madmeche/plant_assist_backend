'use strict'

const bcrypt = require('bcrypt')

// Even though this is a controller for auth, we can still use the model for User
const Models = require('../models')


// This is the same as the createUser function; however, this is the one that should be used for user sign up through the auth route
// See /controllers/userController.js
const signUpUser = async (data, res) => {
  // Bcrypt documentation: https://www.npmjs.com/package/bcrypt
  // Generate a salt, define the rounds, optional: define version ("a", or "b") default: "b"
  const rounds = 10 //any more than 10 will take exponentially more CPU power
  const version = "a"
  const salt = await bcrypt.genSaltSync(rounds, version);
  const originalPassword = data.password
  const hashedPassword = bcrypt.hashSync(originalPassword, salt);

  // Update data.password to the new hashed password BEFORE storing it in the database
  data.password = hashedPassword;
  
  Models.User.create(data)
    .then((data) => {
      // We NEVER want to send the hashed password back, EVER
      // Reset the password back to the originalPassword before returning
      data.password = originalPassword;
      res.send({result: 201, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}



const loginUserByEmail = (data, res) => {
  const unhashedPassword = data.password
  const email = data.email


  Models.User.scope("withPassword").findAll({ where: {email: email}})
    .then((data) => {
   //if user is found
   if(data.length > 0) {
    
    if(data && bcrypt.compareSync(unhashedPassword, data[0].dataValues.password)){
      data[0].dataValues.password = undefined //removes the key from the response
      res.status(200).send({ success: true, data: data})
    } else {
      console.log('password is incorrect')
      res.status(403).send({ success: false, data: "Wrong username or password!"})
    }
  } else {
    res.status(403).send({ success: false, data: "Wrong username or password!"})
    //user is not found
  }
  
})
.catch(err => {
  console.log("Error:", err)
  throw err
})
}

module.exports = {
  signUpUser, 
  loginUserByEmail
}