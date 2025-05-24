const express = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const { disconnect } = require("mongoose");
const router = express.Router();

router.get("/", isLoggedIn, async (req, res) => {
       let user = await userModel
              .findOne({ email: req.user.email })
              .populate("cart")

              const bill = (Number(user.cart[0].price+20 - Number(user.cart[0].discount)));
              const isLoggedIn = req.user ? true : false;
       res.render("cart",{user,bill,isLoggedIn});
});

module.exports = router;