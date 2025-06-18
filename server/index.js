const express = require("express");
const connectDB = require("./config/db");

// Importing user routes
const userRoutes = require("./routes/user");
const waterIntakeRoutes = require("./routes/waterIntake");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB().catch(error => {
    console.error("Database connection failed:", error);
    process.exit(1);
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/water-intake", waterIntakeRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
