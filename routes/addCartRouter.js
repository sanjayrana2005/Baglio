const express = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const router = express.Router();

router.get("/:productid", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email })
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success","added to cart");
    res.redirect("/shop")

});
module.exports = router;