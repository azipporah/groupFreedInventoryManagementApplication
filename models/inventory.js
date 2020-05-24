const mongoose = require("mongoose");
const inventorySchema = require("./schemas/inventorySchema");

const Inventory = mongoose.model("inventory", inventorySchema);
//inventory is the name of the collection in the database
//then export the inventory variable
module.exports = Inventory;