import React from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJs.register(ArcElement, Tooltip, Legend);


function Dashboard() {
  const data = {
    labels: ['3v3',"5v5","7v7","11v11"],
    datasets:[
      {
        data: [3,10,5,3],
        backgroundColor: ['#05445E','#189AB4','#75E6DA',"#D4F1F4"]
      }
    ]
  };

  const options = {
    
  }

  const footballData = [
    { x: "5v5", y: 4 },
    { x: "7v7", y: 56 },
    { x: "11v11", y: 89 },
  ];

  return (

      

          <div class="flex justify-center rounded  dark:bg-gray-800">
            <div className="p-16 w-50 ">
              <Pie 
               data={data}
               options = {options}
              /> 
            </div>
          </div>
   
  );
}

export default Dashboard;
