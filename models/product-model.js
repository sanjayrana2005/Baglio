const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: Buffer,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    paneColor: String,
    textColor: String
});
const product = mongoose.model("product",productSchema);
module.exports = product;