import mongoose from 'mongoose'
const { Schema } = mongoose

const PostSchema = new mongoose.Schema({
    caption: { type: String, required: true },
    img: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    likes: [{
         type: Schema.Types.ObjectId, ref: 'User'
    }],
    comments: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        comment: String
    }]
})

export default mongoose.model("Post", PostSchema);