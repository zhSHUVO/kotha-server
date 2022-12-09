const BlogModel = require("../models/blogModel");

module.exports.blogPostService = (data) => {
    const newBlogPost = new BlogModel(data);
    return newBlogPost.save();
};
