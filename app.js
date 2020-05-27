const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require("./routes/router");
const UsersRouter = require('./routes/UsersRouter');
const putRouter = require("./routes/router");
const ItemsRouter = require('./routes/ItemsRouter');

//to keep important info from public
require('dotenv/config');
// dotenv.config();

//Import routes
const authRoute = require('./routes/auth');

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/', authRoute);//middleware for the router
app.use(UsersRouter);
app.use(putRouter);
app.use(ItemsRouter);
app.use(router);

//to connect to the server
app.listen(4550, function(){
    console.log('server started at port 4550');    
});

//connect to database
mongoose.connect(process.env.db_connection, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to db')
);
