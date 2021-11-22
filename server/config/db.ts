import {connect} from 'mongoose'

const connectDB = async () => {
  try {
    // make .env file and put this in >> MONGO_URI=mongodb://localhost:27017/mernkindling
    const connection = await connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB Connected: ${connection.connection.host}`)
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
