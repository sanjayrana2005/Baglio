const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

mongoose
    .connect(`${config.get("MONGODB_URI")}/Baglio`)
    .then(() => {
        debug("Connected");
    })
    .catch((error) => {
        debug(error);
    });

module.exports = mongoose.connection;