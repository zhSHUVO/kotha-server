const BlogModel = require("../models/blogModel");

module.exports.newBlogPostService = (data) => {
    const newBlogPost = new BlogModel(data);
    return newBlogPost.save();
};

module.exports.allBlogPostsService = () => {
    return BlogModel.find({});
};
