import mongoose from 'mongoose';
import { getResourceConnection } from '../config/db.js';

const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ['employment', 'housing', 'legal', 'childcare', 'mental_health', 'other'],
      default: 'other'
    },
    link: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    eligibility: { type: String, trim: true },
    source: { type: String, trim: true },
    image: { type: String, trim: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

// Function to get the Resource model
function getResourceModel() {
  const resourceConnection = getResourceConnection();
  return resourceConnection.model('Resource', resourceSchema);
}

export default getResourceModel;
