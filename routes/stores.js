const express = require("express");
const router = express.Router();
const store = require("../controllers/stores");

router.get("/", store.Index);

router.post("/", store.Post);

router.get("/create", store.Create);

router.get("/:id", store.Details);

router.delete("/:id", store.Delete);

module.exports = router;
