const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
  id: { type: String, required: true, unique: true},
  title: { type: String, required: true },
  ingredientList: { type: String, required: false },
  image: { type: String, required: false },
  calories: { type: String, required: false },
  carbs: { type: String, required: false },
  fat: { type: String, required: false },
  protein: { type: String, required: false },
  servingSize: { type: String, required: false }
});

const GroceryItem = mongoose.model("GroceryItem", grocerySchema);

module.exports = GroceryItem;