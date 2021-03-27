const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  points: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);