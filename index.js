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

app.use(express.static("public"));

// Templating Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
});

app.post("/", async (req, res) => {
    const link = req.body.link;
    try {
        let data = await Shorturl.findOne({originalLink: link});
    if (!data){
        try {
            data = await Shorturl.create({originalLink: link});
        } catch (error) {
            console.log(error);
        }
    }
    console.log(data);
    const locals = {
        message: `Your new link is ${data.shortlink}`
    };
    res.render("index", locals)
    } catch (error) { 
        console.log(error);
    }  
});

app.get("mi.ly/:shortid", async (req, res) => {
    const shortid = req.params.shortid;
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})