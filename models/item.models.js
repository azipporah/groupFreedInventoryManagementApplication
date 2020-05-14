const mongoose = require('mongoose');
 
//Attributes of the item object
var itemSchema = new mongoose.Schema({
itemName: {
type: String,
required: 'This field is required!'
},
itemId: {
type: String
},
itemCategory: {
type: String
},
itemCost: {
type: String
}
});
 
mongoose.model('item', itemSchema);