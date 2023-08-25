const Models = require('../models')

const getRecent = (res) => {
  
  Models.Recent.findAll({})

    .then((data) => {
      res.send({result: 200, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}

const createRecent = async (data, res) => {
    
    Models.Recent.create(data)
   
      .then((data) => {
        res.status(201).json({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  const updateRecent = (req, res) => {
    console.log("Controller:", req.body)
    Models.Recent.update(req.body, { where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  const deleteRecent = (req, res) => {
    console.log("Controller:", req.body)
    Models.Recent.destroy( {where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  module.exports = {
    getRecent, createRecent, updateRecent, deleteRecent
  }

