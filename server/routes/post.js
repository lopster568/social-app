import express from 'express'
import { createPost, deletePost, updatePost, getPost, getAllPosts, likePost, commentPost } from '../controllers/post.js'
const router = express.Router()

router.get('/', getAllPosts)
router.get('/:id', getPost)

router.post('/', createPost)

// UPDATE ROUTES 
router.patch('/:id/like/', likePost)
router.patch('/:id/comment', commentPost)
router.patch('/:id', updatePost)

router.delete('/:id', deletePost)


export default router
