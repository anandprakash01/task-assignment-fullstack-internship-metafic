const getWaterIntakeByUserId = async (req, res) => {
    const userId = req.params.userId;
    res.status(200).json({message: "Get Water Intake API is working", userId: userId});
};

const addWaterIntake = async (req, res) => {
    const userId = req.params.userId;
    res.status(200).json({message: "Add Water Intake API is working"});
};

module.exports = {
    getWaterIntakeByUserId,
    addWaterIntake,
};
