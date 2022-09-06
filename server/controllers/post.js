import Post from '../models/post.js'
import User from '../models/user.js'

export const getPost = (req, res) => {
    const postId = req.params.id
    Post.findById(postId, (err, post) => {
        res.send(post)
    })
}
export const getAllPosts = (req, res) => {
    Post.find({}).populate('author', 'displayName avatar').exec((err, posts) => {
        res.send(posts)
    })
}
export const createPost = (req, res) => {
    const newPost = {
        caption: req.body.caption,
        img: req.body.img,
        author: req.userId._id
    }
    Post.create(newPost, (err, post) => {
        if (err) {
            console.log(err)
            return
        }
        post.author = req.userId
        post.save((err, foundPost) => {
            if (!err)
                User.findById(req.userId._id, (err, user) => {
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

export const likePost = async (req, res) => {
    if (!req.userId) return res.json({ message: "NO USER" })
    const postId = req.params.id
    const post = await Post.findById(postId)

    const index =  post.likes.findIndex(id => id.toString() === req.userId)
    if (index === -1) {
        post.likes.push(req.userId)
        post.save((err, post) => {
            if (err) {
                console.log(err)
                return
            }
        })
    } else {
        post.likes = post.likes.filter(id => id.toString() !== req.userId)
        post.save((err, post) => {
            if (err) {
                console.log(err)
                return
            }
        })
    }
}

export const commentPost = (req, res) => {
    const postId = req.params.id
    Post.findById(postId, (err, post) => {
        if (err) {
            console.log(err)
            return
        }
        post.comments.push({
            user: req.userId,
            comment: req.body.comment
        })
        post.save();
    })
}

export const deletePost = (req, res) => {
    const postId = req.params.id
    const userId = req.userId._id
    // /AndDelete
    Post.findById(postId, (err, deletedPost) => {
        if (err) {
            console.log(err)
            return
        }
        User.findById(req.userId._id, (err, user) => {
            if (!err) {
                const filteredPosts = user.posts.filter(post => post != postId)
                user.posts = filteredPosts
                user.save((err, savedUser) => {
                    if (!err) {
                        res.send(savedUser)
                        return
                    }
                    console.log(err)
                })
                return
            }
            console.log(err)
        })
    })
}

export const updatePost = (req, res) => {
    res.send("Post Updated")
}
