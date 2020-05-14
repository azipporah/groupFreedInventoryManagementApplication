const inventory = require("../models/inventory");
const connectDB = require("../config/dbConection");

connectDB.once("open", ()=>{
    console.log("connected to mongo");

});

connectDB.on("error", ()=>{
    console.log("failed again");
});

module.exports = {
     AddStock: (req, res, ) => {
         const NewStock = new inventory({
            categoryId: req.body.categoryId,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            number_in_stock: req.body.number_in_stock
        });
        NewStock.save()
        .then((saved) => {
            res.status(200).json({
                message: 'you have added an item',
                NewStock: NewStock

            })
            console.log('new stock saved', saved);
        })
        .catch((error)=>{
            console.log('error', error);
        });
    },
    putStock:(req, res)=>{
        inventory.updateOne({
            categoryId: req.body.categoryId,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            number_in_stock: req.body.number_in_stock
        })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Update successfull", result
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: err
            })
        })
    },
    
    deleteStock:(req, res)=>{
        inventory.deleteOne({
            category: req.params.category
        })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "successfull", result 
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: error
            });
        });
    }
}