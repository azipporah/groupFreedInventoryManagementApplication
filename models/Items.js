const mongoose = require("mongoose");
const itemsSchema = require("./item.models");

const Items = mongoose.model("item", itemsSchema);

module.exports = Items;