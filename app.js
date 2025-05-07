const express = require("express");
const app = express();

const cookieParse = require("cookie-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.send("server is running ");
});

app.listen(3000,()=>{
    console.log("app is running at port 3000");
});