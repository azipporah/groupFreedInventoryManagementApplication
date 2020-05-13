const db = require("../config/con");

const Item = require("../models/Item");

const Inventory = require('../models/Inventory');

const Category = require('../models/Category');

const mongoose = require('mongoose');


//get notified if we connected successfully to the database
db.once("open", () => {
    console.log("CONNECTION STATUS: ", "CONNECTION SUCCESSFUL!");
});

// or get notified if a connection error occurs
db.on("error", () => {
    console.log("CONNECTION STATUS: ", "CONNECTION FAILED!");
});

module.exports = {

    //Handle incoming POST requests to to add Items
    PostInventory: (req, res) => {
        const NewInventory = new Inventory({
            _id: new mongoose.Types.ObjectId,
            categoryId: req.body.categoryId,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            number_in_stock: req.body.number_in_stock
        });
        NewInventory.save()
        .then((saved) => {
            console.log("NEW USER SAVED: ", saved);
            return res.status(201).json({
                message:'You have successfully Posted a new product',
                createdInventory: NewInventory
            });
        })
        .catch((err) => {
            console.log("ERROR OCCURED: ", err);
            return res.status(400).json({message: 'Adding new product Failed using the Post method'});
        });
    },



    // Retrieve all categories from the database.
    GetCategory: (req, res) => {
         Category.find()
        .select('category')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                category: docs
            }
            console.log(docs);
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    },

     // Find Fetch Specific Category
    GetCategoryId: (req, res) => {
        Category.find({categoryId: req.params.categoryId})
        // .select('name description category price number_in_stock')
        .exec()
        .then(doc => {
            console.log('From database', doc);
            
            if(doc){
                res.status(201).json({
                    message: "Successfuly retrieved a single category using get request",
                    categoryId: doc.categoryId,
                    createdCategory: doc
                });
            } else {
                res.status(404).json({
                    message: "Invalid entry entered for the ID"
                })
            }
            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
    },    

    // Retrieve all items in the given category from the database.
    GetItem: (req, res) => {
        Category.find({categoryId: req.params.categoryId})
        .select('name description')
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    },

     // Find a single item with a itemId
    GetItemid: (req, res) => {

        Category.findOne({name: req.params.itemsId})
        .select('name description category price number_in_stock')
        .exec()
        .then(doc => {
            console.log('From database', doc);
            
            if(doc){
                res.status(201).json({
                    message: "Successfuly retrieved a single item using the get request",
                    createdCategory: doc
                });
            } else {
                res.status(404).json({
                    message: "Invalid entry entered for the ID"
                })
            }
            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
    },

// Delete a product with the specified productId in the request
    DeletItemid: (req, res) => {
    Category.deleteOne({name: req.params.itemsId})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    },

    // Retrieve all items in the whole inventory from the database.
    GetInventory: (req, res) => {
        Inventory.find()
        .exec()
        .then(docs => {
            
            const response = {
                count: docs.length,
                inventory: docs
            }
            console.log(docs);
            res.status(200).json(response);

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    }

}
