const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

// localhost:8080/api/users/
router.get("/", (req, res) => {
    console.log("Router:", res.body)
  Controllers.userController.getUsers(res)
})

// localhost:8080/api/users/:<user_id>
router.get("/:id", (req, res) => {
    console.log("Router:", req.body)
  Controllers.userController.getUsersById(req, res)
})

// // localhost:8080/api/users/create
// router.post("/register", (req, res) => {
//     console.log("Router:", req.body)
//   Controllers.userController.createUsers(req.body, res)
  
// })

// localhost:8080/api/users/login  ** use get, not post
router.post("/login", (req, res) => {
    console.log("Router:", req.body)
  Controllers.userController.getUsersByEmail(req, res)
})

// localhost:8080/api/users/:<user_id>
router.put('/:id', (req, res) => {
    console.log("Router:", req.body)
  Controllers.userController.updateUser(req, res)
})

// localhost:8080/api/users/<user_id>  **Had to get rid of the colon for the delete to work
router.delete('/:id', (req, res) => {
    console.log("Router:", req.body)
  Controllers.userController.deleteUser(req, res)
})

// console.log("Router:", req.body)

module.exports = router;