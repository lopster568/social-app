import Post from '../models/post.js'
import User from '../models/user.js'


//POST GET AND SETS
export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'displayName avatar')
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).sort({'createdAt': -1}).populate('author comments.user', 'displayName avatar')
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

export const getPostByUser = async (req, res) => {
    try {
        const posts = await Post.find({ author: req.params.id }).populate('author comments.user', 'displayName avatar')
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createPost = async (req, res) => {
    const newPost = {
        caption: req.body.caption,
        img: req.body.img,
        author: req.userId,
        tags: (req.body.tags.split(" ").join("")).split(",")
    }
    try {
        await Post.create(newPost)
        const user = await User.findById(req.userId)
        user.posts.push(foundPost)
        const savedPost = await user.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


export const getSavedPosts = async (req, res) => {
    try {
        const user = await User.findById(req.userId).populate('saved_posts', 'img')
        const savedPosts = [...user.saved_posts]
        savedPosts.splice(9)
        res.status(200).json(savedPosts)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }

}

export const getFollowingPosts = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        const posts = await Post.find({ author: { $in: user.following } }).sort({'createdAt': -1}).populate('author comments.user', 'displayName avatar')
        res.status(200).json(posts)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

//GET TRENDING TAGS
//SORT POSTS BY MOST LIKED SLICE TO 10 POSTS 
//EXTRACT TAGS AND RENDER