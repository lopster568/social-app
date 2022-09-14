import Post from '../models/post.js'
import User from '../models/user.js'


//POST GET AND SETS
export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('author comments.user', 'displayName avatar')
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


export const getSavedPosts = (req, res) => {
    const user = User.findById(req.userId).populate('saved_posts', 'img')

        .exec((err, savedPosts) => {
            if (err) {
                console.log(err)
                return
            }
            const data = [...savedPosts.saved_posts]
            data.splice(9)
            res.send(data)
        })
}