const express = require("express");
const {
    newBlogPostController,
    allBlogPostsController,
    blogPostUpdateController,
    blogPostDeleteController,
} = require("../controllers/blogs.controller");

const blogRouter = express.Router();

blogRouter
    .route("/blogs")
    .post(newBlogPostController)
    .get(allBlogPostsController);

blogRouter
    .route("/blog/:id")
    .patch(blogPostUpdateController)
    .delete(blogPostDeleteController);

module.exports = blogRouter;
