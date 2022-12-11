const BlogPosts = require("../models/blogModel");

module.exports.newBlogPostService = (data) => {
    const newBlogPost = new BlogPosts(data);
    return newBlogPost.save();
};

module.exports.allBlogPostsService = () => {
    return BlogPosts.find({});
};

module.exports.blogPostUpdateService = (id, data) => {
    return BlogPosts.updateOne(
        { _id: id },
        { $set: data },
        { runValidators: true }
    );
};

module.exports.blogPostDeleteService = (id) => {
    return BlogPosts.deleteOne({ _id: id });
};
