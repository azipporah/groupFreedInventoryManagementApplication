const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dbUser:dbUser@cluster0-drr6u.gcp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})

const connectDB = mongoose.connection;

module.exports = connectDB