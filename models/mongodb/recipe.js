const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: { type: String, required: true, unique: true},
  title: { type: String, required: true },
  extendedIngredients: { type: Array, required: false },
  analyzedInstructions: { type: Array, required: false },
  cookingMinutes: { type: String, required: false },
  dairyFree: { type: Boolean, required: false},
  glutenFree: { type: Boolean, required: false},
  image: { type: String, required: false },
  ketogenic: { type: Boolean, required: false },
  nutrition: { type: {
    nutrients: { type: Array }
  }},
  preparationMinutes: { type: String, required: false },
  servings: { type: String, required: false },
  type: { type: String, required: true },
  vegan: { type: Boolean, required: false },
  vegetarian: { type: Boolean, required: false },
  whole30: { type: Boolean, required: false },
  favorited: [{ type: Schema.Types.ObjectId, ref: "Favorite"}],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
