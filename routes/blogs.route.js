const express = require("express");
const {
    newBlogPostController,
    allBlogPostsController,
    blogPostUpdateController,
    blogPostDeleteController,
    getSpecificController,
} = require("../controllers/blogs.controller");

const blogRouter = express.Router();

blogRouter
    .route("/blogs")
    .post(newBlogPostController)
    .get(allBlogPostsController);

blogRouter
    .route("/blog/:id")
    .get(getSpecificController)
    .put(blogPostUpdateController)
    .delete(blogPostDeleteController);

module.exports = blogRouter;
