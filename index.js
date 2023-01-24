const express = require("express");
const routes = require("./src/routes");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(express.json());
app.use("/posts", routes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my apis" });
});

// Create mongodb connection
mongoose.connect(process.env.MONGO_URI, () =>
  console.log("Connected to mongodb")
);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
