const express = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const productModel = require("../models/product-model");
const router = express.Router();

router.get("/", (req, res) => {
     let error = req.flash("error");
     res.render("index", { error: [], isLoggedIn :false });
});


module.exports = router;