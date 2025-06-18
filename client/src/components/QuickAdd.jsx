import React from "react";

const QuickAdd = ({onAdd, loading}) => {
    const quickAmounts = [250, 500, 750, 1000];

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 my-4">
            {quickAmounts.map(amount => (
                <button
                    key={amount}
                    onClick={() => onAdd(amount)}
                    disabled={loading}
                    className="relative overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 text-white px-2 rounded-xl hover:from-blue-500 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                >
                    <div className="relative z-10">
                        <div className="text-2xl font-bold">{amount}</div>
                        <div className="text-sm opacity-90">ml</div>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default QuickAdd;
