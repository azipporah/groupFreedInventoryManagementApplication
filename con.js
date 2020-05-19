const mongoose = require("mongoose");

const dotenv = require('dotenv');

//to keep important info from public
//require('dotenv/config');
dotenv.config();

mongoose.connect(process.env.db_connection, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

module.exports = db;