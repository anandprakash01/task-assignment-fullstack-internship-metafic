const loginUser = async (req, res) => {
    console.log("API is working");
    res.status(200).json({message: "API is working"});
};

const registerUser = async (req, res) => {
    console.log("Register API is working");
    res.status(200).json({message: "Register API is working"});
};

const getUserById = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({message: error.message});
    }
};

// Exporting the controller
module.exports = {
    loginUser,
    registerUser,
    getUserById,
};
