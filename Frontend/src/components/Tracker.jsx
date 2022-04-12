import React from 'react';
import "./styles/Tracker.scss";
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const Tracker = () => {
  return (
    <div>
      <h2>WEEKLY TRACKER</h2>
      <div className='chart-div'>
        <Chart
          type="line"
          data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 2
          }],
          options: {
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              }
            }
          }
          }}
        />
      </div>
    </div>
  )
}

export default Tracker;
