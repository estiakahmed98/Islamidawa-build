import React from "react";

const DawatiCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-center mb-6">দাওয়াতি বিষয়</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700 w-1/2">
              {item.label}
            </span>
            <div className="relative flex-1 h-4 bg-gray-200 rounded-full">
              <div
                className={`absolute h-4 rounded-full ${item.color}`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DawatiCard;
