const express = require("express");
const routes = require("./src/routes");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use("/posts", routes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my apis" });
});

// Create mongodb connection
mongoose.connect(
  "mongodb+srv://janvier:testing123@cluster0.pnymtzl.mongodb.net/?retryWrites=true&w=majority",
  () => console.log("Connected to mongodb")
);
const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
