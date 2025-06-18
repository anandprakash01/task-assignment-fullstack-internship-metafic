const mongoose = require("mongoose");

const waterIntakeSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {timestamps: true}
);

const WaterIntake = mongoose.model("waterIntake", waterIntakeSchema);

module.exports = WaterIntake;
