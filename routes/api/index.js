const router = require("express").Router();
const bookRoutes = require("./books");
const breweryRoutes = require("./brewery");

// Book routes
router.use("/books", bookRoutes);
router.use("/brewery", breweryRoutes);

module.exports = router;
