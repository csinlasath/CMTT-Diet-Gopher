const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    favorited: [{ type: Schema.Types.ObjectId, ref: "Favorite"}],
    searchHistory: [{ type: Schema.Types.ObjectId, ref: "History"}],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;