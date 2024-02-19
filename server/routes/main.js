const Shorturl = require("../models/Shorturl");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { data: null });
});

router.post("/", async (req, res) => {
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

router.get("/:shortid", async (req, res) => {
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

module.exports = router;
