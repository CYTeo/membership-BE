import mongoose from 'mongoose';

const rewardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  required_credits: { type: Number, required: true },
  availability_stock: { type: Number, require: true },
});

module.exports = mongoose.model('Reward', rewardSchema);
