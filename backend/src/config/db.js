import mongoose from 'mongoose';

let mainConnection;
let resourceConnection;

export async function connectDB() {
  const mainUri = process.env.MONGO_URI || process.env.MONGODB_URI;
  const resourceUri = process.env.MONGO_URI_SECOND || mainUri; // Use same if not set

  if (!mainUri) throw new Error('Missing MONGO_URI or MONGODB_URI in .env');

  // Connect to main database
  mainConnection = await mongoose.createConnection(mainUri);
  console.log('✅ Main MongoDB connected');

  // Connect to resource database (same as main if not specified)
  resourceConnection = await mongoose.createConnection(resourceUri);
  console.log('✅ Resource MongoDB connected');
}

export function getMainConnection() {
  return mainConnection;
}

export function getResourceConnection() {
  return resourceConnection;
}
