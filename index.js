const express = require("express");
const routes = require("./src/routes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/posts", routes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my apis" });
});

// Create mongodb connection
mongoose.connect(process.env.MONGO_URI, () =>
  console.log("Connected to mongodb")
);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
