const express = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const productModel = require("../models/product-model");
const router = express.Router();

router.get("/", isLoggedIn, async (req, res) => {
    let products = await productModel.find();
    const success = req.flash("success");
    

    res.render("shop", {
        products,
        success,
        isLoggedIn
    });
});

module.exports = router;