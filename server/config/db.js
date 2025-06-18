const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URI || "mongodb://localhost:27017/watertracker",
            {}
        );
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error while connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
