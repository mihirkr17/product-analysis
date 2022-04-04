import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartLine = ({ chartData }) => {
   return (
      <LineChart
         width={500}
         height={400}
         data={chartData}
         margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
         }}
      >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="month" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="investment" stroke="orange"></Line>
         <Line type="monotone" dataKey="sell" stroke="blue" activeDot={{ r: 8 }} />
         <Line type="monotone" dataKey="revenue" stroke="red"></Line>
      </LineChart>
   );
};

export default ChartLine;