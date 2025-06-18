import React from "react";
import {useEffect} from "react";
import {ClockIcon} from "@heroicons/react/24/outline";

const History = () => {
    const [intakes, setIntakes] = React.useState([]);
    useEffect(() => {
        const waterIntake = localStorage.getItem("waterIntake");
        // console.log(waterIntake);
        if (waterIntake) {
            setIntakes(JSON.parse(waterIntake).intakes || []);
        }
    }, []);
    return (
        <div className="rounded-2xl flex flex-col items-center">
            <h2 className="text-2xl font-semibold my-5 mx-auto text-white">
                Your water intake history
            </h2>
            {!intakes || intakes.length === 0 ? (
                <div className="text-center text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4"></div>
                    <p>No water intake recorded. Start hydrating!</p>
                </div>
            ) : (
                <div className="p-1 flex flex-col gap-2 max-w-80 text-gray-200">
                    {intakes.map((intake, index) => (
                        <div
                            key={intake._id || index}
                            className="flex items-center justify-between px-6 py-2 bg-gray-500 rounded-lg"
                        >
                            <div className="flex items-center gap-2">
                                <div className="">💧</div>
                                <div>
                                    <div className="font-semibold text-water-800">
                                        {intake.amount} ml
                                    </div>
                                    <div className="text-sm text-water-600 flex items-center space-x-1">
                                        <ClockIcon className="w-4 h-4" />
                                        <span>
                                            {new Date(
                                                intake.timestamp
                                            ).toLocaleTimeString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default History;
