const express = require("express");
const app = express();
const db = require("./config/mongoose-connection");
const expressSession = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();

const cookieParser = require("cookie-parser");
const path = require("path");
const ownerRouter = require("./routes/ownersRouter");
const userRouter = require("./routes/usersRouter");
const productRouter = require("./routes/productRouter");
const indexRouter = require("./routes/index");
const shopRouter = require("./routes/shopRouter");
const addtoCart = require("./routes/addCartRouter");
const cart = require("./routes/cartRouter");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false, 
        secret: process.env.EXPRESS_SESSION_SECERET
    })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.isLoggedIn = req.session.user ? true : false;
  next();
});

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.use("/", indexRouter);
app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/shop", shopRouter);
app.use("/addtoCart", addtoCart);
app.use("/cart", cart);

app.listen(3000, () => {
    console.log("app is running at port 3000");
});