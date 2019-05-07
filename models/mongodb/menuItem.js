const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  id: { type: String, required: true, unique: true},
  title: { type: String, required: true },
  restaurantChain: { type: String, required: true },
  images: { type: Array, required: false },
  type: { type: String, required: true },
  nutrition: { type: {
    calories: { type: String },
    carbs: { type: String},
    fat: { type: String },
    protein: { type: String }
  }},
  bookmarked: [{ type: Schema.Types.ObjectId, ref: "Favorite"}],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]
});

const MenuItem = mongoose.model("MenuItem", menuSchema);

module.exports = MenuItem;