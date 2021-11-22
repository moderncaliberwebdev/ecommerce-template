import {Schema, model, Document} from 'mongoose'

interface User extends Document {
  name: string
}

const modelSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
})

const Item = model<User>('Item', modelSchema)

export default Item
