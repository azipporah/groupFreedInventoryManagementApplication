const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../models/userModel.js');//import model you're gonna post to.
const {registerValidation} = require('../routes/validation');

 //submit a post( create a user)
  router.post('/register',async (req,res) => {

// //validate data before creation of the user
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking if user already exists
    const emailExists = await userModel.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send("Oops, email already exists");

        //create new user
      const model = new userModel({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
      }); 
    
    try{
        const savedUser = await model.save()//save the data to database        
        res.send(savedUser);
    }catch(err){
        res.status(404).send(err);
    }  
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