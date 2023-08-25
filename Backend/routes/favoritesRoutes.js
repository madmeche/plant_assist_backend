const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

// localhost:8080/api/users/
router.get("/", (req, res) => {
  Controllers.favoriteController.getFavorite(res)
})

// localhost:8080/api/users/create
router.post("/create", (req, res) => {
  Controllers.favoriteController.createFavorite(req.body, res)
  
})

// localhost:8080/api/users/:<user_id>
router.put('/:id', (req, res) => {
  Controllers.favoriteController.updateFavorite(req, res)
})

// localhost:8080/api/users/<user_id>  
router.delete('/:id', (req, res) => {
  Controllers.favoriteController.deleteFavorites(req, res)
})

// console.log("Router:", req.body)

module.exports = router;