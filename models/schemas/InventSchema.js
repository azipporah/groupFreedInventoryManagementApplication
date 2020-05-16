const { Schema } = require("mongoose");

const invetSchema = {
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
}


module.exports = invetSchema
