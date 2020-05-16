const inventory = require("../models/inventory");

module.exports = {
    putStock:(req, res)=>{
        //update already existing stock
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
        //delete stock from inventory
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
