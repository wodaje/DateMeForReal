const router = require("express").Router();
const userController = require("../../controllers/userController");

// // Matches with "/api/user"
// router.route("/filter")
//   .get(userController.findAll)
//   .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:gender")
  .get(userController.findByGender)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
