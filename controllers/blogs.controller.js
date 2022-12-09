const BlogModel = require("../models/blogModel");
const {
    allBlogPostsService,
    newBlogPostService,
    blogPostUpdateService,
    blogPostDeleteService,
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

module.exports.blogPostUpdateController = async (req, res) => {
    const {
        params: { id },
        body,
    } = req;
    try {
        const updatedBlogPost = await blogPostUpdateService(id, body);
        res.status(200).json({
            operation: "successful",
            data: updatedBlogPost,
        });
    } catch (error) {
        res.status(500).json({
            operation: "failed",
            message: error.message,
        });
    }
};

module.exports.blogPostDeleteController = async (req, res) => {
    try {
        const deletedBlog = await blogPostDeleteService(req.params.id);
        if (deletedBlog.deletedCount) {
            res.status(200).json({
                operation: "successful",
                data: deletedBlog,
            });
        } else {
            res.status(500).json({
                operation: "failed",
                message: "There is no post with provided id",
            });
        }
    } catch (error) {
        res.status(500).json({
            operation: "failed",
            message: error.message,
        });
    }
};
