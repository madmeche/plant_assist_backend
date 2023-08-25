const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

// localhost:8080/api/recent/
router.get("/", (req, res) => {
  Controllers.recentController.getRecent(res)
})

// localhost:8080/api/users/create
router.post("/create", (req, res) => {
  Controllers.recentController.createRecent(req.body, res)
  
})

// localhost:8080/api/users/:<user_id>
router.put('/:id', (req, res) => {
  Controllers.recentController.updateRecents(req, res)
})

// localhost:8080/api/users/<user_id>  
router.delete('/:id', (req, res) => {
  Controllers.recentController.deleteRecent(req, res)
})

// console.log("Router:", req.body)

module.exports = router;
