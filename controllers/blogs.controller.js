const BlogModel = require("../models/blogModel");
const {
    allBlogPostsService,
    newBlogPostService,
} = require("../services/blog.service");

module.exports.newBlogPostController = async (req, res) => {
    try {
        const newBlogPost = await newBlogPostService(req.body);
        res.status(200).json({
            operation: "successful",
            data: newBlogPost,
        });
    } catch (error) {
        res.status(500).json({
            operation: "failed",
            message: error.message,
        });
    }
};

module.exports.allBlogPostsController = async (req, res) => {
    try {
        const allBlogPosts = await allBlogPostsService();
        res.status(200).json({
            operation: "successful",
            data: allBlogPosts,
        });
    } catch (error) {
        res.status(500).json({
            operation: "failed",
            message: error.message,
        });
    }
};
