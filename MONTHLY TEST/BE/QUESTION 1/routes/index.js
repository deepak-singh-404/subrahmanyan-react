const express = require('express')
const router = express.Router()
const passport = require('passport')

const {createPost, userLogin, userRegister, getPosts} = require('../controllers/index')


router.post('/register', userRegister) 
router.post('/login', userLogin)
router.get('/post',passport.authenticate('jwt', { session: false }), createPost)
router.get('/posts',passport.authenticate('jwt', { session: false }), getPosts)


module.exports = router