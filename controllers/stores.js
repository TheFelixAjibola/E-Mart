const Store = require("../models/stores");

const Index = (req, res) => {
  Store.find()
    .sort({ createdAt: 1 })
    .then((result) => {
      res.render("stores/index", { title: "All Stores", store: result });
    })
    .catch((err) => console.log(err));
};

const Details = (req, res) => {
  const id = req.params.id;

  Store.findById(id)
    .then((result) => {
      res.render("stores/details", { stores: result, title: "Store Details" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Store Not Found" });
    });
};

const Create = (req, res) => {
  res.render("stores/create", { title: "Create" });
};

const Post = (req, res) => {
  const store = new Store(req.body);

  store
    .save()
    .then((result) => res.redirect("/stores"))
    .catch((err) => console.log(err));
};

const Delete = (req, res) => {
  const id = req.params.id;

  Store.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/stores" }))
    .catch((err) => console.log(err));
};

module.exports = {
  Index,
  Create,
  Post,
  Details,
  Delete,
};
