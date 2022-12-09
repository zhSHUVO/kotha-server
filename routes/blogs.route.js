const express = require("express");
const { newBlogPost } = require("../controllers/blogs.controller");

const blogRouter = express.Router();

blogRouter.route("/blogs").post(newBlogPost);

module.exports = blogRouter;
