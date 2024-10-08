const express = require('express')
const router = express.Router()
const controllers = require('../controllers/index')

router.post('/insert', controllers.userController.insert)
router.get('/getRecord', controllers.userController.getRecord)
router.put('/updateSome', controllers.userController.updateSomeRecord)
router.patch('/updateAll', controllers.userController.updateAllRecord)
router.delete('/delete', controllers.userController.deleteRecord)

module.exports = router