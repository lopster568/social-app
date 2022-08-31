import mongoose from 'mongoose'
const { Schema } = mongoose
import passportLocalMongoose from 'passport-local-mongoose'

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
    posts: [{
        type: Schema.Types.ObjectId, ref: 'Post'
    }],
})

UserSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

export default mongoose.model("User", UserSchema);
