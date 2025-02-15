const mongoose = require('mongoose');

const ShippingSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  postalCode: String,
  country: String,
  phone: String
});

module.exports = mongoose.model('Shipping', ShippingSchema);
