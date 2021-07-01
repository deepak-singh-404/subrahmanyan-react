const mongoose = require('mongoose')
const { Schema } = mongoose


const postSchema = new Schema({
    userId:{
        type: Number
    },
    id:{
        type: String
    },
    body:{
        type: String
    },
    title: {
        type: String
    }
})


module.exports = mongoose.model('post', postSchema)
