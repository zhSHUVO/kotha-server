const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./index");
const port = process.env.PORT || 8080;
mongoose.set("strictQuery", false);

mongoose
    .connect(process.env.DATABASE_LOCAL)
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => console.log(`Error: ${error.name}`));

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
