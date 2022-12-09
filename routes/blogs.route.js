const express = require("express");
const {
    newBlogPostController,
    allBlogPostsController,
    blogPostUpdateController,
} = require("../controllers/blogs.controller");

const blogRouter = express.Router();

blogRouter
    .route("/blogs")
    .post(newBlogPostController)
    .get(allBlogPostsController);

blogRouter.route("/blog/:id").patch(blogPostUpdateController);

module.exports = blogRouter;
