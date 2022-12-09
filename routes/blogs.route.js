const express = require("express");
const {
    newBlogPostController,
    allBlogPostsController,
} = require("../controllers/blogs.controller");

const blogRouter = express.Router();

blogRouter
    .route("/blogs")
    .post(newBlogPostController)
    .get(allBlogPostsController);

module.exports = blogRouter;
