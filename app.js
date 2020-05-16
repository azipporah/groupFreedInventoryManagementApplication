const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require("./routes/router");

//to keep important info from public
//require('dotenv/config');
dotenv.config();

//Import routes
const authRoute = require('./routes/auth');

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/', authRoute);//middleware for the router

app.use(router);

//to connect to the server
app.listen(3000, function(){
    console.log('server started at port 3000');    
});

//connect to database
//db_connection = mongodb+srv://azipporah:genesis@azipporah-kv07y.mongodb.net/test?retryWrites=true&w=majority
//For mongodb compass : db_connection = mongodb://localhost/mensClothingdb
mongoose.connect(process.env.db_connection, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to db')
);
