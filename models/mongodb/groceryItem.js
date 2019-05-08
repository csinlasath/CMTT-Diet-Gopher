const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  ingredientList: { type: String, required: false },
  images: { type: Array, required: false },
  type: { type: String, required: true },
  nutrition: {
    type: {
      calories: { type: String },
      carbs: { type: String },
      fat: { type: String },
      protein: { type: String }
    }
  },
  servingSize: { type: String, required: false },
  favorited: [{ type: Schema.Types.ObjectId, ref: "Favorite"}],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]
});

const GroceryItem = mongoose.model("GroceryItem", grocerySchema);

module.exports = GroceryItem;