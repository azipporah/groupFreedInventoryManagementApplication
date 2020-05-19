const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
//Attributes of the item object
const itemsSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    number_in_stock: {
        type: Number,
        required: true
    }
    });
 
    module.exports = itemsSchema;