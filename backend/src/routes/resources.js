import express from 'express';
const router = express.Router();
import Resource from '../models/Resource.js';
import asyncHandler from '../utils/asyncHandler.js';

// POST /api/resources — create
router.post('/', asyncHandler(async (req, res) => {
  const { title, category, link, description, eligibility, source, image } = req.body;
  if (!title || !category || !link || !description) {
    return res.status(400).json({ error: 'title, category, link, and description are required' });
  }
  const resource = await Resource.create({ title, category, link, description, eligibility, source, image });
  res.status(201).json(resource);
}));

// GET /api/resources — read (with pagination)
router.get('/', asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    Resource.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
    Resource.countDocuments()
  ]);

  res.json({ items, total, page, pages: Math.ceil(total / limit) });
}));

// GET /api/resources/:id — read one
router.get('/:id', asyncHandler(async (req, res) => {
  const r = await Resource.findById(req.params.id);
  if (!r) return res.status(404).json({ error: 'Not found' });
  res.json(r);
}));

// GET /api/resources/category/:category — read by category
router.get('/category/:category', asyncHandler(async (req, res) => {
  const category = req.params.category;
  const resources = await Resource.find({ category }).sort({ createdAt: -1 });
  res.json(resources);
}));

// PUT /api/resources/:id — update
router.put('/:id', asyncHandler(async (req, res) => {
  const r = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!r) return res.status(404).json({ error: 'Not found' });
  res.json(r);
}));

// DELETE /api/resources/:id — delete
router.delete('/:id', asyncHandler(async (req, res) => {
  const r = await Resource.findByIdAndDelete(req.params.id);
  if (!r) return res.status(404).json({ error: 'Not found' });
  res.json({ message: 'Deleted' });
}));

export default router;
