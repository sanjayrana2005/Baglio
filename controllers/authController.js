const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async (req, res) => {
    try {
        let { email, password, fullName } = req.body;

        let user = await userModel.findOne({ email: email });
        if (user) return res.status(401).send("you have already an account, please login")

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullName,
                    });
                    let token = generateToken(user)
                    res.cookie("token", token)
                    res.send("user created");


                }
            });
        });
    }
    catch (err) {
        res.send(err.message);
    }
}

module.exports.loginUser = async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email });

    if (!user) return res.send("email or password incprrect");

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = generateToken(user);
            res.cookie("token", token);
            res.send("you can login");
        }
        else {
            res.send("email or passord wrong");
        }
    });
}