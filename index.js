const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blogs.route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", blogRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello Visitor!",
    });
});

module.exports = app;
