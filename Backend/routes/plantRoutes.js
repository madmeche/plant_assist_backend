const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')


//** SHOULD THIS BE CRUD OPERATION IF PULLING FROM ELSEWHERE? */
// SHOULD THIS ONLY BE A GET REQUEST?


// localhost:8080/api/plant/
router.get("/", (req, res) => {
    // console.log("Router:", res.body)
  Controllers.plantController.getPlant(res)
})

// localhost:8080/api/plant/:<user_id>
router.get("/:id", (req, res) => {
    // console.log("Router:", req.body)
  Controllers.plantController.getPlantById(req, res)
})

// localhost:8080/api/plant/create
router.post("/create", (req, res) => {
  Controllers.plantController.createPlant(req.body, res)
})

// localhost:8080/api/plant/:<user_id>
router.put('/:id', (req, res) => {
  Controllers.plantController.updateplant(req, res)
})

// localhost:8080/api/plant/:<user_id>
router.delete('/:id', (req, res) => {
  Controllers.plantController.deleteplant(req, res)
})

// router.get("/name", (req, res) => {
//     Controllers.plantController.getPlantByName(req, res)
// }) 


// // localhost:8080/api/plant/create
// router.post("/create", (req, res) => {
//     // console.log("Plant:", req.body)
//   Controllers.plantController.createPlant(req.body, res)
  
// })

// // localhost:8080/api/plant/<plant_id> 
// router.put('/:id', (req, res) => {
//     // console.log(":", req.body)
//   Controllers.plantController.updatePlant(req, res)
// })

// // localhost:8080/api/plant/<plant_id>  
// router.delete('/:id', (req, res) => {
//     // console.log("Plant:", req.body)
//   Controllers.plantController.deletePlant(req, res)
// })


module.exports = router;