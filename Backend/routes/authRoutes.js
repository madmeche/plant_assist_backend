const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

//localhost:8080/api/auth/signup  **even after deleting users 2 and 3, new user id starts at 4
router.post("/signup", (req, res) => {
  Controllers.authController.signUpUser(req.body, res)
})

//localhost:8080/api/auth/login
router.post("/login", (req, res) => {
  Controllers.authController.loginUserByEmail(req.body, res)
})

module.exports = router;