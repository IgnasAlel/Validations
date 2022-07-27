const express = require('express')
const router = express.Router()
const {sendInfo, createPost, getUsers, addUser} = require('../controllers/mainController')
const {validatePost, validateUser} = require('../middleware/validations')
router.post('/sendInfo', sendInfo)
router.post('/createPost',validatePost, createPost)
router.post('/addUser', validateUser, addUser)


module.exports = router