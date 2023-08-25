const Models = require('../models')

const getFolder = (res) => {
  Models.Folder.findAll({})
    .then((data) => {
      // Do NOT return passwords
      // Remove the password key before returning
      // Either through Javascript, OR through scope attribute, see: /models/user.js Line #45
      // for(const user in data){
      //   data[user].password = undefined //The Javascript way of removing a property.key
      // }
      res.send({result: 200, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}

const createFolder = async (data, res) => {
    
    Models.Folder.create(data)
   
      .then((data) => {
        res.status(201).json({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  const updateFolder = (req, res) => {
    console.log("Controller:", req.body)
    Models.Folder.update(req.body, { where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  const deleteFolder = (req, res) => {
    console.log("Controller:", req.body)
    Models.Folder.destroy( {where: {id: req.params.id}})
      .then((data) => {
        res.send({result: 201, data: data})
      })
      .catch(err => {
        console.log("Error:", err)
        throw err
      })
  }
  
  module.exports = {
    getFolder, createFolder, updateFolder, deleteFolder
  }

