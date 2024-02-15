require("dotenv").config();

const express = require("express");
const connectDB = require("./server/config/db");
const Shorturl = require("./server/models/Shorturl");

const app = express();
const PORT = process.env.PORT || 9000;

// Connect to DB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Templating Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { data: null });
});

app.post("/", async (req, res) => {
  const link = { originalLink: req.body.link };

  try {
    let data = await Shorturl.findOne(link);
    if (!data) {
      try {
        data = await Shorturl.create(link);
      } catch (error) {
        console.log(error);
      }
    }
    res.render("index", { data });
  } catch (error) {
    console.log(error);
  }
});

app.get("/:shortid", async (req, res) => {
  const shortid = req.params.shortid;
  try {
    const data = await Shorturl.findOne({ shortlink: shortid });
    if (!data) {
     return res.status(404).redirect("/");
    } else {
      await data.updateOne({ No_of_clicks: data.No_of_clicks + 1 });
      res.redirect(data.originalLink);
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
