import { Line } from 'react-chartjs-2'

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 255, 255)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
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

const LineChart = () => (
  <div>
    <div className="bg-three py-8">
    
        <div className="container px-4 mx-auto md:flex md:items-center md:w-4/5 w-auto mt-8">
          <Line data={data} options={options} />
        </div>
    </div>
  </div>
)

export default LineChart