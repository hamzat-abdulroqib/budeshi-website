import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { state: "Abuja", projects: 5800 },
  { state: "Kano", projects: 1200 },
  { state: "Kwara", projects: 1100 },
  { state: "Lagos", projects: 1050 },
  { state: "Adamawa", projects: 900 },
  { state: "Borno", projects: 800 },
  { state: "Kogi", projects: 750 },
  { state: "Edo", projects: 700 },
  { state: "Bauchi", projects: 650 },
];

const VisualizationCard = () => (
  <div className="bg-white rounded-2xl shadow-sm p-6 md:p-4 m-30">
    <h3 className="font-semibold text-lg md:text-xl mb-4">
      Top 10 States by Number of Projects
    </h3>
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 40, left: 30, bottom: 20 }}
          barCategoryGap={32}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            dataKey="state"
            type="category"
            tick={{ fontSize: 16, fontFamily: "monserate" }}
            width={100}
          />
          <Tooltip />
          <Bar dataKey="projects" fill="#2c419c" radius={[0, 8, 8, 0]}>
            <LabelList
              dataKey="projects"
              position="right"
              fill="#222"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default VisualizationCard;
