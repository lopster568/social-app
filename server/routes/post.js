
import express from 'express'
import { createPost, deletePost, updatePost, getPost, getAllPosts, likePost, commentPost, savePost, getSavedPosts } from '../controllers/post.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getAllPosts)
router.get('/:id', getPost)

router.post('/', auth, createPost)

// UPDATE ROUTES 
router.patch('/:id/like/', auth, likePost)
router.patch('/:id/comment', auth, commentPost)
router.post('/:id/save', auth, savePost)
router.patch('/:id', auth, updatePost)

router.delete('/:id', auth, deletePost)
router.post("/saved", auth, getSavedPosts)
// router.post('/seed', seedPOSTS )


export default router
