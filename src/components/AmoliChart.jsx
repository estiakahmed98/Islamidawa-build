"use client";

import PropTypes from "prop-types";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import renderLegend from "./PiechartLegend";

const AmoliChart = ({
  data,
  innerRadius = 70,
  outerRadius = 100,
  startAngle = 90,
  endAngle = 450,
}) => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-blue-50 border to-white shadow-xl grow">
      {/* Title Section */}
      <div className="p-6 text-center border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">আ’মলি মুহাসাবা</h2>
      </div>

      {/* Chart Section */}
      <div className="max-w-sm mx-auto relative p-6 rounded-b-lg">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart className="p-4">
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              startAngle={startAngle}
              endAngle={endAngle}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="bottom"
              height={36}
              content={renderLegend}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

AmoliChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
};

export default AmoliChart;
