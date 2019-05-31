const router = require("express").Router();
const breweryController = require("../../controllers/breweryController");

// Matches with "/api/books"
router.route("/").get(breweryController.findAll);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
