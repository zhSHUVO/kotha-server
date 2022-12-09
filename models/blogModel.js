const { default: mongoose } = require("mongoose");

const blogSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"],
            trim: true,
            lowercase: true,
        },
        title: {
            type: String,
            required: [true, "Post title is required!"],
            trim: true,
        },
        post: {
            type: String,
            required: [
                true,
                "You've to write something to post! Please write somthing.",
            ],
        },
        tag: {
            type: String,
            required: [true, "write your tags devided by space."],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const BlogModel = mongoose.model("BlogModel", blogSchema);

module.exports = BlogModel;
