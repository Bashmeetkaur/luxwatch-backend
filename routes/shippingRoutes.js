const express = require('express');
const router = express.Router();
const Shipping = require('../models/Shipping');

// 🚀 Fix: Get all shipping records
router.get('/', async (req, res) => {
  try {
    const shippingRecords = await Shipping.find(); // Fetch all records from MongoDB
    res.status(200).json(shippingRecords);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get shipping details by ID
router.get('/:id', async (req, res) => {
  try {
    const shipping = await Shipping.findById(req.params.id);
    res.status(200).json(shipping);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Save shipping details
router.post('/', async (req, res) => {
  try {
    const newShipping = new Shipping(req.body);
    await newShipping.save();
    res.status(201).json({ message: 'Shipping details saved', data: newShipping });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
