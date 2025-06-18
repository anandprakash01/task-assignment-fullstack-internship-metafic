const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        // name: {
        //     type: String,
        //     required: false,
        // },
        // email: {
        //     type: String,
        //     required: false,
        //     unique: true,
        // },
        // password: {
        //     type: String,
        //     required: false,
        // },
        dailyGoal: {
            type: Number,
            default: 2000, // 2 liters in ml
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
