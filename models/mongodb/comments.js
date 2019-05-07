const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    username: String,
    commentBody: String,
    groceryId: {
        type: Schema.Types.ObjectId,
        ref: "GroceryItem"
    },
    menuId: {
        type: Schema.Types.ObjectId,
        ref: "MenuItem"
    },
    recipeId: {
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;