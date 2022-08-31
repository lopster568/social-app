import mongoose from 'mongoose'
import Post from '../models/post.js'
import User from '../models/user.js'

export const getPost = (req, res) => {
    const postId = req.params.id
    Post.findById(postId, (err, post) => {
        res.send(post)
    })
}
export const getAllPosts = (req, res) => {
    Post.find({}, (err, posts) => {
        res.send(posts)
    })
}
export const createPost = (req, res) => {
    const newPost = {
        caption: req.body.caption,
        img: req.body.img
    }
    Post.create(newPost, (err, post) => {
        if (err) {
            console.log(err)
            return
        }
        post.author = req.user
        post.save((err, foundPost) => {
            if (!err)
                User.findById(req.user._id, (err, user) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    user.posts.push(foundPost)
                    user.save((err) => {
                        if (!err)
                            res.send("POST CREATED")
                    })
                })
        });
    })
}
export const likePost = (req, res) => {
    const postId = req.params.id
    Post.findById(postId, (err, post) => {
        if (err) {
            console.log(err)
            return
        }
        post.likes.push(req.user)
        post.save((err) => {
            if (!err)
                User.findById(req.user._id, (err, user) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    user.likes.push(post)
                    user.save((err) => {
                        if (!err)
                            res.send("Like Added")
                    })
                })
        });
    })
}
export const commentPost = (req, res) => {
    const postId = req.params.id
    Post.findById(postId, (err, post) => {
        if (err) {
            console.log(err)
            return
        }
        post.comments.push({
            user: req.user,
            comment: req.body.comment
        })
        post.save();
    })
}
export const deletePost = (req, res) => {
    const postId = req.params.id
    Post.findByIdAndDelete(postId, (err, deletedPost) => {
        if (err) {
            console.log(err)
            return
        }
        res.send("DELETED")
    })
}
export const updatePost = (req, res) => {
    res.send("Post Updated")
}
