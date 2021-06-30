const mongoose = require('mongoose')
const { Schema } = mongoose


const postSchema = new Schema({
    title:{
        type: String
    },
    content:{
        type: String
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref:'comment'
    }]
})


module.exports = mongoose.model('post', postSchema)
