import Post from '../models/post.js'
import User from '../models/user.js'

export const getPost = (req, res) => {
    const postId = req.params.id
    Post.findById(postId, (err, post) => {
        res.send(post)
    })
}
export const getAllPosts = (req, res) => {
    Post.find({}).populate('author comments.user', 'displayName avatar').exec((err, posts) => {
        res.send(posts)
    })
}
export const createPost = (req, res) => {
    const tags = (req.body.tags.split(" ").join("")).split(",")
    const newPost = {
        caption: req.body.caption,
        img: req.body.img,
        author: req.userId,
        tags
    }
    Post.create(newPost, (err, post) => {
        if (err) {
            console.log(err)
            return
        }
        post.save((err, foundPost) => {
            if (!err)
                User.findById(req.userId, (err, user) => {
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

export const savePost = (req, res) => {
    const postId = req.params.id
    Post.findById(postId, (err, post) => {
        if (err) {
            console.log(err)
            return
        }
        User.findById(req.userId, (err, user) => {
            if (err) {
                console.log(err)
                return
            }
            const index = user.saved_posts.findIndex(id => id.toString() === postId)
            if (index === -1) {
                user.saved_posts.push(post)
                user.save((err) => {
                    if (!err)
                        res.send("POST SAVED")
                })
            } else {
                res.send("POST ALREADY SAVED")
            }
        })
    })
}

export const likePost = async (req, res) => {
    if (!req.userId) return res.json({ message: "NO USER" })
    const postId = req.params.id
    const post = await Post.findById(postId)

    const index = post.likes.findIndex(id => id.toString() === req.userId)
    if (index === -1) {
        post.likes.push(req.userId)
        User.findById(req.userId, (err, user) => {
            let tagIndex = null
            post.tags.forEach(e => {
                tagIndex = user.preferred_tags.findIndex(tag => e === tag)
                
                if (tagIndex === -1) {
                    console.log(tagIndex)
                    user.preferred_tags.push(e)
                }
            })
            user.save((err, userSaved) => {
                if (err) {
                    console.log(err)
                }
                console.log(userSaved)
            })
        })
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
        User.findById(req.userId, (err, user) => {
            if (err) {
                console.log(err)
                return
            }
            post.comments.push({
                user: user,
                comment: req.body.comment
            })
            post.save((err, post) => {
                if (err) {
                    res.send(err.message)
                    return
                }
                res.send("Comment Added")
            });
        })
    })
}

export const deletePost = (req, res) => {
    const postId = req.params.id
    Post.findByIdAndDelete(postId, (err, deletedPost) => {
        if (err) {
            console.log(err)
            return
        }
        User.findById(req.userId, (err, user) => {
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

export const getSavedPosts = (req, res) => {
    const userId = req.userId
    User.findById(userId).populate('saved_posts', 'img').exec((err, savedPosts) => {
        if (err) {
            console.log(err)
            return
        }
        const data = [...savedPosts.saved_posts]
        data.splice(9)
        res.send(data)
    })
}

export const updatePost = (req, res) => {
    res.send("Post Updated")
}



// export const seedPOSTS = (req, res) => {
//     POSTSSEED.forEach(e => {
//         Post.create(e, (err, post) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log("POST CREATED")
//         })
//     }, () => res.send("DONE"))
// }