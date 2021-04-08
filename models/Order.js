const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema ({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  itemsOrdered: [String],
  cost: Number,
  pointsAwarded: Number,
  dateOrdered: Date,
});

mongoose.model('surveys', surveySchema);