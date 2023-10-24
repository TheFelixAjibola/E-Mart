# E-Mart

An Online Store Built with NodeJS

// Define route handlers for stores

// List all stores
// app.get("/stores", async (req, res) => {
// const stores = await Store.find();
// res.render("store-list", { stores });
// });

// View a specific store
// app.get("/stores/:id", async (req, res) => {
// const store = await Store.findById(req.params.id);
// if (!store) {
// return res.status(404).send("Store not found");
// }
// res.render("store-view", { store });
// });

// Create a new store (GET and POST)
// app.get("/stores/new", (req, res) => {
// res.render("store-create");
// });

// app.post("/stores", async (req, res) => {
// const { name, address, city, state, zipCode /_ other fields _/ } = req.body;
// const store = new Store({
// name,
// address,
// city,
// state,
// zipCode /_ other fields _/,
// });
// await store.save();
// res.redirect("/stores");
// });

// Update an existing store (GET and POST)
// app.get("/stores/:id/edit", async (req, res) => {
// const store = await Store.findById(req.params.id);
// if (!store) {
// return res.status(404).send("Store not found");
// }
// res.render("store-edit", { store });
// });

// app.post("/stores/:id", async (req, res) => {
// const { name, address, city, state, zipCode /_ other fields _/ } = req.body;
// await Store.findByIdAndUpdate(req.params.id, {
// name,
// address,
// city,
// state,
// zipCode /_ other fields _/,
// });
// res.redirect("/stores");
// });

// Delete a store
// app.post("/stores/:id/delete", async (req, res) => {
// await Store.findByIdAndRemove(req.params.id);
// res.redirect("/stores");
// });

// Define route handlers for store locations

// List all store locations
// app.get("/store-locations", async (req, res) => {
// const storeLocations = await StoreLocation.find();
// res.render("store-location-list", { storeLocations });
// });

// View a specific store location
// app.get("/store-locations/:id", async (req, res) => {
// const storeLocation = await StoreLocation.findById(req.params.id);
// if (!storeLocation) {
// return res.status(404).send("Store location not found");
// }
// res.render("store-location-view", { storeLocation });
// });

// Create a new store location (GET and POST)
// app.get("/store-locations/new", (req, res) => {
// res.render("store-location-create");
// });

// app.post("/store-locations", async (req, res) => {
// const { name, address, city, state, zipCode /_ other fields _/ } = req.body;
// const storeLocation = new StoreLocation({
// name,
// address,
// city,
// state,
// zipCode /_ other fields _/,
// });
// await storeLocation.save();
// res.redirect("/store-locations");
// });

// // Update an existing store location (GET and POST)
// app.get("/store-locations/:id/edit", async (req, res) => {
// const storeLocation = await StoreLocation.findById(req.params.id);
// if (!storeLocation) {
// return res.status(404).send("Store location not found");
// }
// res.render("store-location-edit", { storeLocation });
// });

// app.post("/store-locations/:id", async (req, res) => {
// const { name, address, city, state, zipCode } = req.body;
// await StoreLocation.findByIdAndUpdate(req.params.id, {
// name,
// address,
// city,
// state,
// zipCode,
// });
// res.redirect("/store-locations");
// });

// Delete a store location
// app.post("/store-locations/:id/delete", async (req, res) => {
// await StoreLocation.findByIdAndRemove(req.params.id);
// res.redirect("/store-locations");
// });
