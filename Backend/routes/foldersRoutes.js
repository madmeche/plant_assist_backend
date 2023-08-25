const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

// localhost:8080/api/users/
router.get("/", (req, res) => {
  Controllers.folderController.getFolder(res)
})

// localhost:8080/api/users/create
router.post("/create", (req, res) => {
  Controllers.folderController.createFolder(req.body, res)
  
})

// localhost:8080/api/users/:<user_id>
router.put('/:id', (req, res) => {
  Controllers.folderController.updateFolder(req, res)
})

// localhost:8080/api/users/<user_id>  
router.delete('/:id', (req, res) => {
  Controllers.folderController.deleteFolder(req, res)
})

// console.log("Router:", req.body)

module.exports = router;