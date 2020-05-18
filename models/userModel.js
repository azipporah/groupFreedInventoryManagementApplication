const mongoose = require('mongoose');
//create a user schema
const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        min:10,
        max:50
    } ,
    lastname:{
        type:String,
        required:true,
        min:10,
        max:50
    },
    username:{
        type:String,
        required:true,
        min:10,
        max:50
    },
    email:{
        type:String,
        required:true,
        min:10,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:10,
        max:1024
    }
});
//attach the schema to the user model; 'userModel' is the model name, 'userSchema' is the schema name
module.exports = mongoose.model('userModel',userSchema);
//we can use this model to implement all the CRUD operations that we want within our endpoints.