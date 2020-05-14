const mongoose =  require("mongoose");
const invetSchema = require("./schemas/InventSchema");

const inventory = mongoose.model("Inventory", invetSchema);

module.exports = inventory