import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { year: "2014", contracts: 50 },
  { year: "2015", contracts: 900 },
  { year: "2016", contracts: 1400 },
  { year: "2017", contracts: 1000 },
  { year: "2018", contracts: 1200 },
  { year: "2019", contracts: 300 },
  { year: "2020", contracts: 900 },
  { year: "2021", contracts: 350 },
  { year: "2022", contracts: 200 },
];

const VisualizationCard3 = () => (
  <div className="bg-white rounded-2xl shadow-sm p-6 md:p-4 m-6">
    <h3 className="font-semibold text-lg md:text-xl mb-4">
      Contracts Awarded by Year
    </h3>
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="contracts"
            stroke="#2c419c"
            strokeWidth={2}
            dot={{ r: 4, fill: "#2c419c" }}
            activeDot={{ r: 6 }}
          />
          <Area
            type="monotone"
            dataKey="contracts"
            stroke="none"
            fill="#2c419c"
            fillOpacity={0.07}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
export default VisualizationCard3;
