const { default: mongoose } = require("mongoose");

const blogSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"],
            trim: true,
        },
        title: {
            type: String,
            required: [true, "Post title is required!"],
            trim: true,
        },
        description: {
            type: String,
            required: [
                true,
                "You've to write something to post! Please write somthing.",
            ],
        },
        tag1: {
            type: String,
            required: [true, "write your tags devided by space."],
            trim: true,
        },
        tag2: {
            type: String,
            required: [true, "write your tags devided by space."],
            trim: true,
        },
        tag3: {
            type: String,
            required: [true, "write your tags devided by space."],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const BlogPosts = mongoose.model("BlogPosts", blogSchema);

module.exports = BlogPosts;
