import express from 'express';
import Resource from '../models/Resource.js';
import asyncHandler from '../utils/asyncHandler.js';

const router = express.Router();

// GET /api/resources/:category → fetch all resources by category
router.get('/:category', asyncHandler(async (req, res) => {
  const category = req.params.category;
  const resources = await Resource.find({ category }).sort({ createdAt: -1 });
  res.json(resources);
}));

export default router;
