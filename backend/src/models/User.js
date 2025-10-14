import mongoose from 'mongoose';
import { getMainConnection } from '../config/db.js';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return v.length >= 8;
        },
        message: 'Password must be at least 8 characters long'
      }
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  },
  { timestamps: true }
);

// Function to get the User model
function getUserModel() {
  const mainConnection = getMainConnection();
  return mainConnection.model('User', userSchema);
}

export default getUserModel;
