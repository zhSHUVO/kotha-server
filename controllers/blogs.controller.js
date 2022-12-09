const { blogPostService } = require("../services/blog.service");

module.exports.newBlogPost = async (req, res) => {
    try {
        const newBlogPost = await blogPostService(req.body);
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
