require('./models/mongodb');
 
//Import the necessary packages
const express = require('express');
var app = express();
const path = require('path');
const exphb = require('express-handlebars');
const bodyparser = require('body-parser');
 
const itemController = require('./controller/itemController');
 
app.use(bodyparser.urlencoded({
extended: true
}));
 

app.get('/', (req, res) => {
res.send
});
app.use(bodyparser.json());
 
//Establish the server connection
const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Listening on port ${port}`));
 
//Set the Controller path which will be responding to the user actions
app.use('/item', itemController);