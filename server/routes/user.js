const express = require("express");
const router = new express.Router();

// Importing user controller
const userController = require("../controllers/user");

// Get user
router.get("/:userName", userController.getUser);
router.post("/register", userController.registerUser);
// Update daily goal
router.put("/goal/:userId", userController.updateDailyGoal);

// Export the router
module.exports = router;
