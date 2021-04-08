const mongoose = require('mongoose');
const { Schema } = mongoose;

const coffeeSchema = new Schema({
  blend_name: String,
  origin: String,
  notes: String,
  priceSmall: Number,
  priceMedium: Number,
  priceLarge: Number,
});

mongoose.model('coffees', coffeeSchema);