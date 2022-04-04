import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartBar = ({ chartBarData }) => {
   return (
      <BarChart width={500} height={400} data={chartBarData}>
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="month" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Bar dataKey="investment" fill="#8884d8" />
         <Bar dataKey="sell" fill="orange" />
         <Bar dataKey="revenue" fill="blue" />
      </BarChart>
   );
};

export default ChartBar;