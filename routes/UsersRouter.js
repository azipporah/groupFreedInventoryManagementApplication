//using the express promise router
const router = require('express-promise-router')();
const {PostInventory,GetCategory, GetCategoryId , GetItem, GetItemid, DeletItemid} = require('../controllers/UsersController');

router.route('/inventory').post(PostInventory);
router.route('/inventory/category').get(GetCategory);
router.route('/inventory/:categoryId').get(GetCategoryId);
router.route('/inventory/:categoryId/:items').get(GetItem);
router.route('/inventory/:categoryId/:items/:itemsId').get(GetItemid);
router.route('/inventory/:categoryId/:items/:itemsId').delete(DeletItemid);


module.exports = router;