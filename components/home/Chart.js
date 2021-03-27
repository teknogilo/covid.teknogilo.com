import { Line } from 'react-chartjs-2'
import { useState , useEffect } from 'react'

import { fetchHistoricalData } from '../../lib/data'

const LineChart = () => {

  const [dailyData, setDailyData] = useState({
    cases : [],
    deaths : [],
    recovered : [],
    dates : [],
  })

  useEffect(() => {
    const fetchHistoryData = async () => {
      setDailyData(await fetchHistoricalData())
    }
    fetchHistoryData()
    
    })

  const data = {
    labels: dailyData.dates,
    datasets: [
      {
        label: 'Cases',
        data: dailyData.cases,
        fill: true,
        backgroundColor: 'rgba(0, 200, 147, 0.2)',
        borderColor: '#00C893',
      },
      {
        label: 'Deaths',
        data: dailyData.deaths,
        fill: true,
        backgroundColor: 'rgba(255, 92, 47, 0.2)',
        borderColor: '#FF5C2F',
      },
      {
        label: 'Recovered',
        data: dailyData.recovered,
        fill: true,
        backgroundColor: 'rgba(0, 176, 255, 0.2)',
        borderColor: '#00B0FF',
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  

  return (
    <div>
      <div className="bg-white py-4">
      
          <div className="container px-4 mx-auto md:flex md:items-center md:w-4/5 w-auto mt-8">
            <Line data={data} options={options} />
          </div>
      </div>
    </div>
  )
}

export default LineChart