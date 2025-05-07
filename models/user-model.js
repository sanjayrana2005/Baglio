const mongoose = require("mongoose");

mongoose.connect("mongoose://127.0.0.1:2701/Baglio");

const userSchema = mongoose.Schema({
    fullName: Sting,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: number,
    picture: String
});

module.exports = mongoose.model("user", userSchema);