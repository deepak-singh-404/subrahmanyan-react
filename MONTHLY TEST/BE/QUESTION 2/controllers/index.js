const Post = require('../models/post')
const Comment = require('../models/comment')


module.exports = {
    createPost: async (req, res) => {
        try {
            const { title, content } = req.body
            console.log("req", req.body)
            const post = await new Post({
                title,
                content
            })
            await post.save()
            
            return res.status(201).json({ message: "Post created successfully", success: true, response: post })
        }
        catch (err) {
            return res.status(500).json({ message: "Some error occured", success: false, error: err })
        }
    },
    createComment: async (req, res) => {
        try {
            const { text, postId } = req.body
            const comment = await new Comment({
                text,
                postId
            })
            await comment.save()
            const post = await Post.findById(postId)
            post.comments.push(comment._id)
            await post.save()
            return res.status(201).json({ message: "Comment created successfully", success: true, response: comment })
        }
        catch (err) {
            return res.status(500).json({ message: "Some error occured", success: false, error: err })
        }
    },
    getSinglePost: async (req, res) => {
        try {
            const { postId } = req.params
            const post = await Post.findById(postId).populate('comments')
            return res.status(200).json({ message: "Post fetched successfully", success: true, response: post })
        }
        catch (err) {
            return res.status(500).json({ message: "Some error occured", status: false, error: err })
        }
    },
    getPosts: async (req, res) => {
        try {
            const posts = await Post.find({}).populate('comments')
            return res.status(200).json({ message: "All Post fetched successfully", success: true, response: posts })
        }
        catch (err) {
            return res.status(500).json({ message: "Some error occured", status: false, error: err })
        }
    },
    getSingleComment: async (req, res) => {
        try {
            const { commentId } = req.params
            const comment = await Comment.findById(commentId).populate('postId')
            return res.status(200).json({ message: "Comment fetched successfully", success: true, response: comment })
        }
        catch (err) {
            return res.status(500).json({ message: "Some error occured", status: false, error: err })
        }
    },
    getComments: async (req, res) => {
        try {
            const comments = await Comment.find({}).populate('postId')
            return res.status(200).json({ message: "All Comments fetched successfully", success: true, response: comments })
        }
        catch (err) {
            return res.status(500).json({ message: "Some error occured", status: false, error: err })
        }
    },
}