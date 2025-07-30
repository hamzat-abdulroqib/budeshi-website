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
  { mda: "Universal Basic Education Commission", projects: 6200 },
  { mda: "National Primary Health Care Development Agency", projects: 1800 },
  { mda: "Nigerian Communications Commission", projects: 1300 },
  { mda: "National Commission For Colleges Of Education", projects: 1200 },
  { mda: "Nigeria Security And Civil Defence Corps", projects: 950 },
  { mda: "Industrial Training Fund", projects: 900 },
  { mda: "National Agency for the Control of AIDS", projects: 600 },
  { mda: "Pension Transitional Arrangement Directorate", projects: 500 },
  { mda: "Tertiary Education Trust Fund", projects: 400 },
  { mda: "Federal Road Safety Commission", projects: 350 },
];

const truncate = (str, n) =>
  str.length > n ? str.slice(0, n - 1) + "..." : str;

const VisualizationCard = () => (
  <div className="bg-white rounded-2xl shadow-sm p-6 md:p-4 m-30">
    <h3 className="font-semibold text-lg md:text-xl mb-4">
      Top 10 MDAs by Number of Projects
    </h3>
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, left: 30, bottom: 20 }}
          barCategoryGap={32}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            dataKey="mda"
            type="category"
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y}
                dy={4}
                fontSize={14}
                fontFamily="inherit"
                fill="#444"
              >
                {truncate(payload.value, 28)}
              </text>
            )}
            width={180}
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
