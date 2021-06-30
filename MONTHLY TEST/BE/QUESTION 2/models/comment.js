const mongoose = require('mongoose')
const { Schema } = mongoose


const commentSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref:'post'
    },
    text: {
        type: String
    }
})


module.exports = mongoose.model('comment', commentSchema)
