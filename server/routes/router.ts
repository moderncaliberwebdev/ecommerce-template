import express, { Request, Response } from 'express'
const router = express.Router()

// Controllers
import { getItem, newItem } from '../controllers/routeController'

router.get('/', (req: Request, res: Response) => res.json({ title: 'Welcome to NextJS and TS!!' }))
router.get('/items', getItem)
router.post('/items/newitem', newItem)

export default router
