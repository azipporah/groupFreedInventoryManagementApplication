const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invetSchema = new Schema ({
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
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    number_in_stock: {
        type: Number,
        required: true
    }
})


module.exports = invetSchema
