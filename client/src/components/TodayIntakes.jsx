import React from "react";
import {ClockIcon} from "@heroicons/react/24/outline";

const TodayIntakes = ({intakes}) => {
    return (
        <div className="rounded-2xl">
            <h2 className="text-2xl font-semibold my-5">Today's Intake</h2>
            {!intakes || intakes.length === 0 ? (
                <div className="text-center text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4"></div>
                    <p>No water intake recorded today. Start hydrating!</p>
                </div>
            ) : (
                <div className="p-1 max-h-80 flex flex-col gap-2 overflow-y-auto">
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

export default TodayIntakes;
