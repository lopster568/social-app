import express from 'express'
import { getUser, registerUser, updateUser, loginUser } from '../controllers/user.js'
const router = express.Router()

router.get('/', getUser)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.patch('/update', updateUser)

export default router