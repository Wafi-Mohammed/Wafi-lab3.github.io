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

router.post("/api/login", clientController.loginControl);
router.post("/api/register", clientController.registerControl);
router.get("/api/clients", clientController.getClient);

//export router
module.exports = router;
