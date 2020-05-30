const mongoose = require("mongoose");
const itemSchema = require("./schemas/itemSchema");

const Item = mongoose.model("items", itemSchema);
//items is the name of the collection in the database

module.exports = Item;