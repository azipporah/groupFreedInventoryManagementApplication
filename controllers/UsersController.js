const db = require("../config");

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

    /**Handle incoming POST requests to to add Items
     * localhost:5990/inventory 
    */
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


    /** Retrieve all items in the given category from the database.
     * localhost:5990/inventory/4/items
    */
    GetItem: (req, res) => {
        Category.find({categoryId: req.params.categoryId})
        .select('name description')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                items: docs
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

     /**  Find a single item with a itemId 
      * localhost:5990/inventory/4/items/cable knit => name of item
     */
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

    /** Delete an Item with the specified ItemId in the request 
     * localhost:5990/inventory/4/items/cable knit
    */
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
    }

}
