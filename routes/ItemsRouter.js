//using the express promise router
const router = require('express-promise-router')();
const {GetInventory, GetCategory, GetCategoryId} = require('../controllers/itemController');

router.route("/:inventory").get(GetInventory);
router.route('/inventory/category').get(GetCategory);
router.route('/inventory/:categoryId').get(GetCategoryId);

module.exports = router