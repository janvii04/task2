const Models = require('../models/index')

module.exports = {

    insert: async(req, res)=>{
        try {        
console.log("req.body0=",req.body)
            let objToSave = {
                name: req.body.name,
                email: req.body.email,
                gender: req.body.gender,
                age: req.body.age
            }
            let response = await Models.userModel.create(objToSave)
            return res.status(201).send(response)
            
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    getRecord: async(req, res)=>{
        try {
            let result = await Models.userModel.findAll()
            return res.send(result)
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    updateSomeRecord : async(req, res)=>{
        try {
            await Models.userModel.update({name: req.body.name}, {where: {id: req.body.id}})
            let response = await Models.userModel.findOne({where: {id: req.body.id}, raw: true})
            return res.send(response)
        } catch (error) {
            console.log(error)
            throw error
        }
    }, 

    updateAllRecord : async(req, res)=>{
        try {
            await Models.userModel.update({name: req.body.name}, {where: {id: req.body.id}})
            let response = await Models.userModel.findOne({where: {id: req.body.id}, raw: true})
            return res.send(response)
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    deleteRecord: async(req, res)=>{
        try {
            await Models.userModel.destroy({where: {id: req.body.id}})
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    
    getResult:async(req,res)=>{
        try {
            
        } catch (error) {
            
        }
    }

}