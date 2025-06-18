import React, {useState} from "react";
// import axios from "axios";
import {CogIcon} from "@heroicons/react/24/outline";

const API_BASE = "http://localhost:5000/api";

const Settings = ({user, setUser}) => {
    const [dailyGoal, setDailyGoal] = useState(user?.dailyGoal || 2000);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const updateDailyGoal = async () => {
        if (!dailyGoal || dailyGoal <= 0) {
            setMessage("Please enter a valid daily goal.");
            return;
        }

        setLoading(true);
        // try {
        //   const response = await axios.put(`${API_BASE}/users/goal/${user._id}`, {
        //     dailyGoal: parseInt(dailyGoal)
        //   });

        //   setUser(response.data);
        //   setMessage('Daily goal updated successfully!');

        //   setTimeout(() => setMessage(''), 3000);
        // } catch (error) {
        //   console.error('Error updating daily goal:', error);
        //   setMessage('Error updating daily goal.');
        // } finally {
        //   setLoading(false);
        // }
        setDailyGoal(parseInt(dailyGoal));
        // setUser({ ...user, dailyGoal: parseInt(dailyGoal) });
    };

    return (
        <div className="max-w-2xl mx-auto text-white">
            <div className="text-center my-3">
                <h1 className="text-4xl font-bold mb-1">Settings</h1>
                <p className="text-gray-200">Customize your hydration goals</p>
            </div>

            <div className="rounded-2xl px-8">
                <div className="flex items-center space-x-3 mb-6">
                    <CogIcon className="w-8 h-8 text-water-600" />
                    <h2 className="text-2xl font-semibold text-water-800">Daily Goal</h2>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Daily Water Goal (ml)
                        </label>
                        <input
                            type="number"
                            value={dailyGoal}
                            onChange={e => setDailyGoal(e.target.value)}
                            className="w-full px-4 py-3 border rounded-lg focus-within:outline-none focus-within:border-green-700"
                            placeholder="Enter your daily goal in ml"
                        />
                        <p className="text-sm text-water-600 mt-2">
                            Recommended: 2000ml (2 liters) per day
                        </p>
                    </div>

                    <button
                        onClick={updateDailyGoal}
                        disabled={loading}
                        className="w-full px-6 py-3 bg-water-500 text-white rounded-lg hover:bg-water-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 bg-gray-500 hover:bg-gray-600 cursor-pointer"
                    >
                        {loading ? "Updating..." : "Update Goal"}
                    </button>

                    {message && (
                        <div
                            className={`p-4 rounded-lg text-center ${
                                message.includes("Error")
                                    ? "bg-red-100 text-red-700"
                                    : "bg-green-100 text-green-700"
                            }`}
                        >
                            {message}
                        </div>
                    )}
                </div>

                <div className="mt-8 p-6 bg-water-50 rounded-lg">
                    <h3 className="font-semibold text-water-800 mb-2">
                        Hydration Tips 💡
                    </h3>
                    <ul className="text-sm text-water-600 space-y-1">
                        <li>• Start your day with a glass of water</li>
                        <li>• Keep a water bottle nearby</li>
                        <li>• Set reminders throughout the day</li>
                        <li>• Eat water-rich foods like fruits and vegetables</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Settings;
