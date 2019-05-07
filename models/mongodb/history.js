const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
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

    restaurantChain: { type: String, required: true },
    images: { type: Array, required: false },

    username: { type: String, required: false },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const History = mongoose.model("History", HistorySchema);

module.exports = History;