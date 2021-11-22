const express = require("express");
const productController = require("../controllers/productController");
const clientController = require("../controllers/clientController");

//define a router and create routes
const router = express.Router();

//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get("/api/catalogue", productController.getCatalogue);
router.get("/api/article/:id", productController.getProductByID);

router.get("/api/login", clientController.loginControl);
router.get("/api/register", clientController.registerControl);

//export router
module.exports = router;
