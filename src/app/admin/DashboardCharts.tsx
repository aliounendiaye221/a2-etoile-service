"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type ChartProps = {
  data: { date: string; Demandes: number }[];
};

export default function DashboardCharts({ data }: ChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(value) => {
               // value is YYYY-MM-DD, just return DD/MM
               const [, month, day] = value.split('-');
               return `${day}/${month}`;
            }}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            allowDecimals={false}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="Demandes" 
            stroke="#0ea5e9" 
            strokeWidth={3}
            activeDot={{ r: 8, fill: '#0ea5e9', stroke: '#fff', strokeWidth: 2 }} 
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
