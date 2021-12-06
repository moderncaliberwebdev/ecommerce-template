import express, { Request, Response } from 'express'
import { isUser } from '../controllers/userController'
const router = express.Router()

router.get('/users/:id', isUser)

export default router
