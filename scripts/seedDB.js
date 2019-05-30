const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/seattle-brewery-searchDB"
);

const brewerySeed = [
    {
        name: "Rueben's Brewery",
        queryName: "ruebens",
        address: "5010 14th Ave NW, Seattle, WA 98107",
        phoneNumber: "(206) 784-2859",
        photoUrl: "http://via.placeholder.com/600x400",
        description:
            "We're an award winning microbrewery focused on making small batches of top quality ales and lagers. We're family owned and focused on brewing unconstrained to make the best beer possible.",
        region: "ballard",
        latitude: "11111.11111",
        longitude: "11111.11111"
    },
];

db.Brewery.remove({})
    .then(() => db.Brewery.collection.insertMany(brewerySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
