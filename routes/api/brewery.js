const router = require("express").Router();
const breweryController = require("../../controllers/breweryController");

router.route("/").get(breweryController.findAll);

module.exports = router;
