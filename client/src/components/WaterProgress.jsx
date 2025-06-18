import React from "react";

const WaterProgress = ({current, goal, percentage}) => {
    const clampedPercentage = Math.min(percentage, 100);

    return (
        <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#e0f2fe"
                        strokeWidth="8"
                        fill="none"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${clampedPercentage * 2.827} 282.7`}
                        className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#0284c7" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-water-800">
                        {Math.round(clampedPercentage)}%
                    </div>
                    <div className="text-sm text-water-600">Complete</div>
                </div>
            </div>

            <div className="space-y-2">
                <div className="text-2xl font-semibold text-water-800">
                    {current} ml / {goal} ml
                </div>
                <div className="text-water-600">
                    {goal - current > 0
                        ? `${goal - current} ml remaining`
                        : "Goal achieved! 🎉"}
                </div>
            </div>
        </div>
    );
};

export default WaterProgress;
