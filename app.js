const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



require('dotenv/config');

//Import routes
const authRoute = require('./routes/auth');

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/', authRoute);//middleware for the router

app.listen(3000, function(){
    console.log('server started at port 3000');    
});

//connect to database
//db_connection = mongodb+srv://azipporah:genesis@azipporah-kv07y.mongodb.net/test?retryWrites=true&w=majority

//For mongodb compass : db_connection = mongodb://localhost/mensClothingdb
mongoose.connect(process.env.db_connection, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to db')
);
// // Validate a user
// (function() {
//     var User = require('../routes/auth.js');
//     var me = { username: 'foo' };
//     var user = new User(me);
//     var err = user.joiValidate(me);
//     if (err) throw err;
//     user.save(function(err, saved) {
      
//     })
// });