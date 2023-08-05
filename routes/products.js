const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getSingleProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateValue)
  .delete("/:id", productController.deleteProduct);

exports.routes = router;
