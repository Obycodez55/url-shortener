require("dotenv").config();


const express = require("express");
const connectDB = require("./server/config/db");
const Shorturl = require("./server/models/Shorturl");

const app = express();
const PORT = process.env.PORT || 9000;

// Connect to DB
connectDB();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Templating Engine
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index")
});

app.post("/", function(req, res) {
    console.log(req.body.link);
    const locals = {
        message: `Your link is ${req.body.link}`
    };
    res.render("index", { locals})
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})