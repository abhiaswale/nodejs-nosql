const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));

const errorController = require("./controllers/error");
const userRoutes = require("./routes/users");

app.use(userRoutes);

app.use("/", errorController.errorPage);

mongoose
  .connect(
    "mongodb+srv://abhi:12345@cluster0.jfqdb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
