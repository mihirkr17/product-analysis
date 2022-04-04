import React from 'react';

import { useData } from '../hooks/useData';
import ChartBar from './chart/ChartBar';
import ChartLine from './chart/ChartLine';



const Dashboard = () => {
   const url = "data.json";
   const [chartData] = useData(url);

   const data = chartData.map((charts) => charts);

   return (
      <div className='dashboard__section'>
         <h1 className='text-center py-5'>Our Dashboard</h1>
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <ChartLine chartData={data}></ChartLine>
               </div>
               <div className="col-lg-6">
                  <ChartBar chartBarData={data}></ChartBar>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;