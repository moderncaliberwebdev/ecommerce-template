// Imports
import asyncHandler from 'express-async-handler'
import express, {Request, Response} from 'express'

// Import models
import Item from '../models/model'

export const getItem = asyncHandler(async (req: Request, res: Response) => {
  const items = await Item.find({})

  if (items) {
    res.json(items)
  } else {
    throw new Error('No Items')
  }
})

export const newItem = asyncHandler(async (req: Request, res: Response) => {
  const item = new Item({
    name: 'Caleb',
  })

  await item.save()
  res.json(item)
})
