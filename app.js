const express = require('express');
const bodyParser = require('body-parser');
const UsersRouter = require('./routes/UsersRouter');


const cors = require('cors');
//Import routes
const authRoute = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', authRoute);//middleware for the router

app.use(UsersRouter);


const port = 5990;

app.listen(port, () => {
    console.log('Listening on port ${port}');
});