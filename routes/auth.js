const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/userModel.js');//import model you're gonna post to.
const {registerValidation,loginValidation} = require('../routes/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//REGISTER A NEW USER
 //submit a post( create a user)
  router.post('/register',async (req,res) => {

//validate data before creation of the user
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking if user already exists
    const emailExists = await userModel.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send("Oops, email already exists");

    //hashing the password
    const salt = await bcrypt.genSalt(10);//generate the salt and hash the password with this salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt);//creates a mess of the password and only bcrypt can decrypt it

        //create new user
      const model = new userModel({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword
      }); 
    
    try{
        const savedUser = await model.save()//save the data to database        
        res.send(savedUser);
    }catch(err){
        res.status(404).send(err);
    }  
  });

  //LOGIN OF A USER
  router.post('/login', async (req,res) =>{
    
    //validate data before creation of the user
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking db if username already exists
    const user = await userModel.findOne({username: req.body.username});
    if(!user) return res.status(400).send("Oops, user doesn't exists.");

    //checking db if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);//compares input password to the hased password
    if(!validPassword) return res.status(400).send("Oops, invalid password.");

    //create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.secret_token);
    res.header('authToken',token).send(token);

    //res.send('Successfully logged in');
    
  });

  //get back all the posts(added users)
router.get('/register', async (req,res) => {
    try{
      const allPosts = await userModel.find();//getting back all posts use find(); method.
      res.send(allPosts);
    }catch(err){
      res.send({message:err});
    }
    });
  
    //get back a specific user
    router.get('/register/:userId', async (req,res) => {//async and await must be used together otherwise an error
        try{
            const specificUser = await userModel.findById(req.params.userId);//get a specific post (user) by adding its id to the server url
            res.json(specificUser);
        }catch(err){
          res.json({message:err});
        }
    });
  
    //delete a specific user
    router.delete('/register/:userId', async (req,res) => {
        try{
            const deletedUser = await userModel.findByIdAndRemove(req.params.userId);//finds the user's id and then deletes that user
            res.json(deletedUser);
        }catch(err){
            res.json({message:err});
        }
    });
  
    //Update a user's info
    router.patch('/register/:userId', async (req,res) => {
        try{
            const updatedUser = await userModel.findByIdAndUpdate({_id:req.params.userId},//finds the user by id(tho not specified in code) and then,
              {$set:{password:req.body.password}//allows update of any field by specifying it ie password,username or firstname
          });
            res.json(updatedUser);
        }catch(err){
            res.json({message:err});
        }
    });

module.exports = router;