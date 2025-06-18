const express = require("express");
const router = new express.Router();

// Importing user controller
const userController = require("../controllers/user");

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);
router.get("/:userId", userController.getUserById);

// Export the router
module.exports = router;
