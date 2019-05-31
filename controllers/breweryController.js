const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("inside breweryController.findAll");
        db.Brewery.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
