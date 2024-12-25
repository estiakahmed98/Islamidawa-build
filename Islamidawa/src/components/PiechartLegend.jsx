"use client";

const renderLegend = (props) => {
  const { payload } = props;

  if (!payload || payload.length === 0) {
    return <p>No legend data available.</p>;
  }

  return (
    <ul className="flex space-x-4">
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          className="flex items-center space-x-2 text-sm font-medium"
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="text-gray-700 text-xl">{entry.payload.name}</span>
          <span className="text-gray-800 text-xl font-semibold">
            ({entry.payload.value}%)
          </span>
        </li>
      ))}
    </ul>
  );
};

export default renderLegend;
