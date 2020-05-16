const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

module.exports = categorySchema;