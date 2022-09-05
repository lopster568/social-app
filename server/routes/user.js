import express from 'express'
import { getUser, registerUser, updateUser, loginUser, loginCb, logout } from '../controllers/user.js'
const router = express.Router()

router.get('/', getUser)
router.post('/signup', registerUser)
router.post('/login', loginUser, loginCb)
router.patch('/update', updateUser)
router.post('/logout', logout)

export default router