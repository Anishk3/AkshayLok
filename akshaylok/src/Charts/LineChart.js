import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useContext } from "react";
import { Line } from 'react-chartjs-2';
import { AuthContext } from "../context/authContext";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = () => {
//   const { userData } = useContext(AuthContext);
//   const currentmonth=userData?.transaction.length??0
//   const [chart, setChart] = useState({})
//   var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
//   var proxyUrl = "https://cors-anywhere.herokuapp.com/";
//   var apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";



//   useEffect(() => {
//     const fetchCoins = async () => {
//       await fetch(`${proxyUrl}${baseUrl}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-access-token': `${apiKey}`,
//           'Access-Control-Allow-Origin': "*"
//         }
//       })
//         .then((response) => {
//           if (response.ok) {
//             response.json().then((json) => {
//               console.log(json.data);
//               setChart(json.data)
//             });
//           }
//         }).catch((error) => {
//           console.log(error);
//         });
//     };
//     fetchCoins()
//   }, [baseUrl, proxyUrl, apiKey])

//   console.log("chart", chart);
  var data = {
    labels: ['December','January','February','March','April','May'],
    datasets: [{
      label: 'Price',
      data: [12,19,5,5,2,7],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }
  return (
    <div>
      <Line
        data={data}
        height={370}
        options={options}

      />
    </div>
  )
}

export default LineChart