const express = require("express");
const app = express();
const path = require("node:path");
const categoryRoutes = require("./routes/categoryRoutes");
const itemsRoutes = require("./routes/itemsRoutes");
const itemRouter = require("./routes/itemRoutes");
const categoryFormRouter = require("./routes/categoryFormRoutes");
const itemFormRouter = require("./routes/itemFormRoutes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assestsPath = path.join(__dirname, "public");
app.use(express.static(assestsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", categoryRoutes);
app.use("/", itemsRoutes);
app.use("/item", itemRouter);
app.use("/", categoryFormRouter);
app.use("/", itemFormRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port: ${PORT}`);
});