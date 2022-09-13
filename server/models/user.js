import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new mongoose.Schema({
    displayName: { type: String },
    username: { type: String },
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    avatar: { type: String },
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    likes: [{
        type: Schema.Types.ObjectId, ref: 'Post'
    }],
    preferred_tags: { type: Array, default: []},
    saved_posts: [{
        type: Schema.Types.ObjectId, ref: 'Post'
    }],
    settings: {
        discoveryMode: {type: Boolean, default: true},
        relevantContent: {type: Boolean, default: true},
        privateAccount: {type: Boolean, default: false},
        shyMode: {type: Boolean, default: false}
    },
    posts: [{
        type: Schema.Types.ObjectId, ref: 'Post'
    }]
})

export default mongoose.model("User", UserSchema);
