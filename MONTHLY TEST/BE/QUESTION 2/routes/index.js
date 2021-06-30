const express = require('express')
const router = express.Router()

const {createPost, createComment, getPosts, getSinglePost,
     getComments, getSingleComment} = require('../controllers/index')


router.post('/post', createPost)

router.get('/post', getPosts)

router.get('/post/:postId', getSinglePost)

router.post('/comment', createComment)

router.get('/comment', getComments)

router.get('/comment/:commentId', getSingleComment)

module.exports = router