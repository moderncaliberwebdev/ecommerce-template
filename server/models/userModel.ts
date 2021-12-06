import {Schema, model, Document} from 'mongoose'

interface User extends Document {
  email: string,
  password: string,
  email_verified: boolean,
  isAdmin: boolean,
  orders: object[],
}

const modelSchema = new Schema<User>({
  email: {
    type: String,
    required: false,
  },
  password: {
      type: String,
      required: false,
  },
  email_verified: {
    type: Boolean,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    required: false,
  },
  orders: {
      type: Array,
      required: false,
  },
})

const User = model<User>('User', modelSchema)

export default User
