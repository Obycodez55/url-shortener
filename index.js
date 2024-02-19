require("dotenv").config();

const express = require("express");
const connectDB = require("./server/config/db");
const mainRoute = require("./server/routes/main");

const app = express();
const PORT = process.env.PORT || 9000;

// Connect to DB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Templating Engine
app.set("view engine", "ejs");

app.use("/", mainRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
