const mongoose = require('mongoose');
const db = require('../../models/mongodb');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/'
);

const userSeed = []

db.User.remove({}).then(() => db.User.collection.insertMany(userSeed)).then((data) => {
    console.log(`${data.results.n} records`);
    process.exit(0);
}).catch((err) => {
    console.error(err);
    process.exit(1);
});