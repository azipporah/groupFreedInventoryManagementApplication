const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
//Link
const Item = mongoose.model('item');
 
//Router Controller for READ request
router.get('/',(req, res) => {
res.render("item/itemAddEdit", {
viewTitle: "Insert a New item for Freed"
});
});
 
//Router Controller for UPDATE request
router.post('/', (req,res) => {
if (req.body._id == '')
insertIntoMongoDB(req, res);
else
updateIntoMongoDB(req, res);
});
 
//Creating function to insert data into MongoDB
function insertIntoMongoDB(req,res) {
var item = new item();
item.itemName = req.body.itemName;
item.itemId = req.body.itemId;
item.itemCategory = req.body.itemCategory;
item.itemCost = req.body.itemCost;
item.save((err, doc) => {
if (!err)
res.redirect('item/list');
else
console.log('Error during record insertion : ' + err);
});
}
 
//Creating a function to update data in MongoDB
function updateIntoMongoDB(req, res) {
Item.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
if (!err) { res.redirect('item/list'); }
else {
if (err.name == 'ValidationError') {
handleValidationError(err, req.body);
res.render("item/itemAddEdit", {
//Retaining value to be displayed in the child view
viewTitle: 'Update Item Details',
employee: req.body
});
}
else
console.log('Error during updating the record: ' + err);
}
});
}
 
//Router to retrieve the complete list of available items
router.get('/list', (req,res) => {
Item.find((err, docs) => {
if(!err){
res.render("item/list", {
list: docs
});
}
else {
console.log('Failed to retrieve the Item List: '+ err);
}
});
});
 
//Creating a function to implement input validations
function handleValidationError(err, body) {
for (field in err.errors) {
switch (err.errors[field].path) {
case 'itemName':
body['itemNameError'] = err.errors[field].message;
break;
default:
break;
}
}
}
 
//Router to update an item using it's ID
router.get('/:id', (req, res) => {
Item.findById(req.params.id, (err, doc) => {
if (!err) {
res.render("item/itemAddEdit", {
viewTitle: "Update item Details",
item: doc
});
}
});
});
 
//Router Controller for DELETE request
router.get('/delete/:id', (req, res) => {
Item.findByIdAndRemove(req.params.id, (err, doc) => {
if (!err) {
res.redirect('/item/list');
}
else { console.log('Failed to Delete Item Details: ' + err); }
});
});
 
module.exports = router;