import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    minLength: 2,
    maxLenght: 50,
  }, 
  email: {
    type: String,
    required: [true, 'User email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\s+@\s+\.\s+/, 'Please fill a valid email address'],
  },
  name: {
    type: String,
    required: [true, 'User password is required'],
    minLength: 5,
  }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User;