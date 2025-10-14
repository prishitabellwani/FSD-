import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const router = express.Router();

const testUsers = [
  { username: 'testuser1', password: 'password123', name: 'Test User One' },
  { username: 'testuser2', password: 'password123', name: 'Test User Two' },
];

// Endpoint to create test users in the database
router.post('/create-test-users', async (req, res) => {
  try {
    const UserModel = User();

    for (const userData of testUsers) {
      const existingUser = await UserModel.findOne({ username: userData.username });
      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = await UserModel.create({
          username: userData.username,
          email: `${userData.username}@test.com`,
          password: hashedPassword,
          role: 'user'
        });
      }
    }
    res.json({ message: 'Test users created or already exist.' });
  } catch (error) {
    console.error('Error creating test users:', error);
    res.status(500).json({ error: 'Failed to create test users' });
  }
});

export default router;
