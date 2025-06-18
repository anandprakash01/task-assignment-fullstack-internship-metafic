const {globalErrorHandler} = require("../utils/globalError");
const Users = require("../models/user");

const getUser = async (req, res) => {
    const userName = req.params.userName || req.query.userName;
    if (!userName) {
        return res.status(400).json({
            success: false,
            message: "Please enter Username to login",
        });
    }
    try {
        const user = await Users.findOne({userName});
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found, please register",
            });
        }
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const registerUser = globalErrorHandler(async (req, res) => {
    const userName = req.params.userName || req.query.userName;

    if (!userName) {
        return res.status(400).json({
            success: false,
            message: "Please enter Username to register",
        });
    }

    const alreadyRegistered = await Users.findOne({userName});
    if (alreadyRegistered) {
        return res.status(400).json({
            success: false,
            message: "User is already Registered, please login",
        });
    }
    const user = await Users.create({
        userName,
    });

    res.status(201).json({
        user,
    });
});

const updateDailyGoal = async (req, res) => {
    const userName = req.params.userName || req.query.userName;
    try {
        const {userId, dailyGoal} = req.body;

        const user = await User.findByIdAndUpdate(userId, {dailyGoal}, {new: true});

        res.status(200).json({
            user,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Exporting the controller
module.exports = {
    getUser,
    registerUser,
    updateDailyGoal,
};
