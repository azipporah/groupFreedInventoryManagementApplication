const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/api_project3", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

module.exports = db;