const express = require('express');
const bodyParser = require('body-parser');
const UsersRouter = require('./routes/UsersRouter');


const app = express();

app.use(bodyParser.json());

app.use(UsersRouter);


const port = 5990;

app.listen(port, () => {
    console.log('Listening on port ${port}');
});