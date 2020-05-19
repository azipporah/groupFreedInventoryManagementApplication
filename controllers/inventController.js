const inventory = require("../models/inventory");

module.exports = {
    /** localhost:5990/_id 
     * where _id is the one for the inventory you want to delete
    */
    putStock:(req, res)=>{
        //update already existing stock
        inventory.findByIdAndUpdate({_id:req.params.inventory}, req.body)
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
    
    /** localhost:5990/_id 
     * where _id is the one for the inventory you want to delete
    */
    deleteStock:(req, res)=>{
        //delete stock from inventory
        inventory.deleteOne({
            _id: req.params.inventory
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
