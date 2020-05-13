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
//attach the schema to the user model; 'User' is the model name, 'userSchema' is the schema name
module.exports = mongoose.model('userModel',userSchema);
//we can use this model to implement all the CRUD operations that we want within our endpoints.

// //get back all the posts(added users)
// router.get('/register', async (req,res) => {
//     try{
//       const allPosts = await userModel.find();//getting back all posts use find(); method.
//       res.send(allPosts);
//     }catch(err){
//       res.send({message:err});
//     }
//     });
  
//     //get back a specific user
//     router.get('/register/:userId', async (req,res) => {//async and await must be used together otherwise an error
//         try{
//             const specificUser = await userModel.findById(req.params.userId);//get a specific post (user) by adding its id to the server url
//             res.json(specificUser);
//         }catch(err){
//           res.json({message:err});
//         }
//     });
  
//     //delete a specific user
//     router.delete('/:userId', async (req,res) => {
//         try{
//             const deletedUser = await userModel.findByIdAndRemove(req.params.userId);//finds the user's id and then deletes that user
//             res.json(deletedUser);
//         }catch(err){
//             res.json({message:err});
//         }
//     });
  
//     //Update a user's info
//     router.patch('/:userId', async (req,res) => {
//         try{
//             const updatedUser = await userModel.updateOne({_id:req.params.userId},//finds the user by id(tho not specified in code) and then,
//               {$set:{password:req.body.password}//allows update of any field by specifying it ie password,username or firstname
//           });
//             res.json(updatedUser);
//         }catch(err){
//             res.json({message:err});
//         }
//     });