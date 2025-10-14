import express from 'express';
const router = express.Router();
import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authenticateToken } from '../middleware/auth.js';

// POST /api/auth/signup — create user
router.post('/signup', asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'username, email, password required' });
  }

  const UserModel = User();
  const exists = await UserModel.findOne({ email });
  if (exists) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  // Hash password before saving
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await UserModel.create({
    username,
    email,
    password: hashedPassword,
    role: 'user' // Explicitly set default role
  });

  // Generate JWT token for new user
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(201).json({
    message: 'User created successfully',
    token,
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  });
}));


// POST /api/auth/signin — login user
router.post('/signin', asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email and password required' });

  const UserModel = User();
  const user = await UserModel.findOne({ email });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  // Compare password with hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

  // Generate JWT token
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' } // Token expires in 7 days
  );

  res.json({
    message: 'Login successful',
    token,
    user: { _id: user._id, username: user.username, email: user.email, role: user.role }
  });
}));

// GET /api/auth/me — get current user info
router.get('/me', authenticateToken, asyncHandler(async (req, res) => {
  res.json({ user: req.user });
}));

// GET /api/auth — list users (admin only)
router.get('/', authenticateToken, asyncHandler(async (req, res) => {
  // Check if user is admin
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }

  const UserModel = User();
  const users = await UserModel.find().select('-password');
  res.json(users);
}));

export default router;
