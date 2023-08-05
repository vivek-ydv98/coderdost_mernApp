const express = require("express");
const router = express.Router();
const userController = require("../controller/users");

router
  .post("/", userController.createUser)
  .get("/", userController.getAllUser)
  .get("/:id", userController.getSingleUser)
  .put("/:id", userController.updateUserObject)
  .patch("/:id", userController.updateUserValue)
  .delete("/:id", userController.deleteUser);

exports.routes = router;
