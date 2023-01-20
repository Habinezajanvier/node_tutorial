const express = require("express");
const post = require("./controller/post");

const route = express.Router();

route.get("/", post.getAll);
route.post("/", post.createPost);
route.put("/:id", post.updatePost);
route.delete("/:id", post.deletePost);

module.exports = route;
