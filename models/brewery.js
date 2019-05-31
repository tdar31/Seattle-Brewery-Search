const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    name: String,
    queryName: String,
    website: String,
    address: String,
    phoneNumber: String,
    photoUrl: String,
    description: String,
    region: String,
    latitude: String,
    longitude: String
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;
