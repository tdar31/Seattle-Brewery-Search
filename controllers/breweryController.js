const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Brewery.find(req.query)
            .sort({ queryName: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
