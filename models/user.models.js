import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'User name is required'],
      trim: true,
      minLength: 3,
      maxLength: 21,
    },
    email: {
      type: String,
      required: [true, 'User Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 10,
      maxLength: 50,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: 6,
      maxLength: 64,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export { User };
