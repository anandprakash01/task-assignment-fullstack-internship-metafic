const express = require("express");
const router = new express.Router();

const waterIntakeController = require("../controllers/waterIntake");

router.get("/:userId", waterIntakeController.getWaterIntakeByUserId);
router.post("/:userId", waterIntakeController.addWaterIntake);

module.exports = router;
