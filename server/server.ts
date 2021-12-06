// Imports
import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'

// DB
import connectDB from './config/db'

// Routes
import routes from './routes/router'

// server setup
const app: Application = express()
const PORT = process.env.PORT || 3333
app.use(cors())
app.use(express.json())
dotenv.config()
connectDB()


app.use('/api', routes)

app.listen(PORT, () => console.log('Server is running on the port ', PORT))