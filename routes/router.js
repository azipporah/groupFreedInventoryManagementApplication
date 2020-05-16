const{ AddStock, deleteStock, putStock} = require("../controllers/inventController");
const router = require("express-promise-router")();

router.route("/inventory").post(AddStock);
router.route("/inventory").delete(deleteStock);
router.route("/inventory").put(putStock)


module.exports = router