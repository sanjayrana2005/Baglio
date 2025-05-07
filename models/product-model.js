const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    backGroundColor: String,
    paneColor: String,
    textColor: String
});
module.export = mongoose.model("product",productSchema);