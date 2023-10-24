const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");

const store = require("./routes/stores");

// Set the view engine to EJS
app.set("view engine", "ejs");

const dbURL =
  "mongodb+srv://felix:qwerty123@nodetuts.qsuftsz.mongodb.net/node-tuts?retryWrites=true&w=majority";

// Connect to MongoDB database
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

// middleware and static files
app.use(express.static("global"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// basic routes
app.get("/", (req, res) => {
  res.redirect("/stores");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// app routes
app.use("/stores", store);

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
// Define Mongoose models and schemas (for Store and StoreLocation)
