import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    required_credits: { type: Number, required: true },
    availability_stock: { type: Number, require: true },
    expired_date: { type: Date, require: true, default: new Date().getTime() },
  },
  { timestamps: true }
);

export default mongoose.model("Reward", rewardSchema);

// module.exports = mongoose.model("Reward", rewardSchema);
