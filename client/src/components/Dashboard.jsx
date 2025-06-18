import React, {useEffect, useState} from "react";
import WaterProgress from "./WaterProgress";
import TodayIntakes from "./TodayIntakes";
import QuickAdd from "./QuickAdd";
import {PlusIcon} from "@heroicons/react/24/outline";

const Dashboard = ({user}) => {
    const [todayIntake, setTodayIntake] = useState({intakes: [], totalAmount: 0});
    const [customAmount, setCustomAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const dailyGoal = user?.dailyGoal || 2000; // Default to 2000ml if no user or goal set

    useEffect(() => {
        if (user) {
            console.log(user);
        }
        const waterIntake = localStorage.getItem("waterIntake");
        // console.log(waterIntake);
        if (waterIntake) {
            setTodayIntake(JSON.parse(waterIntake));
        }
    }, [user]);

    const addWaterIntake = async amount => {
        if (!amount || amount <= 0) return;

        setLoading(true);
        // try {
        //   await axios.post(`water/add`, {
        //     userId: user._id,
        //     amount: parseInt(amount)
        //   });

        //   await fetchTodayIntake();
        //   setCustomAmount('');
        // } catch (error) {
        //   console.error('Error adding water intake:', error);
        // } finally {
        //   setLoading(false);
        // }

        const newIntakeState = {
            totalAmount: todayIntake.totalAmount + parseInt(amount),
            intakes: [
                ...todayIntake.intakes,
                {
                    _id: Date.now().toString(),
                    amount: parseInt(amount),
                    timestamp: new Date().toISOString(),
                },
            ],
        };
        setTodayIntake(newIntakeState);

        localStorage.setItem("waterIntake", JSON.stringify(newIntakeState));
        setCustomAmount("");
        setLoading(false);
    };

    // const progressPercentage = user
    //     ? (todayIntake.totalAmount / user.dailyGoal) * 100
    //     : 0;

    const progressPercentage = (todayIntake.totalAmount / dailyGoal) * 100;

    return (
        <div className="text-white flex justify-around my-2">
            <div className="">
                <div className="text-center my-5">
                    <h1 className="text-4xl font-bold text-water-800 mb-6">
                        Stay Hydrated! 💧
                    </h1>
                    <p className="text-water-600">
                        Track your daily water intake and reach your hydration goals
                    </p>
                </div>
                <WaterProgress
                    current={todayIntake.totalAmount}
                    goal={user?.dailyGoal || 2000}
                    percentage={progressPercentage}
                />
            </div>
            <div className="rounded-2xl">
                <h2 className="text-2xl font-semibold text-water-800 my-6">
                    Add Water Intake
                </h2>

                {/* <QuickAdd onAdd={addWaterIntake} loading={loading} /> */}

                {/* Custom Amount */}
                <div>
                    <div className="mt-6 flex items-center gap-6">
                        <input
                            type="number"
                            placeholder="Custom amount (ml)"
                            value={customAmount}
                            onChange={e => setCustomAmount(e.target.value)}
                            className="flex px-4 py-2 border border-gray-200 rounded-lg focus-within:border-green-700 focus-within:outline-none"
                        />
                        <button
                            onClick={() => addWaterIntake(customAmount)}
                            disabled={loading || !customAmount}
                            className="p-2 bg-gray-500 text-white rounded-lg transition-all duration-200 flex items-center gap-1 cursor-pointer hover:bg-gray-600"
                        >
                            <PlusIcon className="w-5 h-5 hover:scale-110" />
                            <span>Add</span>
                        </button>
                    </div>
                    <QuickAdd onAdd={addWaterIntake} loading={loading} />
                </div>
            </div>
            <TodayIntakes
                intakes={todayIntake.intakes}
                // onRefresh={fetchTodayIntake}
            />
        </div>
    );
};

export default Dashboard;
