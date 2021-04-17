const router = require("express").Router();
const userRoutes = require("./users");
const filterRoutes = require("./filter");

// User routes
router.use("/users", userRoutes);
router.use("/filter", filterRoutes);

module.exports = router;
