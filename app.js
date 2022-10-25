const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const movieController = require("./controllers/movieControllers");
const movieRouter = require("./routes/movieRoute");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(movieRouter);

app.listen(3002);
