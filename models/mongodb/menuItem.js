const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  id: { type: String, required: true, unique: true},
  title: { type: String, required: true },
  image: { type: String, required: false },
  calories: { type: String, required: false },
  carbs: { type: String, required: false },
  fat: { type: String, required: false },
  protein: { type: String, required: false }
});

const MenuItem = mongoose.model("MenuItem", menuSchema);

module.exports = MenuItem;