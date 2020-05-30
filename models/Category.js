const mongoose = require("mongoose");
const categorySchema = require("./schemas/categorySchema");

const Category = mongoose.model("inventories", categorySchema);
//inventories is the name of the collection in the database

module.exports = Category;