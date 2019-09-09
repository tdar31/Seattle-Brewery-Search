const router = require("express").Router();
const breweryRoutes = require("./brewery");

router.use("/brewery", breweryRoutes);

module.exports = router;
