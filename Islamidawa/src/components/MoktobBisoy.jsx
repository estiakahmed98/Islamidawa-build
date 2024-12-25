import React from "react";
import { moktobData } from "@/app/data/Data";

const MoktobBisoyTally = () => {
  const getBackgroundColor = (percentage) => {
    if (percentage >= 80) {
      return "bg-teal-500"; // Greenish Teal for 80% or higher
    } else if (percentage >= 50) {
      return "bg-amber-500"; // Yellow for 50% to 79%
    } else {
      return "bg-red-500"; // Red for less than 50%
    }
  };

  return (
    <>
      <div className="flex justify-center p-10">
        <div className="bg-white border shadow-lg rounded-lg p-4 w-full max-w-sm">
          <h2 className="text-center text-lg font-bold mb-4">মক্তব বিষয়</h2>

          <div className="space-y-3 p-4">
            {moktobData.map((item, index) => {
              const percentage = (item.value / item.max) * 100; // Calculate progress percentage
              return (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs sm:text-sm font-medium">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">
                      {item.value}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full ${getBackgroundColor(
                        percentage
                      )}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoktobBisoyTally;
