import express from 'express'
import { getUser, registerUser, updateUser, loginUser } from '../controllers/user.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getUser)
router.post('/signup', registerUser)
router.post('/login', loginUser)
router.patch('/update', auth, updateUser)

export default router